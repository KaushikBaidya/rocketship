import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import TopHeader from '../../../../components/dashboard/TopHeader'
import axios from 'axios'
import Image from 'next/image'
import InputFile from '../../../../components/layout/InputFile'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: ['12px', '16px', '18px'] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
    [{ color: [] }, { background: [] }],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

const formats = [
  'header',
  'font',
  'fontsize',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'color',
  'background',
]

function Details() {
  const router = useRouter()
  const { id } = router.query

  const [isLoading, setLoading] = useState(false)

  const [data, setData] = useState()
  const [updatedTitle, setUpdatedTitle] = useState()
  const [updatedDescription, setUpdatedDescription] = useState()
  const [file, setFile] = useState()

  const handleSubmit = async (blogId) => {
    console.log(blogId)
    await axios
      .put(`/api/blogs/${blogId}`, {
        title: updatedTitle,
        description: updatedDescription,
        filename: file,
      })
      .then((response) => {
        if (response.data.message) {
          console.log(response.data.message)
        } else {
          console.log('failed to post data')
        }
      })
  }

  useEffect(() => {
    const handleData = async () => {
      const result = await axios.get(`/api/blogs/${id}`)
      // console.log(result.data[0]);
      setData(result.data[0])
      setUpdatedTitle(result.data[0]?.title)
      setUpdatedDescription(result.data[0]?.description)
      setFile(result.data[0]?.img)
    }
    handleData()
  }, [id])

  // console.log(data);

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader title="Edit Blog Post" btn="Return" path="/dashboard/post" />

      <div>
        <form>
          <div>
            <input />
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-800"
            >
              Title
            </label>
            <input
              type="text"
              defaultValue={data?.title}
              onChange={(e) => {
                setUpdatedTitle(e.target.value)
              }}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label
              htmlFor="upload_image"
              className="block text-sm font-semibold text-gray-800"
            >
              Upload Image
            </label>
            {file?.length > 0 ? (
              <Image
                // src={`https://lh3.googleusercontent.com/d/${file}=s220?authuser=0`}
                src={`https://drive.google.com/thumbnail?id=${file}`}
                // src={`https://drive.google.com/uc?export=view&id=${file}`}
                alt="PHOTO"
                height={300}
                width={300}
              />
            ) : (
              <span></span>
            )}
            <InputFile
              name="photo"
              label="Photo"
              accept="image/*"
              action={setFile}
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-800"
            >
              Description
            </label>
            {/* <textarea
              type="text"
              defaultValue={data?.description}
              onChange={(e) => {
                setUpdatedDescription(e.target.value);
              }}
              className="block w-full h-[300px] px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            /> */}
            {/* <JoditEditor
              ref={editor}
              value={updatedDescription}
              onChange={(e) => {
                setUpdatedDescription(e)
              }}
              // onChange={(newContent) => contentFieldChanged(newContent)}
            /> */}
            <QuillNoSSRWrapper
              value={updatedDescription}
              onChange={(e) => {
                setUpdatedDescription(e)
              }}
              modules={modules}
              formats={formats}
              theme="snow"
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={() => handleSubmit(data?.blogId)}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Details

import React, { useState, useRef } from 'react'
import axios from 'axios'
import TopHeader from '../../../components/dashboard/TopHeader'
import InputFile from '../../../components/layout/InputFile'
import Image from 'next/image'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
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
  'size',
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

const AddBlog = () => {
  const editor = useRef(null)

  const [title, setTitle] = useState('')
  const [file, setFile] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios
      .post('/api/blogs/createBlog', {
        title: title,
        filename: file,
        description: description,
      })
      .then((response) => {
        if (response.data.message) {
          // console.log(response.data.message)
          toast.success('Success Notification !', {
            position: toast.POSITION.TOP_CENTER,
          })
        } else {
          console.log('failed to post data')
        }
      })

    setTitle('')
    setFile('')
    setDescription('')
  }

  // console.log(description)

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Add New Blog Post"
        btn="Return"
        path="/dashboard/post"
      />
      <div>
        <form>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-800"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Title..."
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-800"
            >
              Upload Image
            </label>

            {file.length > 0 ? (
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
              name="description"
              placeholder="Description..."
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="block w-full h-[300px] px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            /> */}
            <QuillNoSSRWrapper
              value={description}
              modules={modules}
              formats={formats}
              theme="snow"
              onChange={(e) => {
                setDescription(e)
              }}
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddBlog

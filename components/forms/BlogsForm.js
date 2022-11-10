import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import Image from 'next/image'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import InputFile from '../layout/InputFile'

const schema = yup
  .object({
    blogId: yup.string().max(50),
    title: yup.string().required('Required.').max(50),
    description: yup.string().required('Required.'),
  })
  .shape({
    img: yup.mixed(),
  })

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

const BlogsForm = ({
  defaultValues,
  action,
  path,
  returnPath,
  mutateAsync,
}) => {
  const router = useRouter()

  const [file, setFile] = useState(defaultValues.img)
  const [description, setDescription] = useState(defaultValues.description)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  })
  //   const { title, description } = errors

  const onSubmit = async (FormData) => {
    console.log('clicked')
    console.log(FormData)
    var data = new FormData()
    data.append('blogId', FormData.blogId)
    data.append('title', FormData.title)
    data.append('description', description)
    data.append('img', file)
    try {
      await mutateAsync({
        path: path,
        formData: data,
      }).then((response) => {
        console.log(response.status)
        if (response.status === 200) {
          toast.success('Data Saved!')
        }
      })
    } catch (error) {
      toast.error('error')
    } finally {
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('blogId')} />
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-semibold text-gray-800"
        >
          Title
        </label>
        <input
          type="text"
          placeholder="Title..."
          defaultValue={defaultValues.title}
          {...register('title')}
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

        <QuillNoSSRWrapper
          //   {...register('description')}
          defaultValue={defaultValues.description}
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
          //   onClick={console.log('clicked')}
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default BlogsForm

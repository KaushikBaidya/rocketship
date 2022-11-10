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
    testimonialId: yup.string().max(50),
    title: yup.string().required('Required.').max(50),
    description: yup.string().required('Required.'),
  })
  .shape({
    img: yup.mixed(),
  })

const TestimonialForm = ({
  defaultValues,
  action,
  path,
  returnPath,
  mutateAsync,
}) => {
  const [file, setFile] = useState(defaultValues.img)
  console.log(file)
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

  const onSubmit = async (formData) => {
    // console.log('clicked')
    // console.log(formData)
    // var data = new FormData()
    console.log(formData)
    // var data = new FormData()
    // data.append('testimonialId', formData.testimonialId)
    // data.append('title', formData.title)
    // data.append('description', formData.description)
    // data.append('img', formData.file)

    // console.log(data)
    // // console.log(data.append('', formData.description))
    try {
      await mutateAsync({
        path: path,
        formData: formData,
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
      <input type="hidden" {...register('testimonialId')} />

      <div>
        {/* <label
          htmlFor="title"
          className="block text-sm font-semibold text-gray-800"
        >
          Upload Image
        </label> */}

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
          name="img"
          label="Upload Image"
          accept="image/*"
          register={register}
          defaultImage={file}
          action={setFile}
        />
      </div>
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-semibold text-gray-800"
        >
          Name
        </label>
        <input
          type="text"
          placeholder="Name..."
          defaultValue={defaultValues.title}
          {...register('title')}
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-semibold text-gray-800"
        >
          Opinion
        </label>
        <textarea
          type="text"
          placeholder="Description..."
          {...register('description')}
          defaultValue={defaultValues.description}
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div className="mt-6">
        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
          Save
        </button>
      </div>
    </form>
  )
}

export default TestimonialForm

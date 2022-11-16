import React, { Component } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import InputFile from '../InputFile'
import Input from '../Input'
import SaveButton from '../dashboard/button/SaveButton'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'

const schema = yup
  .object({
    blogId: yup.string().max(50),
    title: yup.string().required('Required.').max(50),
  })
  .shape({
    img: yup.mixed(),
  })

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const BlogsForm = ({ defaultValues, path, returnPath, mutateAsync }) => {
  const [imageUrl, setPhoto] = useState(defaultValues.img)
  const [description, setDescription] = useState(
    defaultValues.description === '' ? '' : defaultValues.description,
  )
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  })

  const { title, img } = errors

  const onSubmit = async (formData) => {
    setSubmitting(true)
    let data = {
      blogId: formData.blogId,
      title: formData.title,
      description: description,
      img: imageUrl,
    }
    try {
      const { status } = await mutateAsync({
        path: path,
        formData: data,
      })
      if (status === 201) {
        toast.success('Saved successfully!')
      }
      if (status === 204) {
        toast.success('Update successful!')
        router.push(returnPath)
      }
    } catch (error) {
      if (error.response) {
        toast.error('Response : ' + error.response.data)
      } else if (error.request) {
        toast.error('Request : ' + error.message)
      } else {
        toast.error('Error :', error.message)
      }
    } finally {
      reset()
      setDescription()
      setPhoto('')
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('blogId')} />
      <div className="form-col">
        {imageUrl?.length > 0 ? (
          <Image
            src={`https://drive.google.com/thumbnail?id=${imageUrl}`}
            alt="PHOTO"
            width={100}
            height={100}
          />
        ) : (
          <span></span>
        )}
        <InputFile
          name="picture"
          label="Upload Image"
          accept="image/*"
          register={register}
          action={setPhoto}
          errorMessage={img?.message}
        />
        <Input
          name="title"
          label="Title"
          type="text"
          register={register}
          errorMessage={title?.message}
        />

        <QuillNoSSRWrapper
          defaultValue={defaultValues.description}
          // modules={modules}
          // formats={formats}
          theme="snow"
          onChange={(e) => {
            setDescription(e)
          }}
        />

        <SaveButton btnText="Save" disabled={submitting} />
      </div>
    </form>
  )
}

export default BlogsForm

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import InputFile from '../InputFile'
import Input from '../Input'
import { useRouter } from 'next/router'
import SaveButton from '../dashboard/button/SaveButton'
import TextArea from '../TextArea'

const schema = yup
  .object({
    testimonialId: yup.string().max(50),
    title: yup.string().required('Required.').max(50),
    description: yup.string().required('Required.'),
  })
  .shape({
    img: yup.mixed(),
  })

const TestimonialForm = ({ defaultValues, path, mutateAsync }) => {
  const [imageUrl, setPhoto] = useState(defaultValues.img)
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
  const { title, description, img } = errors

  const onSubmit = async (formData) => {
    setSubmitting(true)
    let data = {
      testimonialId: formData.testimonialId,
      title: formData.title,
      description: formData.description,
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
        router.push('/dashboard/testimonials')
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
      setPhoto('')
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('testimonialId')} />

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
          label="Name"
          type="text"
          register={register}
          errorMessage={title?.message}
        />

        <TextArea
          name="description"
          label="Description"
          type="text"
          register={register}
          errorMessage={description?.message}
        />

        <SaveButton btnText="Save" disabled={submitting} />
      </div>
    </form>
  )
}

export default TestimonialForm

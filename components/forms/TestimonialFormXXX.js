import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import InputFile from '../layout/InputFile'
import Input from '../Input'

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
  const [imageUrl, setPhoto] = useState(defaultValues.img)

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
    console.log(formData)
    let data = {
      testimonialId: formData.testimonialId,
      title: formData.title,
      description: formData.description,
      img: imageUrl,
    }
    console.log(data)
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
      <input type="hidden" {...register('testimonialId')} />

      <div>
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
      </div>
      <div>
        <Input
          name="title"
          label="Title"
          type="text"
          register={register}
          errorMessage={title?.message}
        />
      </div>
      <div>
        <Input
          name="description"
          label="Description"
          type="text"
          register={register}
          errorMessage={description?.message}
        />
      </div>
      <div className="mt-6">
        <button className="save-btn">Save</button>
      </div>
    </form>
  )
}

export default TestimonialForm

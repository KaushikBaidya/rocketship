import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-hot-toast'
import Input from '../../components/Input'
import SaveButton from '../dashboard/button/SaveButton'
import { useRouter } from 'next/router'
// import { usePostData } from '../../hooks/DataApi'

const schema = yup.object({
  achievementId: yup.string().max(50),
  title: yup.string().required('Required.').max(50),
  description: yup.string().required('Required.'),
})

const AchievementFrom = ({ defaultValues, path, mutateAsync }) => {
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
  const { title, description } = errors
  // const { mutateAsync } = usePostData()

  const onSubmit = async (formData) => {
    setSubmitting(true)
    try {
      const { status } = await mutateAsync({
        path: path,
        formData: formData,
      })
      if (status === 201) {
        toast.success('Saved successfully!')
      }
      if (status === 204) {
        toast.success('Update successful!')
        router.push('/dashboard/achievement')
      }
    } catch (error) {
      if (error.response) {
        toast.error('Response : ' + error.response.data)
        console.log(error)
      } else if (error.request) {
        toast.error('Request : ' + error.message)
      } else {
        toast.error('Error :', error.message)
      }
    } finally {
      reset()
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('achievementId')} />
      <div className="form-col">
        <Input
          name="title"
          label="Title"
          type="text"
          register={register}
          errorMessage={title?.message}
        />

        <Input
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

export default AchievementFrom

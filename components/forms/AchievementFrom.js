import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
// import { usePutData, usePostData } from '../../hooks/DataApi'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const schema = yup.object({
  achievementId: yup.string().max(50),
  title: yup.string().required('Required.').max(50),
  description: yup.string().required('Required.'),
})

const AchievementFrom = ({
  defaultValues,
  action,
  path,
  returnPath,
  mutateAsync,
}) => {
  const router = useRouter()

  // const { mutateAsync } = usePutData()
  // const { mutateAsync } = {defaultValues.length === 0 ? usePostData():usePutData()}

  // const { mutateAsync } = usePostData()

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

  const onSubmit = async (data) => {
    // var data = new FormData()
    // data.append('achievementId', formData.achievementId)
    // data.append('title', formData.title)
    // data.append('description', formData.description)
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
      <input type="hidden" {...register('achievementId')} />
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
          Title
        </label>
        <input
          type="text"
          placeholder="Title..."
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

export default AchievementFrom

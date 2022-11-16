import React from 'react'
import { useRouter } from 'next/router'
import { useGlobalContext } from '../context/context'
import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-hot-toast'
import { usePostData } from '../hooks/DataApi'
import jwt_decode from 'jwt-decode'

const schema = yup.object({
  username: yup.string().required('Required.').max(50),
  password: yup.string().required('Required.'),
})

export default function Login() {
  const router = useRouter()
  const value = useGlobalContext()
  const { mutateAsync } = usePostData()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })
  const { username, password } = errors

  const onSubmit = async (formData) => {
    try {
      await mutateAsync({
        path: '/login',
        formData: formData,
      }).then((response) => {
        console.log(response)
        if (response) {
          const decode = jwt_decode(response.data.token)
          toast.success('Log In')
          value.setUser(decode.fullName)
          value.setToken(response.data.token)
          router.push('/dashboard')
        }
      })
    } catch (error) {
      toast.error(error)
    } finally {
      reset()
    }
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Log in
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-col">
            <Input
              name="username"
              label="User Name"
              type="text"
              register={register}
              errorMessage={username?.message}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              register={register}
              errorMessage={password?.message}
            />
          </div>
          <div className="mt-6">
            <button className="save-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

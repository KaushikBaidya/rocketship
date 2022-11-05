import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useRouter } from 'next/router'
import { useGlobalContext } from '../context/context'

export default function Login() {
  const router = useRouter()
  const value = useGlobalContext()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const signin = (e) => {
    Axios.post('/api/login', {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        value.setUser(username)
        value.setToken(response.data.token)
        router.push('/dashboard')
      } else {
        setLoginStatus(response.data[0].username)
      }
    })

    e.preventDefault()
  }

  useEffect(() => {
    if (value?.user) {
      router.push('/dashboard')
    }
  })

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Log in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Username..."
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password..."
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={signin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

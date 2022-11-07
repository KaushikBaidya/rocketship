import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useGlobalContext } from '../context/context'
import SideBar from './dashboard/SideBar'
import Header from './dashboard/Header'
import { PuffLoading } from './Loader'

const Private = ({ children }) => {
  const [loading, setLoading] = useState(true)

  const Router = useRouter()
  const value = useGlobalContext()

  useEffect(() => {
    if (!value.user) Router.push('/login')
    else {
      setLoading(false)
    }
  }, [value.user, Router])

  if (loading) return <PuffLoading />

  return (
    <>
      <div className="w-screen h-screen overflow-hidden">
        <div className="grid w-full h-screen max-w-screen-3xl mx-auto">
          <div className="hidden lg:block">
            <SideBar />
          </div>
          <div className="grid grid-rows-twoRows w-full h-screen overflow-hidden ">
            <Header />
            <div className="overflow-y-auto">
              <div className="grid grid-cols-1 lg:ml-[200px]">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Private

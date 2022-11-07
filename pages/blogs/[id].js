import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const SinglePage = () => {
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = useState()

  useEffect(() => {
    const handledata = async () => {
      const result = await fetch(`/api/blogs/${id}`)
      const data = await result.json()
      setData(data[0])
    }
    handledata()
  }, [id])
  console.log(data)

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-28 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={`https://drive.google.com/uc?export=view&id=${data?.img}`}
          width={700}
          height={300}
        />
        <div className="text-left lg:w-2/3 w-full mt-5">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {data?.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
        </div>
      </div>
    </section>
  )
}

export default SinglePage

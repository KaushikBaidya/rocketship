import React, { useState } from 'react'
import Axios from 'axios'
import TopHeader from '../../../components/dashboard/TopHeader'
import InputFile from '../../../components/layout/InputFile'
import Image from 'next/image'

const AddTestimonial = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState('')

  const handleSubmit = async () => {
    await Axios.post('/api/testimonials/createTestimonial', {
      title: title,
      description: description,
      filename: file,
    }).then((response) => {
      if (response.data.message) {
        console.log(response.data.message)
      } else {
        console.log('failed to post data')
      }
    })
  }
  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Add New testimonial Post"
        btn="Return"
        path="/dashboard/testimonials"
      />
      <div>
        <form>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Title..."
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-800"
            >
              Upload Image
            </label>
            {file.length > 0 ? (
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
              name="photo"
              label="Photo"
              accept="image/*"
              action={setFile}
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
              onChange={(e) => {
                setDescription(e.target.value)
              }}
              className="block w-full h-[300px] px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={() => handleSubmit()}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTestimonial

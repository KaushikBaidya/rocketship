import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import error from '../public/Error.gif'

const ErrorPage = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={error}
        />
        <div class="text-center lg:w-2/3 w-full">
          <div class="flex justify-center">
            <Link href="/">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <a>Go To Home </a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage

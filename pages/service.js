import React from 'react'
import Hero from '../components/service/Hero'
import Details from '../components/service/Detail'
import Steps from '../components/service/Steps'
import Success from '../components/Home/Sections/Success'
import Review from '../components/service/Review'
import Successful from '../components/service/Successful'
import Head from 'next/head'

const service = () => {
  return (
    <div>
      <Head>
        <title>Our Services</title>
      </Head>
      <Hero />
      <Details />
      <Success />
      <Steps />
      <Review />
      <Successful />
    </div>
  )
}

export default service

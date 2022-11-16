import React from 'react'
import Hero from '../components/service/Hero'
import Details from '../components/service/Detail'
import Steps from '../components/service/Steps'
import Success from '../components/Home/Sections/Success'
import Review from '../components/service/Review'
import Successful from '../components/service/Successful'

const service = () => {
  return (
    <div>
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

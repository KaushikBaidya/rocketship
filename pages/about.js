import React from 'react'
import Career from '../components/aboutUs/career'
import Hero from '../components/aboutUs/hero'
import Numbers from '../components/aboutUs/numbers'
import OurValues from '../components/aboutUs/ourValues'
import HowWeWork from '../components/aboutUs/howWorks'
import Schedule from '../components/aboutUs/schedule'
import OurTeams from '../components/aboutUs/team'

const about = () => {
  return (
    <div>
      <Hero />
      <OurValues />
      <OurTeams />
      <Schedule />
      <Numbers />
      <Career />
      <HowWeWork />
    </div>
  )
}

export default about

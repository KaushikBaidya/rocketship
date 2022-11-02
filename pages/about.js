import React from 'react'
import Career from '../components/aboutUs/career'
import Hero from '../components/aboutUs/hero'
import OurValues from '../components/aboutUs/ourValues'
import Schedules from '../components/aboutUs/scahedules'
import Schedule from '../components/aboutUs/schedule'
import OurTeams from '../components/aboutUs/team'

const about = () => {
  return (
    <div>
      <Hero />
      <OurValues />
      <OurTeams />
      <Schedule />
      <Career />
      <Schedules />
    </div>
  )
}

export default about

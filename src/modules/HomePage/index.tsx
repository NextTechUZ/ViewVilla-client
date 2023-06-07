import React from 'react'
import Showcase from '../../components/sections/Showcase'
import AboutSection from '../../components/sections/About'
import Rooms from '../../components/sections/Rooms'

function HomePage() {
  return (
    <div  >
      <Showcase/>
      <AboutSection/>
      <Rooms/>
    </div>
  )
}

export default HomePage
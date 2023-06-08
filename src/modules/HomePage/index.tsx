import React from 'react'
import Showcase from '../../components/sections/Showcase'
import AboutSection from '../../components/sections/About'
import Rooms from '../../components/sections/Rooms'
import FormSection from '../../components/sections/FormSection'

function HomePage() {
  return (
    <div  >
      <Showcase/>
      <AboutSection/>
      <Rooms/>
      <FormSection/>
    </div>
  )
}

export default HomePage
import React from 'react'
import Showcase from '../../components/sections/Showcase'
 import Rooms from '../../components/sections/Rooms'
import FormSection from '../../components/sections/FormSection'
import Statistics from '../../components/sections/Statistics'
import About from '../../components/sections/About'

function HomePage() {
  return (
    <div  >
      <Showcase/>
      <Statistics/>
      <Rooms/>
      <About/>
      <FormSection/>
    </div>
  )
}

export default HomePage
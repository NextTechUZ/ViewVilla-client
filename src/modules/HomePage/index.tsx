import React from 'react'
import Showcase from '../../components/sections/Showcase'
 import Rooms from '../../components/sections/Rooms'
import FormSection from '../../components/sections/FormSection'
import Statistics from '../../components/sections/Statistics'
import About from '../../components/sections/About'
import Gallary from '../../components/sections/Gallary'

function HomePage() {
  return (
    <div  >
      <Showcase/>
    <Statistics/>
        <Rooms/>
      <About/>
      <Gallary/>
      <FormSection/>   
    </div>
  )
}
export async function getStaticProps() {
   return {
   
  };
}

export default HomePage
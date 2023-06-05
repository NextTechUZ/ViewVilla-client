import React from 'react'
import { MainPropTypes } from '../../shared/types'
import Navbar from '../Navbar'
import Footer from '../Footer'



function AppLayout({children}:MainPropTypes ) {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
        </div>
  )
}

export default AppLayout
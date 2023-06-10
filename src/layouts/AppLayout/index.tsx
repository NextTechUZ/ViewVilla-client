import React from 'react'
import { MainPropTypes } from '../../shared/types'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { ToastContainer } from 'react-toastify'



function AppLayout({children}:MainPropTypes ) {
  return (
    <div  >
        <Navbar/>
        {children}
        <Footer/>
        <ToastContainer />

        </div>
  )
}

export default AppLayout
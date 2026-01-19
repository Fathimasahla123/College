import React from 'react'
import Header from '../components/student/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/student/Footer'

const Studentlayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header/>
         <div className='grow p-3'>
          <Outlet/>
          </div>
         <Footer/>
    </div>
  )
}

export default Studentlayout

import React from 'react'
import { Outlet } from 'react-router-dom'
// import Navbar from '../Content-items/Navbar'
import Footer from '../../Content-items/Footer'
import './Contents.css'

export const Contents = () => {
  return (
    <div className='contents'>
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </div>
  )
}
export default Contents

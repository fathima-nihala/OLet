import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Contents from '../Dashboard/Contents/Contents'
import './Main.css'
import Navbar from '../Content-items/Navbar'
// import { Outlet } from 'react-router-dom'
const Main = () => {
  return (
    <div className='main'>
      <Navbar />
      <div className='main-body'>
        <Dashboard className='main-left' />
        <Contents className='main-right' />
      </div>
    </div>
  )
}

export default Main

import React from 'react'
import UserNavbar from '../UserPages/UserNavbar'
import { Outlet } from 'react-router-dom'
import UserFooter from '../UserPages/UserFooter'

const UserMain = () => {
  return (
    <div className='usermain'>
        <UserNavbar/>
        <Outlet/>
        <UserFooter/>
    </div>
  )
}

export default UserMain
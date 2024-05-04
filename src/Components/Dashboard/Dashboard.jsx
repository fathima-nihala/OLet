import React, { useEffect, useState } from 'react'
import './Dashborad.css'
import { IoIosHome } from "react-icons/io";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { BiDollar } from "react-icons/bi";
import { Link } from 'react-router-dom'


const Dashboard = () => {
    return (
        <div className='dashboard' >
            <div className='dashboard-main'>
                <div className='dashboard-cntnts'>
                    <div className='dashboard-title'><span className='dashboard-title-one'>O</span><span className='dashboard-title-two'>Let</span></div>


                    <div className='dashboard-link'>
                        <p className='link-p'><IoIosHome />
                            <Link to='/nn' className='dash-link' >Dashboard</Link></p>
                    </div>



                    <div className='dashboard-link'>
                        <p className='link-p'><PiUsersThreeFill />
                            <Link to='/users' className='dash-link'>Users</Link></p>
                    </div>
                    <div className='dashboard-link'>
                        <p className='link-p'><FaEdit />
                            <Link to='/manage' className='dash-link' >ManageProduct</Link></p>
                    </div>
                    <div className='dashboard-link'>
                        <p className='link-p'><IoIosAddCircle />
                            <Link to='/adproduct' className='dash-link'>Addproduct</Link></p>
                    </div>
                    <div className='dashboard-link'>
                        <p className='link-p'><BiDollar />
                            <Link className='dash-link' to='/order'>Orders</Link></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard

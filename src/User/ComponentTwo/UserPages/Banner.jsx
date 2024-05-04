import React from 'react'
import banner from '../Images/banner.png'
import './banner.css'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <div className='banner'>
      <div className='ban-lft'>
        <h3 className='ban-h'>Raining Offers For Hot Summer!</h3>
        <h3 className='ban-h'>Just For <span className='ban-h-c'>You</span></h3>
        <p className='ban-p'>25% off on All Product</p>
        <button className='ban-btn'><Link to='/all' className='ban-btn-link'>Explore</Link></button>
      </div>
      <div className='ban-right'>
        <img src={banner} alt=""  />
      </div>
    </div>
  )
}

export default Banner

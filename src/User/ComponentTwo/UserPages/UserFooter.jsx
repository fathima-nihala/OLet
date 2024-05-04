import React from 'react'
import './userfooter.css'
import { IoIosArrowUp } from "react-icons/io";

const UserFooter = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <div className='footer'>
        <div className='footer-head'>
          <span className='fo-hd-1'>O</span><span className='fo-hd-2'>Let</span>
          <p>Savour the artistry <br />where Every cloth is a <br />culinary masterpiece.</p>
        </div>
        <div className='fo-main'>
          <div className='fo-cntnt'>
            <h5>About</h5>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Careers</p>
            <p>Cleartrip</p>
          </div>
          <div className='fo-cntnt'>
            <h5>Help</h5>
            <p>Payments</p>
            <p>Shipping</p>
            <p>FAQ</p>
            <p>Cancellation <br />& Returns</p>
          </div>
          <div className='fo-cntnt'>
            <h5>Consumer policy</h5>
            <p>Terms of Use</p>
            <p>Security</p>
            <p>Policy</p>
            <p>Sitemap</p>
          </div>
          <div className='top-go' onClick={scrollTop}>
            <IoIosArrowUp className='arrow-up' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserFooter
import React, { useEffect, useState } from 'react'
import './navbar.css'
import { IoSearchOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { removaData } from '../../Redux/userRedux'
import { MdOutlineLogout } from "react-icons/md";
import Profile from './Profile';

const Navbar = () => {
  //to fix nav position
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const fix = window.scrollY;
      if (fix > 0) {
        setIsSticky(true)
      }
      else {
        setIsSticky(false)
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll)
    }
  }, [])

  //for modal
  const [order, setOrder] = useState(false);
  const handleOrderItem = () => {
    setOrder(true);
  };
  const hideHandler = () => {
    setOrder(false)
  }

  //for logout
  const dispatch = useDispatch()
  function Logout() {
    dispatch(removaData())
    alert('Logout Successfully');
  }

  return (
    <div className={`navbar ${isSticky ? 'scroll' : ''}`}>
      <div className='nav-nav'>
        <div className='nav-left'>
          <IoSearchOutline style={{ marginTop: '5', marginLeft: '10' }} />
          <input type="text" placeholder='Search here..' className='nav-inp' />
        </div>
        <div className='nav-center'>
          <BsPerson className='nav-ico' onClick={handleOrderItem} />
        </div>
        <button className='nav-btn-p' onClick={Logout}><MdOutlineLogout />Logout</button>
      </div>
      {order && <Profile orderHideHandler={hideHandler} />}
    </div>
  )
}

export default Navbar
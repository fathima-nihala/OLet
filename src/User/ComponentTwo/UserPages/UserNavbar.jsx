import React, { useRef } from 'react'
import './usernav.css'
import { IoSearchOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useState } from 'react';
import { useEffect } from 'react';
import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import UserLogin from '../../../Login/UserLogin';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';
import { productView } from '../../../API/ApiCall';
import SearchResults from './SearchResults';
import LogRocket from 'logrocket';

// import CartItem from '../CartPage/CartItem';

const UserNavbar = () => {
  
  LogRocket.init('goywxo/olet');


  const itemaaa = useSelector((state) => state.userLogin.userLoginInfo[0]);

  //for scrolling & sticky navbar
  const [isStcky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    }
  }, [])

  //to add modal login button
  const [order, setOrder] = useState()
  const [proforder, setProfOrder] = useState(false);


  const ModalHandler = () => {
    setOrder(true)
  }

  const hideHandler = () => {
    setOrder(false)
    setProfOrder(false)
  }

  //for modal profile
  const ProfhandleOrderItem = () => {
    setProfOrder(true);
  };


  //search

  const [search, setSearch] = useState('')
  console.log(search);
  const [product, setProduct] = useState([])
  const navigate=useNavigate()

  useEffect(() => {
    const getproduct = async () => {
      try {
        const res = await productView();
        setProduct(res.data);
        console.log("dataaaa", res.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
    getproduct()
  }, [])


  const handleSearch = () => {
    if (search.trim() !== '') {
      const result = product.filter((item) => {
        const category = item.category.toLowerCase(); // Ensure case-insensitive comparison
        const title = item.title.toLowerCase(); // Ensure case-insensitive comparison

        return category.includes(search.toLowerCase()) || title.includes(search.toLowerCase());
      });
      // Handle filtered results, you might want to update state to display these results in the UI
      console.log('Search Results:', result);
      return navigate('/search')

    }
  };


  console.log('sdfghj', product);



  

  return (
    <div>
      <div className={`usrnavbar ${isStcky ? 'sticky' : ""}`}>
        <div className='usrnav-logo'>
          <span className='usrnav-logo-one'>O</span><span className='usrnav-logo-two'>Let</span>
        </div>

        <div className="usrnavbar-center">
          <ul className="usrmenu">
            <li><a><Link to='/' style={{ color: ' rgb(230, 8, 156)', textDecoration: 'none' }}>Home</Link></a></li>
            <li><Link to='/all' className='nav-link'>All</Link></li>
            <li><Link to='/women' className='nav-link'>Women</Link></li>
            <li><Link to='/kids' className='nav-link'>Kids</Link></li>
            <li><Link to='/men' className='nav-link'>Men</Link></li>

          </ul>
        </div>
        <div className='usrnav-search'>
          <Form>
            <div className='nav_inp'>
              <input type='text' placeholder='Search Here' value={search} onChange={(e) => setSearch(e.target.value)} onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch()
                }
              }} />
              <IoSearchOutline />

            </div>
          </Form>


          
        </div>
        <div className="usrnavbar-end">
          <div className='usrnav-end-two'><Link to='/addtocart' className='nav-addto'><LiaShoppingBagSolid className='usernav-ico' /></Link>
          </div>

          {/* {itemaaa ? <div className='usrnav-end-one'><BsPerson className='usernav-ico' onClick={ProfhandleOrderItem} /></div> : <button onClick={ModalHandler} className='usernav-btn'>login</button>} */}
          {itemaaa ? <div className='usrnav-end-one'><img src={`./Profile/${itemaaa.image}`} onClick={ProfhandleOrderItem} className='usernav-ico2' /></div> : <button onClick={ModalHandler} className='usernav-btn'>login</button>}

          {/* <button onClick={ModalHandler}>login</button> */}
          {/* value={searchQuery} onChange={handleSearch} */}
        </div>
      </div>
      {order && <UserLogin orderHideHandler={hideHandler} />}
      {proforder && <UserProfile ProforderHideHandler={hideHandler} />}
      <SearchResults handleSearchresult={handleSearch} />
    </div>
  )
}

export default UserNavbar
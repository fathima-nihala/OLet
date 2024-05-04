import React, { useEffect, useState } from 'react'
import { CartAddTo, CartGetTo, fetchProductById, postBuyOrder, productView, viewDetails } from '../../API/ApiCall'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { IoMdStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
import '../ComponentTwo/view.css'
import { useSelector } from 'react-redux';

const View = () => {
  // console.log(props, 'ertyu');
  const [data, setData] = useState([])
  const [cartState, setCartState] = useState(false)
  const values = useSelector((state) => state.userLogin.userLoginInfo[0]);
    const loginId = values._id
    console.log(loginId);

  console.log(data);
  const dataId = useParams()
  console.log("------------------", dataId);


  useEffect(() => {
    const display = async () => {
      try {
        const data = await axios.get(`http://localhost:7002/api/geItemss/${dataId.id}`)
        console.log("final data", data);
        setData(data.data)
        const res = await CartGetTo()
        console.log(res);
        const productName = res.map((li) => li.title)
        console.log(productName);
        const title = data.data.title
        console.log(title);
        const existingCartItem = productName.find((item) => item === data.data.title)
        console.log(existingCartItem);
        existingCartItem ? setCartState(true) : setCartState(false)
      } catch (err) {

      }

    }
    display()

  }, [])



  const cartHandler = async (e) => {
    e.preventDefault();
    setCartState(true)
    return await CartAddTo({ ...data, itemQuantity: 1,orderId:loginId })
  }
  console.log('lll', CartAddTo);

  //buynow post
  const postBuyHandler = async () => {
    return await postBuyOrder(data)
  }
  //cart icon div
  // const getDefaultCart = () => {
  //   let cart = {};
  //   for (let index = 0; index < data.length + 1; index++) {
  //     cart[index] = 0;
  //   }
  //   return cart;
  // };


  // const [cartItems1, setCartItems] = useState(getDefaultCart());


  // const addToCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  // };

  // const handleClick = () => {
  //   // Function 1
  //   cartHandler();
  //   // Function 2
  //   addToCart();
  // };

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={`/Images/${data.image}`} alt="" />
          <img src={`/Images/${data.image}`} alt="" />
          <img src={`/Images/${data.image}`} alt="" />
          {/* <img src={`/Images/${data.image}`} alt="" /> */}
        </div>
        <div className="productdisplay-img">
          <img src={`/Images/${data.image}`} alt="" className='productdisplay-main-img' />
        </div>
        <div className="productdisplay-right">
          <h1>{data.title}</h1>
          <div className="productdisplay-right-stars">
            <IoMdStar style={{ color: '#FFD700', width: 30, height: 30, }} />
            <IoMdStar style={{ color: '#FFD700', width: 30, height: 30, }} />
            <IoMdStar style={{ color: '#FFD700', width: 30, height: 30, }} />
            <IoStarHalf style={{ color: '#FFD700', width: 30, height: 28, }} />
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">₹{data.mrp}</div>
            <div><span className="productdisplay-right-price-new">₹</span>{data.price}</div>
          </div>
          <div className="productdisplay-right-description">{data.description}</div>
          <div className='display-right-btn'>
            {!cartState &&
              <button className='view-btn1' onClick={cartHandler}>Add To Cart</button>
            }
            {cartState &&
              <Link to={"/addtocart"}>
                <button className='view-btn1'>Go to cart</button>
              </Link>
            }
            <Link to={`/buynowhome/${data._id}`}><button className='view-btn2' onClick={postBuyHandler}>Buy Now</button></Link>
          </div>
          <p><span>Category: {data.category}</span></p>
          <p><span>Stock:</span>{data.stock}</p>
          {/* <>
            <div key={data._id}>
              <div>{data.title}</div>
            </div>
          </> */}
        </div>
      </div>
    </div>
  )
}

export default View
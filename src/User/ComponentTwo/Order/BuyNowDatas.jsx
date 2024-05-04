import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CartGetTo, getBuyOrder, getUserOrder, postOrderDatas } from '../../../API/ApiCall';
import axios from 'axios';
import ProceedResult from './ProceedResult';
import Item from '../Item/Item';

const BuyNowDatas = () => {
  const [datas, setDatas] = useState([])

  const [item, setItem] = useState([])
  const [cartItems, setCartItems] = useState([])

  const [state, setState] = useState()

  const id = useParams()
  console.log('++++', id.id);
  var PrdctId = id.id
  console.log("#@#@#@", PrdctId);

  const values = useSelector((state) => state.userLogin.userLoginInfo[0]);
  console.log('values', values);
  const loginId = values._id
  console.log('njd', loginId);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const getValue = await axios.get(`http://localhost:7002/api/geItemss/${PrdctId}`)
        setItem(getValue.data)
        console.log('valuesss**', getValue);
        getValue.data ? setState(true) : setState(false)

      } catch (error) {
        console.log(error);
      }
    }
    getOrder()
    const buyedOrderDetails = async () => {
      try {
        const getDetails = await getUserOrder(loginId)
        console.log('getDetails', getDetails);
        setDatas([getDetails.data[0]])
      } catch (error) {
        console.log(error);
      }
    };
    buyedOrderDetails()
    const getCartitems = async () => {
      const CartDatas = await CartGetTo(loginId)
      console.log("datatatata", CartDatas);
      setCartItems(CartDatas)
    }
    getCartitems()
  }, [PrdctId])
  // console.log("**********", item);






  const navigate = useNavigate()

  //modal
  const [mod, setMod] = useState('')
  const hideHandler = () => {
    setMod(false)
  }


  //to post when clicking proceed button
  const functionHandler = async () => {
    const handleOrderItem = () => {
      setMod(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    };
    handleOrderItem();
    console.log("nooooooooo",datas[0]);
    const userData= datas[0]
    console.log("userdattatat",userData);
const items = state === true ? item :cartItems
const res = await postOrderDatas({ items, orderId: loginId,userData });
console.log(res);

    // if (state) {
    //   const orderHandlerCart = async () => {
    //     try {
    //       const { cartData } = await CartGetTo({ loginId ,datas});
    //       const res = await postOrderDatas({ cartData, orderId: loginId });
    //       console.log(res);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //   orderHandlerCart();
    // } else {
    //   const orderHandlerBuy = async () => {
    //     try {
    //       const { cartData } = await axios.get(`http://localhost:7002/api/geItemss/${PrdctId}`);
    //       const res = await postOrderDatas({ cartData, orderId: loginId });
    //       console.log(res);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //   orderHandlerBuy();
    // }
  }


  return (
    <div className='buynowdats'>
      <div className='buynow-cntnr1'>
        {datas.map((li) => (
          <div className=''>
            <p className='addrs-p1'>Your Address : <span className='p-span'>{li.address},</span><span className='p-span'>{li.pincode},</span><span className='p-span'>{li.city}</span></p>
            <p className='addrs-p2'>{li.phone}<Link to='/buyupdate'><button className='change-address-btn'>change</button></Link></p>
          </div>
        ))}
      </div>
      <div className='buynow-cntnr2'>
        <div>
          {state &&

            <>
              < div className='cartmap'>
                <div>
                  <img src={`/Images/${item.image}`} alt="" className='cartmapimg' />
                </div>
                <div className='cartmap-right'>
                  <p className='cartmap-p'><span>Title:</span>{item && item.title}</p>
                  <p className='cartmap-p'><span>Price:</span>{item && item.price}</p>
                </div>
              </div>
              {/* <p className='del'>Free Delivery Available</p>
            <button className='cartmap-btn'>Proceed</button> */}
            </>
          }
        </div>
        {!state &&
          <>
            {cartItems.map((li) => (
              <>
                <div className='cartmap'>
                  <div>
                    <img src={`/Images/${li.image}`} alt="" className='cartmapimg' />
                  </div>
                  <div className='cartmap-right'>
                    <p className='cartmap-p'><span>Title:</span>{li.title}</p>
                    <p className='cartmap-p'><span>Price:</span>{li.price}</p>
                  </div>
                </div>
              </>
            ))}

          </>
        }
        <p className='del'>Free Delivery Available</p>
        <button className='cartmap-btn' onClick={functionHandler}>Proceed</button>
      </div>
      {mod && <ProceedResult orderHideHandler={hideHandler} />}
    </div>
  )
}

export default BuyNowDatas
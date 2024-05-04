import React, { useEffect, useState } from 'react'
import { DeleteUserIdData, userss } from '../../API/ApiCall'
import './users.css'
import { FaRegTrashCan } from "react-icons/fa6";

const Users = () => {

  const [data,setData]=useState([]);

  useEffect(()=>{
    const dataget=async(id)=>{
      console.log('dataget',id);
      try{
        const res = await userss((id)=>{
        })
        setData(res.data);
      }catch(err){
          console.log('err',err);
      }
    }
    dataget()
  },[])
 
  const DeleteData=async(id)=>{
    console.log('id',id);
    try {
      DeleteUserIdData(id)
    } catch (error) {
      console.log(error);
    }
    alert("Removed Successfully.");
  }

  return (
  <div>
<div className='users' >
        <h3 className='user-head'>User<span className='user-head-sub'>Details</span></h3>
          <div className='use-body-one'>
            <div className='tab-hed'>Profile</div>
          <div className='tab-hed'>UserName</div>
            <div className='tab-hed'>EmailAddress</div>
            <div className='tab-hed'>Remove</div>
          </div>
        {data.map((item) => (
          <>
      <div key={item.id} className='use-body-two'> 
      <div className='tab-body-img'> { item && <img src ={`${process.env.PUBLIC_URL}/Profile/${item.image}`} alt="fii" height={100}  width={20}  className='tab-img' />}</div>
      <div className='tab-body'>{item.firstname}</div>
         <div className='tab-body'>{item.email}</div>
         <div className='tab-body'><button className='tab-body-btn'><FaRegTrashCan  onClick={() => DeleteData(item._id)}/></button></div>
      </div>
          

      </>
 ))}  
      </div>
      </div> 
  )
}


export default Users

// {data.map((item) => (
  
  // <div key={item.id}> 
//   <div> <p>Email: {item.email}</p> </div>
//   <div>  <p>name:{item.firstname}</p></div>
//   </div>

// ))}

// 

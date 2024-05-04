import React, { useEffect, useState } from 'react'
import './wrap.css'
import { Link, useParams } from 'react-router-dom'
import { fetchProductById, productView, viewDetails } from '../../../API/ApiCall'

const Wrap = (props) => {
  console.log('props', props);

  const handleget = async(id) => {
    console.log("handeget",id);
    try {
      const handegetdata = await viewDetails(id);
      console.log('handelgetdata', handegetdata);
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className='wrap'>
    
        {props.image && (
          <img src={props.image} alt='image not found' />
        )}
      
      {/* <img src={props.image} alt="" /> */}
      <p className='wrap-h'>{props.title}</p>
      <p className='wrap-d'>{props.description}</p>
      <div className='wrap-prices'>
        <div className='new-wrap'>
          <span className='ru'>₹</span>{props.price}
        </div>
        <div className='old-wrap'>
          ₹{props.mrp}
        </div>
      </div>
    </div>
  )
}

export default Wrap
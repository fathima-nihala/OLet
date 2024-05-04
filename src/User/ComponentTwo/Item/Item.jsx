import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='item-item'>
      <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.description}</p>
        <div className="item-prices">
          <div className="item--price-new">
            <span className='dol'>₹</span>{props.price}
          </div>
          <div className="item-price-old">
            ₹{props.mrp}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Item

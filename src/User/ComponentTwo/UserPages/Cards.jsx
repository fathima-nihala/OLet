import React from 'react'
// import {Link} from 'react-router-dom'
import './card.css'
import { Link } from 'react-router-dom'

const Cards = (props) => {


  return (
    <div className='cards'>
 {props.image && (
          <img src={props.image} alt='image not found' />
        )}  
        <p>{props.title}</p>
        <div className="card-prices">
            <div className="card--price-new">
           <span className='dol'>₹</span>{props.price}
            </div>
        </div>
    </div>
  )
}

export default Cards
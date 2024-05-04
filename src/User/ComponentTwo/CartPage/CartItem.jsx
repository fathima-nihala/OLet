import React, { useEffect, useState } from 'react'
import { CartDeleteTo, CartGetTo, QuantityUpdate } from '../../../API/ApiCall';
// import { MdClose } from "react-icons/md";<MdClose />
import { Link } from 'react-router-dom';


const CartItem = (props) => {

    const [quantity, setQuantity] = useState()
    //to get quantity
    useEffect(() => {
        setQuantity(props.Quantity)
    }, [])
    console.log(quantity);

    //to delete cart items
    const deleteCartHandler = async (id) => {
        console.log('delete cart', id);
        try {
            CartDeleteTo(props.id)
        } catch (error) {
            console.log(error);
        }
        alert("item removed successfully")
    }

    //add quantity
    const addQuantityHandler = async () => {
        console.log(props.Quantity);
        const quantityState = quantity * 1 + 1
        console.log(quantityState);
        const id = props.id
        const res = await QuantityUpdate({ quantityState, id })
        console.log(res.data);
        console.log(res.data.itemQuantity);
        setQuantity(res.data.itemQuantity)
    }

    //decrease quantity
    const decreaseQuantityHandler = async () => {
        console.log(props.Quantity);
        const quantityState = quantity * 1 - 1
        console.log(quantityState);
        const id = props.id
        const res = await QuantityUpdate({ quantityState, id })
        console.log(res.data);
        setQuantity(res.data.itemQuantity)
    }

   
    return (
        <div>
            <div>
                <div className="cartitems-formate-cartitems-formate-main">
                    <img src={`/Images/${props.image}`} alt="" className="carticon-product-icon" />
                    <p>{props.title}</p>
                    <p>₹{props.price}</p>
                    <button onClick={addQuantityHandler} className='add-btn'>+</button>
                    <button className="cartitems-quantity">{quantity}</button>
                    <button onClick={decreaseQuantityHandler} className='add-btn'>-</button>
                    <p>₹{props.price * quantity}</p>
                    {/* <button className='cart-buy'><Link to={`/buynowhome/${CartGetTo._id}`} className='cart-buy-btn'>Buy Now</Link></button> */}
                    <button onClick={deleteCartHandler} className='cart-buy'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem

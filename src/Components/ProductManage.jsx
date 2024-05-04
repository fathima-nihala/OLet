import React, { useState } from 'react'
import { fetchProductById, productDelete, updateProduct } from '../API/ApiCall';
import { FaRegTrashCan } from "react-icons/fa6";
import ProductUpdate from './ProductUpdate';


const ProductManage = (props) => {

    // console.log('hiiiprops',props);

    const [order, setOrder] = useState(false)

    

    const handleProducts = (productId) => {
        console.log('idddddddddddd', productId);
        setOrder(true);

        try {
            fetchProductById(productId)
            // updateProduct(productId)
        }
        catch (err) {
            console.log(err);
        }

    };



    const hideHandler = () => {
        setOrder(false)
    }

    //to delete product
    const DeleteProduct = async (id) => {
        console.log('id is', id);
        try {
            productDelete(id)
        } catch (error) {
            console.log(error);
        }
        alert('Removed Successfully.');
    }

    return (
        <div key={props.id} className='manage-body-two'>
            <div className='tab-body-img'>{props && <img src={`${process.env.PUBLIC_URL}/Images/${props.image}`} />}</div>
            <div className='tab-body'>{props.stock}</div>
            <div className='tab-body'>{props.category}</div>
            <div className='tab-body'>{props.title}</div>
            <div className='tab-body-des'>{props.description}</div>
            <div className='tab-body'>{props.price}</div>
            <div className='tab-body'>{props.mrp}</div>
            <div className='tab-body'><button className='tab-body-update' onClick={() => handleProducts(props.id)}>Update</button></div>
            <div className='tab-body-btn'><button className='tab-body-dlt'><FaRegTrashCan onClick={() => DeleteProduct(props.id)} /></button></div>
            {order && <ProductUpdate id={props.id} title={props.title} price={props.price} description={props.description} type={props.type} mrp={props.mrp} stock={props.stock} category={props.category} image={props.image} orderHideHandler={hideHandler} />}
        </div>
    )
}

export default ProductManage
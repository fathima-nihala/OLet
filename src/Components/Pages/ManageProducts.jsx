import React, { useEffect, useState } from 'react'
import './manageproduct.css'
import { fetchProductById, productDelete, productView, updateProduct } from '../../API/ApiCall'
import { FaRegTrashCan } from "react-icons/fa6";
import ProductUpdate from '../ProductUpdate';
import ProductManage from '../ProductManage';

const ManageProducts = () => {


  //to get product
  const [product, setProduct] = useState([])

  useEffect(() => {
    const getproduct = async (id) => {
      console.log('getproduct', id);
      try {
        const res = await productView();
        setProduct(res.data);
        console.log("dataaaa", res);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
    getproduct()
  }, [])


  //for modal
  const [order, setOrder] = useState(false);



  // updateeee
  const handleProducts = async (productId) => {
    console.log('idddddddddddd', productId);
    setOrder(true);
  };

  const hideHandler = () => {
    setOrder(false)
  }

  return (
    <div >
      <div className='manage'>
        <h3 className='manage-head'>Product<span className='manage-head-sub'>Details</span></h3>
        <div className='manage-body-one'>
          <div className='tab-hed'>Image</div>
          <div className='tab-hed'>Stock</div>
          <div className='tab-hed'>Category</div>
          <div className='tab-hed'>Title</div>
          <div className='tab-hed'>Description</div>
          <div className='tab-hed-price'>Price</div>
          <div className='tab-hed'>Mrp</div>
          <div className='tab-hed'>Update</div>
          <div className='tab-hed'>Remove</div>
        </div>

        {product.map((data) => (
          <ProductManage id={data._id} image={data.image} stock={data.stock} category={data.category} title={data.title} description={data.description} price={data.price} mrp={data.mrp} />
        )).reverse()}
      </div>
      {order && <ProductUpdate orderHideHandler={hideHandler} />}
    </div>
  )
}

export default ManageProducts

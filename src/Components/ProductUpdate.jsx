import React, { useEffect, useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import Modal from './Modal/Modal'
import { fetchProductById, updateProduct } from '../API/ApiCall';
import { Link, useParams } from 'react-router-dom';
import '../../src/Components/Pages/manageproduct.css'

const ProductUpdate = (props) => {

  // var category1=

  // console.log('catejlfd',category1);

  // const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState(props.category || 'category')
  // const [type, setType] = useState('')
  const [title, setTitle] = useState(props.title, 'title')
  const [description, setDescription] = useState(props.description, 'description')
  const [mrp, setMrp] = useState(props.mrp, 'mrp')
  const [price, setPrice] = useState(props.price, 'price')
  const [stock, setStock] = useState(props.stock, 'stock')
  const [image, setImages] = useState({});
  const [id] = useState(props.id)




   
  //to update/edit product


    let formdata = new FormData();
    formdata.append('title', title);
    formdata.append('description', description);
    formdata.append('mrp', mrp);
    formdata.append('price', price);
    formdata.append('stock', stock);
    formdata.append('image', image);

    console.log('form-manage', formdata);

 


console.log();




  // to update
  const productUpdateto = async (e) => {
    e.preventDefault()
// console.log('before API call', id, category, title, description, price, image, stock, mrp );
    const updatevalue = await updateProduct({formdata,id});
    console.log('updatevalue', updatevalue);

  }



  return (
    <div>
      <Modal hideHandler={props.orderHideHandler}>
        {/* <Link to='/manage' className='previous'><CiCircleRemove className='prev-icon' /></Link> */}
        <div className='mod-up'>
        <h2 className='update-hd'>Update</h2>
        <form encType='multipart/form-data' onSubmit={productUpdateto}>
          <div className="form-group">
            <label className='up-label'>Catagory:</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className="form-group">
            <label className='up-label'>Title:</label>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="form-group">
            <label className='up-label'>Description:</label>
            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
       
          <div className="form-group">
            <label className='up-label'>Price:</label>
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="form-group">
            <label className='up-label'>MRP:</label>
            <input type="number" name="mrp" value={mrp} onChange={(e) => setMrp(e.target.value)} className='up-inp' />
          </div>
          <div className="form-group">
            <label className='up-label'>Stock:</label>
            <input type="number" name="stock" value={stock} onChange={(e) => setStock(e.target.value)} className='up-inp' />
          </div>
          <div className="form-group">
            <input type="file" filename='image' onChange={(e) => setImages(e.target.files[0])} />
          </div>
          <button type="submit" className='up-btn'>Update</button>
        </form>

        </div>


      </Modal>
    </div>
  )
}

export default ProductUpdate

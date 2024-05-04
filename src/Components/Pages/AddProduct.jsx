import React, { useState } from 'react'
import { products } from '../../API/ApiCall'
import './addproject.css'

const AddProduct = () => {
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [mrp, setMrp] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState({})
    const[stock,setStock] = useState('')

    let formdata = new FormData()
    formdata.append('image', image)
    formdata.append('category', category)
    formdata.append('title',title)
    formdata.append('type', type)
    formdata.append('description', description)
    formdata.append('mrp', mrp)
    formdata.append('price', price)
    formdata.append('stock',stock)

    const display = (e) => {
        e.preventDefault();
        // products({category,type,title,description,mrp,price})
        console.log('***', formdata);
        products(formdata)
    }

    return (
        <div className='addproduct'>
            <form onSubmit={display} encType='multipart/form-data'>
                <h3 className='addproduct-head'>Upload A New <span className='addproduct-head-1'>Product</span></h3>
                <div className='addproduct-cntnt'>
                    <input type="text" name="" value={category} id="" placeholder='Category' onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div className='addproduct-cntnt'>
                    <input type="text" placeholder='type' value={type} onChange={(e) => setType(e.target.value)} />
                </div>
                <div className='addproduct-cntnt'>
                    <input type="text" placeholder='stock' value={stock} onChange={(e) => setStock(e.target.value)} />
                </div>
                <div className='addproduct-cntnt'>
                    <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='addproduct-cntnt'>
                    <input type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className='addproduct-cntnt'>
                    <input type="text" placeholder='mrp' value={mrp} onChange={(e) => setMrp(e.target.value)} />
                </div>
                <div className='addproduct-cntnt'>
                    <input type="text" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className='addproduct-image'>
                    <input type="file" filename='image' onChange={(e) => setImage(e.target.files[0])} className='adprod-img' />
                </div>
                <button type='submit' className='adprod-btn'>Add Item</button>
            </form>
        </div>
    )
}

export default AddProduct
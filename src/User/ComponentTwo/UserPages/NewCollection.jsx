import React, { useEffect, useState } from 'react'
import './newcollection.css'
import new_collections from '../API/apinew'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { productView } from '../../../API/ApiCall'

const NewCollection = () => {

  const [product, setProduct] = useState([])
  const NewCollecton = product.filter(product => product.item === 'newcollection');

  useEffect(() => {
    const getproduct = async (id) => {
      console.log('getproduct', id);
      try {
        const res = await productView(id);
        setProduct(res.data);
        console.log("kids", res.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
    getproduct()
  }, [])

  return (
    <div>
      <div className='new-cln'>
        <h3>New arrivals</h3>
        <button className='new-btn'><Link to='/cmore' className='new-link' >see more</Link></button>
      </div>
      <div className='new-cntnt'>
        {NewCollecton.map((data) => (
          <Link to={`/view/${data._id}`} className='ki-link'><div>
            <Cards 
                 key={data._id}
                 image={`${process.env.PUBLIC_URL}/Images/${data.image}`}
                 title={data.title}
                 description={data.description}
                 mrp={data.mrp}
                 price={data.price}
            />
          </div></Link>
        ))}
      </div>
    </div>
  )
}

export default NewCollection
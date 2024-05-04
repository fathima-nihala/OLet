import React, { useEffect, useState } from 'react'
import './men.css'
import { productView } from '../../../API/ApiCall';
import Wrap from '../All Wrap/Wrap';
import { Link } from 'react-router-dom';

const Men = () => {

    const [product, setProduct] = useState([])
    const mensDresses = product.filter(product => product.category === 'men');



    useEffect(() => {
        const getproduct = async (id) => {
            console.log('getproduct', id);
            try {
                const res = await productView();
                setProduct(res.data);
                console.log("dataaaa", res.data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        }
        getproduct()
    }, [])

  return (
    <div className='men'>
      <div className='men-cntnt'>
        {mensDresses.map((data)=>(
          <Link to={`/view/${data._id}`} className='me-link'><div>
            <Wrap
            key={data.id}
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

export default Men

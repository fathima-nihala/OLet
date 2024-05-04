import React, { useEffect, useState } from 'react'
import './kids.css'
import { productView, viewDetails } from '../../../API/ApiCall';
import Wrap from '../All Wrap/Wrap';
import { Link } from 'react-router-dom';

const Kids = () => {

    // const { id } = useParams()

    const [product, setProduct] = useState([])
    const kidsDresses = product.filter(product => product.category === 'kids');


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
        <div className='kids'>
            <div className='kids-cntnt'>
                {kidsDresses.map((data) => (
                  <Link to={`/view/${data._id}`} className='ki-link'><div>
                    <Wrap
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

export default Kids
import React, { useEffect, useState } from 'react'
import all_product from '../API/apiAll'
import Item from '../Item/Item'
import './seemore.css'
import { productView } from '../../../API/ApiCall'
import { Link } from 'react-router-dom'
const SeeMore = () => {

  const [product, setProduct] = useState([])
  const NewArrival = product.filter(product => product.item === 'newarrival');

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
    <div className='see-more'>

      <div className='c-more'>
        {NewArrival.map((data) => (
          <Link  to={`/view/${data._id}`} className='seemore-link'>
            <div>
              <Item
               key={data._id}
               image={`${process.env.PUBLIC_URL}/Images/${data.image}`}
               title={data.title}
               description={data.description}
               mrp={data.mrp}
               price={data.price}
              />
            </div>
          </Link>
        ))}
        {/* { all_product.map((item,i)=>{
           return <Item key={i} id={item.id} name={item.name} image={item.Image} new_price={item.new_price} old_price={item.old_price} />
        })} */}
      </div>
    </div>
  )
}

export default SeeMore

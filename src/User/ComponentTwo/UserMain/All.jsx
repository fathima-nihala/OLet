import React, { useEffect, useState } from 'react'
import { fetchProductById, productView, viewDetails } from '../../../API/ApiCall'
// import Wrap from '../All Wrap/Wrap'
import './all.css'
import Wrap from '../All Wrap/Wrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Item from '../Item/Item'


const All = () => {

  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [viewState, setViewState] = useState(false)

  useEffect(() => {
    const getproduct = async (id) => {
      console.log('getproductsss', id);
      try {
        const res = await productView();
        setProduct(res.data);
        console.log("dataaaa", res.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
    getproduct()
  }, [id])

  const showModelhandle = () => {
    setViewState(true)
  }
  const hideModelHandle = () => {
    console.log("aaaaaaaaaaaa");
    setViewState(false)
  }

  //filter dataas
  const [filterItems, setFilterItems] = useState([])
  const [pricerange, setPricerange] = useState('')

  const filteredItemsByPrice = (minPrice, maxPrice) => {
    const filtered = product.filter(product => product.price >= minPrice && product.price < maxPrice)
    setFilterItems(filtered);
    // setPricerange(`₹${minPrice} - ₹${maxPrice - 1}`);
  }

  const resetFilter = () => {
    setFilterItems([]);
    setPricerange('');
  }

  return (
    <div className='all'>
      <h2> Explore Our Stunning Dress Collection!</h2>
      <div className='filter-buttons'>
        <button onClick={() => filteredItemsByPrice(0, 500)} className='fil_btn1'>500 below</button>
        <button onClick={() => filteredItemsByPrice(500, 800)} className='fil_btn2'>500 to 800</button>
        <button onClick={() => filteredItemsByPrice(800, 1000)} className='fil_btn3'>800 to 1000</button>
        <button onClick={() => filteredItemsByPrice(1000, Infinity)} className='fil_btn4'>1000 or More</button>
        <button onClick={resetFilter} className='fil_btn5'>All Items</button>
        {pricerange && <p className='percent'>Price Range: {pricerange}</p>}
      </div>
      <div className='all-cntnt'>

        {filterItems.length > 0 ? (
          filterItems.map(data => (
            <Link to={`/view/${data._id}`} className='me-link'><div>
              <Wrap key={data._id} image={`${process.env.PUBLIC_URL}/Images/${data.image}`} title={data.title} description={data.description} mrp={data.mrp} price={data.price} />
            </div></Link>
          ))
        ) : (
          product.map((data) => (
            <Link to={`/view/${data._id}`} className='me-link'><div>
              <Wrap key={data._id} image={`${process.env.PUBLIC_URL}/Images/${data.image}`} title={data.title} description={data.description} mrp={data.mrp} price={data.price} />
            </div></Link>
          ))
        )}
      </div>
{/* 
  {product.filter((item) => {

  return search.trim() === '' || (item.catagory && item.catagory.toLocaleUpperCase().includes(search.trim().toLocaleUpperCase()));

                })
                    .map((item) => (
                        <div>
                            <tr key={item.id}>
                                <th>{item.name}</th>
                                <th>{item.catagory}</th>
                                <th>{item.profile}</th>
                                <th>{item.new_price}</th>
                            </tr>

                        </div>

                    ))} */}

      {/* </div> */}
    </div>
  )
}

export default All

import React, { useEffect, useState } from 'react'
import { productView } from '../../../API/ApiCall'
import './popular.css'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'

const Exclusive = () => {

    const [product, setProduct] = useState([])
    const exclusive = product.filter(product => product.item === 'exclusive')

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
        <div className='exclusive'> 
            <div className='popular'>
                <h2 className='pop-h'>EXCLUSIVE FOR MEN</h2>
                <div className='kids-cntnt'>
                    {exclusive.map((data) => (
                        <Link to={`/view/${data._id}`} className='proflink'><div>
                            <Item
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
        </div>
    )
}

export default Exclusive

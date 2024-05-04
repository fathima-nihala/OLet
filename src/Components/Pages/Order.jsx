import React, { useEffect, useState } from 'react'
import { getOrderDatas } from '../../API/ApiCall'
import './orderadmin.css'

const OrderList = (props) => {
  const products = [props.products]
  console.log(products);
  const item = products.map((li) => li.item)
  console.log("haiiiiii", item);
  const findArray = (arr) => {
    let newElemnet
    arr.forEach(element => {
      if (Array.isArray(element)) {
        newElemnet = element
      }
    })
    return newElemnet
  }
  const arrayItem = findArray(item)
  // console.log(item.length>1);
  console.log("arayyyyyyy", arrayItem);
  const user = products.map((li) => li.userData)
  return (
    <div className='order-main'>
      {item.map((li) => (
        <div className=''>
          <div>
            {item[0] && item[0].length > 0 && arrayItem.map((li) => (
              <>
                <div className='order-admin'>
                  <div className='order-admin-left'>
                    <img src={`/Images/${li.image}`} alt="" className='cartmapimg' />
                  </div>

                  <div className='order-admin-right'>
                    <div className='order-admin-right-block'>
                      <p><span className='order-span'>TiTle:</span>{li.title}</p>
                      <p><span className='order-span'>Price:</span>{li.price * li.itemQuantity}</p>
                    </div>
                  <div>
                    {user.map((li) => (
                      <div className='order-admin-right-block'>
                        <p><span className='order-span'>Address:</span>{li.address}</p>
                        <p><span className='order-span'>Pincode:</span>{li.pincode}</p>
                        <p><span className='order-span'>City:</span>{li.city}</p>
                        <p><span className='order-span'>Phone:</span>{li.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>
                </div>

              </>
            ))}
          </div>
          {/* view image */}
          {item[0] && !item[0].length > 0 &&
            <div className='order-admin'>

              <div className='order-admin-left'>
                <img src={`/Images/${li.image}`} alt="" className='cartmapimg' />
              </div>
              <div className='order-admin-right'>
                <div className='order-admin-right-block'>
                  <p><span className='order-span'>TiTle:</span>{li.title}</p>
                  <p><span className='order-span'>Description:</span>{li.description}</p>
                  <p><span className='order-span'>Price:</span>{li.price}</p>
                </div>
                <div>
                  {user.map((li) => (
                    <div className='order-admin-right-block'>
                      <p><span className='order-span'>Address:</span>{li.address}</p>
                      <p><span className='order-span'>Pincode:</span>{li.pincode}</p>
                      <p><span className='order-span'>City:</span>{li.city}</p>
                      <p><span className='order-span'>Phone:</span>{li.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        </div>
      ))}
    </div>
  )
}

const Order = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
    const getDatasHandle = async () => {
      const res = await getOrderDatas()
      console.log(res);
      setItem(res)
      const products = res.map((li) => li.products)
      const items = products.map((li) => li.item);
      console.log(items.map((li) => li.length > 0));
    }
    getDatasHandle()
  }, [])
  return (
    <div>
      {item.map((li) => (
        <OrderList products={li.products} />
      ))}
    </div>
  )
}

export default Order
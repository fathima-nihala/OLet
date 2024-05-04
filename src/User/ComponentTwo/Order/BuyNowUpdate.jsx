import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getUserOrder, updateUserOrder } from '../../../API/ApiCall';
import { Link, useNavigate } from 'react-router-dom';
import './order.css'
const BuyNowUpdate = () => {

    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [productId, setProductId] = useState('')

    const values = useSelector((state) => state.userLogin.userLoginInfo[0]);
    console.log('values', values);
    const loginId = values._id
    console.log(loginId);

    // const [data, setData] = useState('')

    useEffect(() => {
        const displayDetails = async () => {
            try {
                const res = await getUserOrder(loginId);
                console.log("***", res);
                if (res) {
                    setAddress(res.data[0].address);
                    setPincode(res.data[0].pincode);
                    setCity(res.data[0].city);
                    setPhone(res.data[0].phone);
                    setProductId(res.data[0]._id)
                }
            } catch (error) {
                console.error("Error fetching user order:", error);
            }
        }
        displayDetails()
    }, [loginId])

    // const navigate = useNavigate()

    

    const updateUserHandle = async () => {
        try {
            const dataas = await updateUserOrder({ _id: productId, address, pincode, city, phone, loginId })
            console.log('..-..', dataas);
            console.log('pincode', pincode);
            alert('Successfully Updated!')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='buynowupdate-container'>

            <div className='buynowupdate-container-sub'>
                <h2 className='change-dtls'>Change Details</h2>
                <div className='change-dtls-cntnr'>
                    <div>
                        <div className='change-inp'>
                            <input type="text" value={address} placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className='change-inp'>
                            <input type="text" value={pincode} placeholder='Pincode' onChange={(e) => setPincode(e.target.value)} />
                        </div>
                        <div className='change-inp'>
                            <input type="text" value={city} placeholder='City' onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className='change-inp'>
                            <input type="text" value={phone} placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <button className='change-btn-change' onClick={updateUserHandle}><Link to='' className='change-btn-change-link'>Update</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyNowUpdate
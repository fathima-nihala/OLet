import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getUserOrder, postUserOrder } from '../../../API/ApiCall';
import { Link, useParams } from 'react-router-dom';

const BuyNowHome = () => {

    const value = useParams()
    const id = useParams()
    var Ids = value.id

    console.log('!@#$', Ids);

    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [continueState, setContinueState] = useState(false)
    const [datas, setDatas] = useState([])


    const values = useSelector((state) => state.userLogin.userLoginInfo[0]);
    console.log('values', values);
    const loginId = values._id
    console.log(loginId);

    useEffect(() => {
        const showHandler = async () => {
            try {
                const res = await getUserOrder(loginId);
                console.log("***", res);
                if (res && res.data && res.data.length > 0) {
                    setContinueState(false);
                    setDatas([res.data[0]]);
                } else {
                    setContinueState(true);
                }
            } catch (error) {
                console.error("Error fetching user order:", error);
                // Handle the error here, e.g., set an error state
            }
        };
        showHandler();
    }, []);


    const handleGet = async () => {
        try {
            const dataget = await getUserOrder(loginId)
            console.log('dsdsds', dataget);
        } catch (error) {
            console.log(error);
        }
    }

    const display = async () => {
        // e.preventDefault()
        try {
            const dataPost = await postUserOrder({ address, pincode, city, phone, loginId })
            console.log('dataPost', dataPost);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='buynowhome'>
            <div className='buynowupdate-container-sub'>
                <h3 className='change-dtls'>Your Address</h3>
                <div className='change-dtls-cntnr'>
                    {continueState &&
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
                        </div>
                    }
                    <div>
                        {!continueState && datas.map((va) => (
                            <>
                                <div>
                                    <p className='buynow-p'>{va.address}</p>
                                    <p className='buynow-p'>{va.pincode}</p>
                                    <p className='buynow-p'>{va.city}</p>
                                    <p className='buynow-p'>{va.phone}</p>

                                </div>
                            </>
                        ))}
                    </div>
                </div>
                {continueState &&

                    <Link to={`/buynowdata/${Ids}`}><button onClick={() => display(id)} className='change-continue'>continue</button></Link>
                }
                <div className='uynowhome-btns'>
                    <Link to='/buyupdate'><button onClick={() => handleGet(id)} className='buynowhome-btn2'>change</button></Link>
                    {!continueState &&
                        <div>
                            <Link to={`/buynowdata/${Ids}`} ><button className='buynowhome-btn'>continue</button></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default BuyNowHome

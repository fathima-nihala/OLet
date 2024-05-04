import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../API/ApiCall';
import { HiOutlineMail } from "react-icons/hi";
import '../../../Login/signup.css'


const ForgetPassword = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    // const[oTp,setOtp]=useState('')

    const sendMail = async () => {
        try {
            const data = await forgetPassword({ email });
            const otp = data
            console.log('otp', otp);
            setTimeout(() => {
                navigate('/verify', { state: { otp } });
            }, 1000); // Delay in milliseconds (1000 milliseconds = 1 second)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='register'>
            <div className='reg-main'>
                <div className='reg-main-one'>
                    <div className='reg-body'>
                        <div className='reg-body-one'>
                            <div className='reg-head'>
                                <h4>Forget Pass?</h4>
                            </div>
                            <div className='reg-body-cntnt-forg'>
                                <HiOutlineMail className='reg-icon' />
                                <input type="email" placeholder="Type Your Email here" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='submit-forgt'>
                                <button onClick={sendMail} >Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ForgetPassword

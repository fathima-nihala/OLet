import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../../Login/signup.css'
import { HiOutlineMail } from 'react-icons/hi';


const OtpVerification = () => {
    const location = useLocation();
    const otpFromForget = location.state?.otp || '';
    console.log('ottttp', otpFromForget);

    const Id = otpFromForget.UserId
    console.log('asdfghidddddd',Id);
    const otpFromForgot12 = otpFromForget.otp
    console.log('oUIDFHhs', otpFromForgot12);

    const [otp, setOtp] = useState('')
    console.log('otp', otp);
    const navigate = useNavigate()

    const verify = async () => {
        if (otpFromForgot12 === otp) {
            navigate('/changepass',{state: { Id } });
        } else {
            alert('invalid otp')
        }
    }
    return (
        <div>
            <div className='register'>
                <div className='reg-main'>
                    <div className='reg-main-one'>
                        <div className='reg-body'>
                            <div className='reg-body-one'>
                                <div className='reg-head'>
                                    <h4>verify otp</h4>
                                </div>
                                <div className='reg-body-cntnt-forg'>
                                    <HiOutlineMail className='reg-icon' />
                                    <input type="text" placeholder="Type Your OTP here" value={otp} onChange={(e) => setOtp(e.target.value)} />
                                </div>
                                <div className='submit-forgt'>
                                    <button onClick={verify}>Verify</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtpVerification

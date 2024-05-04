import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { changePass } from '../API/ApiCall';
import '../../../Login/signup.css'


const ChangePassword = () => {
    const location = useLocation();
    const userId = location.state?.Id  || '';
    console.log('useriidddddd',userId);
    
    const[password,setPassword]=useState('');
    const[confirm,setConfirm]=useState('')
    const[error,setError]=useState(null);

    const submit=async()=>{
        if(password !== confirm){
            setError('password does not match' );
            return;
        }
        try {
            const data = await changePass({userId,password})
            console.log('dataaaaaa',data);
        } catch (error) {
            console.log(error);
            setError(error.response.data.error || 'An error occured')
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
                                {/* <HiOutlineMail className='reg-icon' /> */}
                                <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='reg-body-cntnt-forg'>
                                {/* <HiOutlineMail className='reg-icon' /> */}
                                <input type="text" placeholder="confirm password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                            </div>
                            <div className='submit-forgt'>
                                <button onClick={submit} >Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default ChangePassword

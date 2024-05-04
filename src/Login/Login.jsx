import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LoginDatass } from '../API/ApiCall'
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLockOpen } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";


// import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')

    //
    // const history = useNavigate();


    const dispatch = useDispatch()

    const displayone = () => {
        console.log({ email, password });
        try {
            LoginDatass({ email, password }, dispatch)
        } catch (error) {
            console.log("error in pass", error);
        }
    }

    // const handleLogin = () => {
    //     // Perform authentication logic here and determine the user role
    //     const userRole = 'user'; // Replace with actual authentication logic
    //        if (userRole === 'user') {
    //       history.push('/');
    //     } else if (userRole === 'admin') {
    //       history.push('/');
    //     } else {
    //         history.push('/user');
    //     }
    //   };


    // const handleButtonClick=()=>{
    //     handleLogin();
    //     displayone();
    // }
    return (
        <div className='login'>
            <Link to='/'><CiCircleRemove className='goback' /></Link>
            <div className='log-main' onclick="onclick">
                <div className="log-main-one">
                    <div className='log-head'>
                        <h4>Sign In</h4>
                    </div>
                    <div className="log-body">
                        <div className="log-body-one">
                            <div className='log-body-cntnt'>
                                <HiOutlineMail className='log-icon' />
                                <input type="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
                            </div>
                            <div className='log-body-cntnt'>
                                <MdOutlineLockOpen className='log-icon' />
                                <input type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                            </div>
                            <div className='log-frgt'>
                                <p>Forget Password?</p>
                            </div>

                            <div className='log-btn'>
                                <button className='end' onClick={displayone}>Sign In</button>
                            </div>
                            <div className='log-para'>
                                <p className='end-para'>don't have an account?<Link to='/signup' className='end-link'>Signup Now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

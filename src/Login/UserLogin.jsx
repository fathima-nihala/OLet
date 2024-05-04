import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { LoginDatass } from '../API/ApiCall'
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLockOpen } from "react-icons/md";
import { EcomLogin } from '../User/ComponentTwo/API/ApiCall'
import Modal from '../Components/Modal/Modal'

const UserLogin = (props) => {
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')

    const dispatch = useDispatch()

    const displayone = () => {
        console.log({ email, password });
        try {
            EcomLogin({ email, password }, dispatch)
        } catch (error) {
            console.log("error in pass", error);
        }
        alert("Login Successfull");

    }


    return (
        <div >
            <Modal hideHandler={props.orderHideHandler}>
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
                            <Link className='frgt' to='/forget'>Forget Password?</Link>
                        </div>

                        <div className='log-btn'>
                            <button className='end' onClick={displayone}>Sign In</button>
                        </div>
                        <div className='log-para'>
                            <p className='end-para'>don't have an account?<Link to='/usereg' className='frgt'>Signup Now</Link></p>
                        </div>
                        <p className='end-para'>Are you a admin? <Link to='/login' className='frgt'>Login Now</Link></p>

                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default UserLogin

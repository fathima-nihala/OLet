import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignupData } from '../API/ApiCall';
import { CgGirl } from "react-icons/cg";
import { MdOutlineLockOpen } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { CiCircleRemove } from "react-icons/ci";
import './signup.css'


const SignUp = () => {
  const [firstname, setfirstname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [image, setImage] = useState(null);

  const displayone = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('image', image);
    // formData.append('type','user')

    console.log('@@@-data', formData);
    await SignupData(formData);
  };

  return (
    <div className='register'>
      <Link to='/'><CiCircleRemove className='goback' /></Link>
      <div className='reg-main'>
        <div className='reg-main-one'>
          <div className='reg-head'>
            <h4>SignUp</h4>
          </div>
          <form onSubmit={displayone} encType='multipart/form-data'>
            <div className='reg-body'>
              <div className='reg-body-one'>
                <div className='reg-body-cntnt'>
                  <CgGirl className='reg-icon' />
                  <input type="text" placeholder='Name' value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                </div>
                <div className='reg-body-cntnt'>
                  <HiOutlineMail className='reg-icon' />
                  <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <div className='reg-body-cntnt'>
                  <MdOutlineLockOpen className='reg-icon' />
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                </div>
                <div className='reg-body-img'>
                  <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className='reg-btn'>
                  <button>Create Account</button>
                </div>
                <div className='reg-para'>
                  <p className='end-para'>already have an account?<Link to='/login' className='end-link'>Signin Now</Link></p>
                  {/* &nbsp; */}</div>
                {/* <button className='end' type="submit">Sign Up</button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
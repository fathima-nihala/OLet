import React, { useEffect, useState } from 'react'
import Modal from '../../../Components/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { removaData } from '../../../Redux/userRedux';
// import { useNavigate } from 'react-router-dom';
import './userprofile.css'
import { EcomGetLogin, updateUserDatas } from '../API/ApiCall';
import { removeUserData } from '../../../Redux/UseModRedux';

const UserProfile = (props) => {

    const itemuser = useSelector((state) => state.userLogin.userLoginInfo[0]);
    console.log(itemuser && itemuser._id);

    const [firstname, setfirstname] = useState('');
    const [email, setemail] = useState('');
    const [image, setImage] = useState({})

    useEffect(() => {
        const DataHandler = async () => {
            try {
                const res = await EcomGetLogin(itemuser._id);
                console.log('eeeee', res);
                setfirstname(res.firstname);
                setemail(res.email);
                setImage(res.image);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        DataHandler();
    }, []);

    //for logout
    const dispatch = useDispatch();
    function Logout() {
        dispatch(removeUserData())
        alert('Logout Successfully');
    }


    const handleSubmitData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('firstname', firstname);
        formData.append('email', email);
        formData.append('image', image);
        console.log('uuuu', formData);

        try {
            const datas = { firstname, email, image };
            const id = itemuser._id;
            const userUpdatooi = await updateUserDatas(formData, id); // firstname, email, 
            console.log('user update', userUpdatooi);
            console.log("********", datas);
            alert('Successfully Updated')
        } catch (error) {
            console.error("Error updating user data:", error.message);
        }


    }


    const [isEditing, setIsEditing] = useState(false);

    const handleUpdate = () => {
        setIsEditing(true);
    };


    return (
        <div>
            <Modal hideHandler={props.ProforderHideHandler}>
                <div className='us-im'>
                    {isEditing ? (
                        <>
                            <div>
                                <form encType='multipart/form-data' onSubmit={handleSubmitData}>
                                    <h3 className='prof-updt-p'> Update Profile</h3>
                                    <div className='prof-inp-user'>
                                        <input type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                                    </div>
                                    <div className='prof-inp-user'>
                                        <input type="email" value={email} placeholder='email' onChange={(e) => setemail(e.target.value)} />
                                    </div>
                                    <div className='prof-img'>
                                        <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
                                    </div>
                                    <div>
                                        <button className='prof-btn'>Update</button>
                                    </div>
                                </form>
                            </div>
                        </>
                    ) : (
                        <div className='user-prof-data'>
                            <img src={`./Profile/${image}`} alt="Profileuser" className='Profileuser' />
                            <h3 className='prouser-name'>{firstname}</h3>
                            <h5 className='prouser-mail'>{email}</h5>
                            <button onClick={Logout} className='profuser-outbtn'>Logout</button>
                        </div>
                    )}
                    {!isEditing && (
                        <button className='prof-btn-uu' onClick={handleUpdate}>update</button>
                    )}
                </div>
            </Modal>

        </div>
    )
}

export default UserProfile

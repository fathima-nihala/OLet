import React from 'react'
import Modal from '../../../Components/Modal/Modal'
import tik from '../Images/success-removebg-preview.png'
const ProceedResult = (props) => {
    
    return (
        <div>
            <Modal hideHandler={props.orderHideHandler}>
                <div className='pro-result'>
                    <img src={tik} alt=""  className='pro-result-img'/>
                    <p className='pro-result-p'>Order Successfull</p>
                </div>
            </Modal>
        </div>
    )
}

export default ProceedResult
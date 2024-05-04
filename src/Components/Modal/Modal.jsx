import React from 'react'
import ReactDOM from 'react-dom'
import './model.css'

const Backdrop=(props)=>{

    return(
        <div  onClick={props.hideHandler} className='backdrop'/>
    )
}

const ModelOverlays=(props)=>{
    return(
        <div className='modal'>{props.children}</div>
    )
}

const portalElements = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <div>
        {ReactDOM.createPortal(<Backdrop hideHandler={props.hideHandler}/>,portalElements)}
        {ReactDOM.createPortal(<ModelOverlays>{props.children}</ModelOverlays>,portalElements)}
    </div>
  )
}

export default Modal
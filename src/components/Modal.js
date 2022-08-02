import React from 'react'
import Backdrop from './Backdrop'
import '../css/components/modal.css'

function Modal(props) {
    return (
        <>
            <Backdrop show={props.show} closeModal={props.closeModal} />
            {props.show
                ? <div className='modal'>{props.children}</div>
                : null}
        </>
    )
}

export default Modal
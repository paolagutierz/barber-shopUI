import React from 'react'
import "../css/components/backdrop.css"

function Backdrop(props) {
    return (
        props.show ? <div className="backdrop" onClick={props.closeModal}></div> : null
    )
}

export default Backdrop
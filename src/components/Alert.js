import React, { useEffect } from 'react'
import "../css/components/alert.css"

function Alert({ removeAlert, alert }) {

    useEffect(() => {
        setTimeout(() => {
            removeAlert()
        }, 3000)
    }, [])

    return (
        <div className='alert' style={{ background: alert.type }}>{alert.text}</div>
    )
}

export default Alert
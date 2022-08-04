import React, { useEffect } from 'react'
import "../css/components/alert.css"

export const TYPES = {
    SUCCESS: "rgba(69, 203, 69, 0.955)",
    ERROR: "rgba(247, 21, 21, 0.944)",
    WARNING: "orange"
}

export const DEFAULT_MESSAGES = {
    SERVER_ERROR: "Disculpenos tenemos inconvenientes en este momento. Agradecemos su paciencia"
}

// alert = {text: "", type : COLOURS.GREEN}
function Alert({ removeAlert, alert, timeout = 3000 }) {

    useEffect(() => {
        setTimeout(() => {
            removeAlert()
        }, timeout)
    }, [])

    return (
        <div className='alert' style={{ background: alert.type }}>{alert.text}</div>
    )
}

export default Alert
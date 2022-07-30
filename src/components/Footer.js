import React from 'react'
import logoNew from '../images/Logonew.jpg'
import '../css/components/footer.css'

function Footer() {
    return (
        <footer>
            <img src={logoNew} alt="Logo de la Barber-Shop" className="logo-footer" />
            <p className="copyright">{"&copy Copyright Barber-Shop - 2022"}</p>
        </footer>
    )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'
import logoNew from '../images/Logonew.jpg'
import '../css/components/header.css'

function Header() {
    const handleLoginClick = (event) => {
        event.preventDefault();
        console.log("click login")
    }

    return (
        <header className="header-principal">
            <div className="caja">
                <h1 className="logo-pagina"><img src={logoNew} alt="Logo de la Barbería Alura" className="logo" /></h1>
                <nav className="headerPrincipal-nav">
                    <ul className="nav-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Productos</Link></li>
                        <li><Link to="/orders">Mis pedidos</Link></li>
                        <li><Link to="/reservation">Reservas</Link></li>
                        <li><button className="boton-login"><a onClick={(event) => handleLoginClick(event)}>Login</a></button></li>
                        <li> <Link to="cart.html">&#128722;</Link></li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
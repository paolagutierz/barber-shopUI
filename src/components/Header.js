import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import logoNew from '../images/Logonew.jpg'
import '../css/components/header.css'
import LoginModal from '../components/LoginModal'
import RegisterModal from './RegisterModal'
import { CartContext } from '../providers/cart'

function Header() {
    const [isOpenLogin, setIsOpenLogin] = useState(false)
    const [isOpenRegister, setIsOpenRegister] = useState(false)

    const { productsCantity } = useContext(CartContext)

    const handleLoginClick = (event) => {
        event.preventDefault();
        setIsOpenLogin(true)
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
                        <li>
                            <Link to="/cart">&#128722;</Link>
                            {productsCantity > 0 && <div className='cart-number'>{productsCantity}</div>}
                        </li>

                    </ul>
                </nav>
            </div>
            <LoginModal show={isOpenLogin} closeModal={() => setIsOpenLogin(false)} openRegister={() => setIsOpenRegister(true)}></LoginModal>
            <RegisterModal show={isOpenRegister} closeModal={() => setIsOpenRegister(false)}></RegisterModal>
        </header>
    )
}

export default Header
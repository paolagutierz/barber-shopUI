import React, { useState } from 'react'
import Modal from './Modal'
import '../css/components/loginModal.css'

function LoginModal(props) {

    const handleRegister = () => {
        props.closeModal();
        props.openRegister();
    }

    return (
        <Modal show={props.show} closeModal={props.closeModal}>
            <div id="dialog_login">
                <form action="">
                    <h1>Sign In</h1>
                    <p className="texto-inicial">Ingresa tu usuario y contraseña</p>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button className="botones">Sign in</button>
                    <p className="parrafo-registro">¿Aún no tienes una cuenta?</p>
                    <a href=""><button className="botones" onClick={() => handleRegister()}>Registro</button></a>
                </form>
            </div>
        </Modal>
    )
}

export default LoginModal
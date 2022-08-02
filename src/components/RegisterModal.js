import React from 'react'
import Modal from './Modal'
import '../css/components/registerModal.css'

function RegisterModal(props) {
    return (
        <Modal show={props.show} closeModal={props.closeModal}>
            <div id="dialog_login">
                <form action="">
                    <h1>Registro</h1>
                    <p className="texto-inicial">Rellena el formulario para crear tu cuenta</p>
                    <input type="text" placeholder="Nombre" required />
                    <input type="text" placeholder="Apellido" required />
                    <select name="" id="" required>
                        <option value="" disabled selected>Género</option>
                        <option value="">Masculino</option>
                        <option value="">Femenino</option>
                        <option value="">Otro</option>
                    </select>
                    <input type="email" placeholder="Email" required />
                    <input type="email" placeholder="Password" required />
                    <input type="password" placeholder="Confirm password" required />
                    <button className="botones">Completar</button>
                </form>
            </div>
        </Modal>
    )
}

export default RegisterModal
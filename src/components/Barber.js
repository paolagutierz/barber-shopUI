import React, { useContext, useState } from 'react'
import { CartContext } from '../providers/cart';
import ModalCalendar from './ModalCalendar'
import { TYPES } from "./Alert"

function Barber(props) {

    const { jwt, setIsOpenLogin, setAlert } = useContext(CartContext)
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const handleCalendarOpen = () => {
        if (jwt && jwt != "") {
            setIsCalendarOpen(true)
        } else {
            setAlert({ text: "Debe iniciar sesión para poder realizar una reserva", type: TYPES.WARNING })
            setIsOpenLogin(true)
        }
    }

    return (
        <>
            <li>
                <h2>{props.name} {props.lastName}</h2>
                <img src={props.imageUrl} alt="" className="imagenes-reserva" />
                <p className="reserva-descripcion">{props.description}</p>
                <button className="boton-reserva" onClick={() => handleCalendarOpen()}>Reservar</button>
            </li>
            {isCalendarOpen && <ModalCalendar getReservations={props.getReservations} show={isCalendarOpen} closeModal={() => setIsCalendarOpen(false)} barberName={props.name} barberId={props.id}></ModalCalendar>}
        </>

    )
}

export default Barber
import React, { useState } from 'react'
import ModalCalendar from './ModalCalendar'

function Barber(props) {

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    return (
        <>
            <li>
                <h2>{props.name} {props.lastName}</h2>
                <img src={props.image} alt="" className="imagenes-reserva" />
                <p className="reserva-descripcion">{props.description}</p>
                <button className="boton-reserva" onClick={() => setIsCalendarOpen(true)}>Reservar</button>
            </li>
            <ModalCalendar show={isCalendarOpen} closeModal={() => setIsCalendarOpen(false)} barberName={props.name}></ModalCalendar>
        </>

    )
}

export default Barber
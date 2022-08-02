import React from 'react'

function Barber(props) {
    return (
        <li>
            <h2>{props.name} {props.lastName}</h2>
            <img src={props.image} alt="" class="imagenes-reserva" />
            <p class="reserva-descripcion">{props.description}</p>
            <button class="boton-reserva">Reservar</button>
        </li>
    )
}

export default Barber
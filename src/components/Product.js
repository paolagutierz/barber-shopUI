import React from 'react'

function Product({ name, image, description, price }) {
    return (
        <li>
            <h2>{name}</h2>
            <img src={image} alt="" class="imagenes-productos" />
            <p class="producto-descripcion">{description}</p>
            <p class="producto-precio">$ {price}</p>
            <button class="boton-productos">¡Lo quiero!</button>
        </li>
    )
}

export default Product
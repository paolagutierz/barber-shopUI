import React, { useContext, useState } from 'react'
import { CartContext } from "../providers/cart"

function CartProduct({ name, quantity, image, id, price }) {

    const { removeProduct, addProduct } = useContext(CartContext)

    return (
        <li>
            <h2>{name}</h2>
            <img src={image} alt="" className="imagenes-productos-cart" />
            <div className='boton-cantidad-cart'>
                <button className='boton-operador-cart' onClick={() => removeProduct(id)}>-</button>
                <div className='cantidad-cart'>{quantity}</div>
                <button className='boton-operador-cart' onClick={() => addProduct({ name, image, id, price })}>+</button>
            </div>
        </li >
    )
}

export default CartProduct
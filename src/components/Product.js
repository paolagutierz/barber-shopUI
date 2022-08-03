import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../providers/cart'

function Product({ name, image, description, price, id }) {
    const { addedProducts, addProduct, removeProduct } = useContext(CartContext)
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        const addedProduct = addedProducts?.find(product => product.id == id)

        if (addedProduct) {
            setQuantity(addedProduct.quantity)
        } else {
            setQuantity(0)
        }
    });

    return (
        <li>
            <h2>{name}</h2>
            <img src={image} alt="" className="imagenes-productos" />
            <p className="producto-descripcion">{description}</p>
            <p className="producto-precio">$ {price}</p>
            {quantity > 0
                ? <div className='boton-cantidad'>
                    <button className='boton-operador' onClick={() => removeProduct(id)}>-</button>
                    <div className='cantidad'>{quantity}</div>
                    <button className='boton-operador' onClick={() => addProduct({ id, name, image, price })}>+</button>
                </div>
                : <button className="boton-productos" onClick={() => addProduct({ id, name, image, price })}>¡Lo quiero!</button>
            }
        </li>
    )
}

export default Product
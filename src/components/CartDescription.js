import React from 'react'

function CartDescription({ name, quantity }) {
    return (
        <li>{name} X {quantity}</li>
    )
}

export default CartDescription
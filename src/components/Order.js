import React from 'react'

function Order({ id, products, price, date, isCancelable }) {
    return (
        <div className="pedidos">
            <ul className="descripcion">
                <h2>Pedido {id}</h2>
                <ul>Descripcion:
                    {products?.map(product => <li>{product}</li>)}
                </ul>
                <li>Precio: ${price}</li>
                <li>Fecha de despacho: {date}</li>
                {isCancelable ? <button className="boton-pedidos">Cancelar</button> : <h3>Despachado</h3>}
            </ul>
        </div>
    )
}

export default Order
import React, { useContext } from 'react'
import Page from '../components/Page'
import '../css/style-cart.css'
import { CartContext } from '../providers/cart'
import CartProduct from '../components/CartProduct'
import CartDescription from '../components/CartDescription'

function Cart() {

    const { addedProducts, total, resetCart } = useContext(CartContext)

    const handlePay = () => {
        console.log(addedProducts)
        resetCart()
    }

    return (
        <Page>
            <main>
                <h1 className="titulo-carrito">Tu carrito</h1>
                <div className="containers">
                    <div className="productos-carrito">
                        <h2 className="titulo-productos-cart">Productos:
                        </h2>
                        <ul className="productos-cart">
                            {addedProducts.map(cart =>
                                <CartProduct
                                    name={cart.name}
                                    quantity={cart.quantity}
                                    image={cart.image}
                                    id={cart.id}
                                    price={cart.price}>
                                </CartProduct>
                            )}
                        </ul>

                    </div>
                    <div className="descripcion">
                        <h2 className="titulo-descripcion">Descripción:</h2>
                        <ul className="lista-descripcion">
                            {addedProducts.map(description =>
                                <CartDescription name={description.name} quantity={description.quantity} ></CartDescription>
                            )}

                        </ul>
                        <div className="pago">
                            <div className="container-pago">
                                <h3 className="titulo-pago">Total: {total}</h3>
                                <button className="boton-pago" onClick={() => handlePay()}>Pagar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Page >

    )
}

export default Cart
import React, { useContext, useEffect } from 'react'
import Page from '../components/Page'
import '../css/style-cart.css'
import { CartContext } from '../providers/cart'
import CartProduct from '../components/CartProduct'
import CartDescription from '../components/CartDescription'
import { TYPES } from "../components/Alert"
import axios from "axios"

function Cart() {

    const { addedProducts, total, resetCart, setAlert, jwt, setIsOpenLogin } = useContext(CartContext)

    const handlePay = async () => {
        if (jwt && jwt != "") {
            try {
                const response = await axios.post("http://localhost:5001/orders", addedProducts)
                setAlert({ text: `Se realizo la compra exitosamente! con un total de $${total}`, type: TYPES.SUCCESS })
                resetCart()
                console.log(response)
            } catch (error) {
                setAlert({ text: `Tuvimos inconvenientes en realizar su compra. Por favor intente de nuevo`, type: TYPES.ERROR })
            }
        } else {
            setAlert({ text: "Debe iniciar sesión para poder realizar compras", type: TYPES.WARNING })
            setIsOpenLogin(true)
        }
    }

    //remove alert when component is going to be unmount
    useEffect(() => {
        return () => setAlert(null)
    }, [])

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
                                    imageUrl={cart.imageUrl}
                                    id={cart.id}
                                    price={cart.price}>
                                </CartProduct>
                            )}
                        </ul>

                    </div>
                    <div className="descripcion">
                        <h2 className="titulo-descripcion">Descripción:</h2>
                        <ul className="lista-descripcion">
                            {addedProducts.map(product =>
                                <CartDescription name={product.name} quantity={product.quantity} ></CartDescription>
                            )}

                        </ul>
                        <div className="pago">
                            <div className="container-pago">
                                <h3 className="titulo-pago">Total: ${total}</h3>
                                <button className={total == 0 ? "boton-pago-disabled" : "boton-pago"} onClick={() => handlePay()} disabled={total == 0 ? true : false}>Pagar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Page >

    )
}

export default Cart
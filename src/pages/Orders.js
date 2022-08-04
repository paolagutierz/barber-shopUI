import React, { useContext, useEffect } from 'react'
import { TYPES } from '../components/Alert'
import Order from '../components/Order'
import Page from '../components/Page'
import '../css/style-pedidos.css'
import { CartContext } from '../providers/cart'

const fakeResponse = [
    {
        id: '1',
        products: ['Tónico para barba x1', 'Peine clásico x2'],
        price: '70.00',
        date: '08/09/2022',
        isCancelable: true
    },
    {
        id: '2',
        products: ['Tónico para barba x1', 'Peine clásico x2'],
        price: '70.00',
        date: '08/09/2022',
        isCancelable: true
    },
    {
        id: '3',
        products: ['Tónico para barba x1', 'Peine clásico x2'],
        price: '70.00',
        date: '08/09/2022',
        isCancelable: false
    },
    {
        id: '4',
        products: ['Tónico para barba x1', 'Peine clásico x2'],
        price: '70.00',
        date: '08/09/2022',
        isCancelable: false
    }
]

function Orders() {

    const { setAlert } = useContext(CartContext)

    useEffect(() => {
        setAlert({ text: "Los pedidos pueden ser cancelados un dia antes de ser despachados", type: TYPES.WARNING })
    }, [])

    return (
        <Page>
            <main>
                <h1 className="titulo-pedidos">Pedidos pendientes</h1>
                <div className="container1">

                    {fakeResponse.filter(order => order.isCancelable).map(order =>
                        <Order id={order.id}
                            products={order.products}
                            price={order.price}
                            date={order.date}
                            isCancelable={order.isCancelable}>
                        </Order>
                    )}
                </div>

                <h1 className="titulo-pedidos">Pedidos despachados</h1>
                <div className="container2">
                    {fakeResponse.filter(order => !order.isCancelable).map(order =>
                        <Order id={order.id}
                            products={order.products}
                            price={order.price}
                            date={order.date}
                            isCancelable={order.isCancelable}>
                        </Order>
                    )}
                </div>
            </main>
        </Page>
    )
}

export default Orders
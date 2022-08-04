import React, { useContext, useEffect, useState } from 'react'
import Page from '../components/Page'
import '../css/style-productos.css'
import axios from "axios"
import Product from '../components/Product'
import { CartContext } from '../providers/cart'
import { DEFAULT_MESSAGES, TYPES } from '../components/Alert'

function Products() {
    const [products, setProducts] = useState([])
    const { setAlert } = useContext(CartContext)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:5001/products")
                setProducts(response.data.data)
            } catch (error) {
                console.log(error)
                setAlert({ text: DEFAULT_MESSAGES.SERVER_ERROR, type: TYPES.ERROR, timeout: 5000 })
            }
        }
        fetchData();
    }, [])

    return (
        <Page>
            <main>
                <ul className="productos">
                    {products.map(product =>
                        <Product name={product.name} imageUrl={product.imageUrl} description={product.description} price={product.price} id={product.id}></Product>
                    )}
                </ul>
            </main>
        </Page>
    )
}

export default Products
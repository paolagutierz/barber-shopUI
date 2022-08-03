import React, { useState } from "react";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "./providers/cart"

function App() {
  const [productsCantity, setProductsCantity] = useState(0)
  const [total, setTotal] = useState(0)
  const [addedProducts, setAddedProducts] = useState([])

  const resetCart = () => {
    setAddedProducts([])
    setTotal(0)
    setProductsCantity(0)
  }

  const addProduct = (productToAdd) => {
    let addedProduct = addedProducts.find(product => product.id === productToAdd.id)
    let productsModified

    if (addedProduct) {
      productsModified = addedProducts.map(product => {
        if (product.id == productToAdd.id) {
          product.quantity = product.quantity + 1
        }
        return product
      })
    } else {
      productToAdd.quantity = 1
      productsModified = addedProducts.slice()
      productsModified.push(productToAdd)
    }

    setProductsCantity(productsCantity + 1)
    setAddedProducts(productsModified)
    setTotal(parseFloat(total) + parseFloat(productToAdd.price))
  }

  const removeProduct = (id) => {
    let addedProduct = addedProducts.find(product => product.id === id)
    let productsModified = []

    if (addedProduct.quantity == 1) {
      productsModified = addedProducts.filter(product => product.id !== id)
    } else {
      productsModified = addedProducts.map(product => {
        if (product.id == id) {
          product.quantity = product.quantity - 1
        }
        return product
      })
    }

    setProductsCantity(productsCantity - 1)
    setAddedProducts(productsModified)
    setTotal(parseFloat(total) - parseFloat(addedProduct.price))
  }

  return (
    <CartContext.Provider value={{ total, setTotal, addedProducts, addProduct, removeProduct, resetCart, productsCantity }}>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter >
    </CartContext.Provider>
  );
}

export default App;

import { createContext } from "react";

export const CartContext = createContext({
    addedProducts: [],
    total: 0,
    productsCantity: 0,
    addProduct: (product) => { },
    removeProduct: (id) => { },
    resetCart: () => { },
    setTotal: (total) => { },
    setAlert: (alert) => { }
})
import { createContext } from "react";

export const CartContext = createContext({
    addedProducts: [],
    total: 0,
    productsCantity: 0,
    jwt: "",
    isOpenLogin: false,
    addProduct: (product) => { },
    removeProduct: (id) => { },
    resetCart: () => { },
    setTotal: (total) => { },
    setAlert: (alert) => { },
    setJwt: (jwt) => { },
    setIsOpenLogin: () => { }
})
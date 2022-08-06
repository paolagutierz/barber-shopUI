import React, { useContext } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Reservation from './pages/Reservation';
import Cart from './pages/Cart';
import { CartContext } from './providers/cart';

function AppRouter() {

    const { jwt } = useContext(CartContext)

    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<Products />}></Route>
            {(jwt && jwt.length > 0) &&
                <Route path='/orders' element={<Orders />}></Route>
            }
            <Route path='/reservation' element={<Reservation />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
        </Routes>
    )
}

export default AppRouter
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Reservation from './pages/Reservation';
import Cart from './pages/Cart';

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/orders' element={<Orders />}></Route>
            <Route path='/reservation' element={<Reservation />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
        </Routes>
    )
}

export default AppRouter
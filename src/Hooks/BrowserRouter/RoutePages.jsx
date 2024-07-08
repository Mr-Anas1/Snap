import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Category from '../../Pages/Category/Category'
import Cart from '../../Pages/Cart/Cart'
import Product from '../../Pages/Product/Product'

const RoutePages = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/category" element={<Category />} />
            <Route path="/cart" element = {<Cart />} />
            <Route path="/product" element = {<Product />} />
            <Route exact path="/" element = {<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutePages
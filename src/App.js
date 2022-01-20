import React, { Component } from 'react';
import './default.scss';
import { Routes, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import Product from './components/pages/Product';
import Navbar from './components/Navbar';
import Cart from './components/pages/Cart';


export default class App extends Component {
  render() {
    return (
    <div className='ProductApp'>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Products/> } />
        <Route path="/product" element={ <Product/> } />
        <Route path="/cart" element={ <Cart/> } />
      </Routes>      
    </div>
    )}
}

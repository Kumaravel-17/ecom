import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './Components/Product';
import ProductDetails from './Components/Productdetails';
import Home from './Components/Home';
import Cart2 from './Components/Cart2';
import About from './Components/About';
import Contactus from './Components/Contactus'

const App = () => {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart2  />} />
        <Route path="/about" element={<About  />} />
        <Route path='/contact' element={<Contactus/>}/>
      </Routes>
    </Router>
  );
};

export default App;


import React from 'react'
import Navbar from '../Components/Navlower.jsx';
import Nav from './Nav.jsx';
import Product from './Product.jsx'
import { useState } from 'react';
import Footer from './Footer.jsx'
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  return (
    <div>
      <Nav></Nav>
      <Navbar ></Navbar>
      <Product  ></Product>
      <Footer/>
    </div>
  )
}

export default Home

import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

import SliderImages from './components/Slider/SliderImages';

import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = product => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = product => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const handleSearch = term => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <Navbar cartItems={cartItems} handleSearch={handleSearch} />
      <SliderImages />
      <ProductList addToCart={addToCart} searchTerm={searchTerm} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;

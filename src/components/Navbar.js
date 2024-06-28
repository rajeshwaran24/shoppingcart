import React, { useState } from 'react';

const Navbar = ({ cartItems, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <nav>
      <div className='shopping-cart'>
      <h1>Shopping Cart</h1>
      <input 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm} 
        onChange={handleInputChange}
        />
        </div>
      <div className="cart-counter">
        Cart: {cartItems.length}
      </div>
    </nav>
  );
};

export default Navbar;

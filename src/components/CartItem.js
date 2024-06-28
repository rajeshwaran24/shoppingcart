import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className='cart-item-img'/>
      <h4>{item.name}</h4>
      <p>Rs{item.price}</p>
      <button className='cart-btn' onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  );
};

export default CartItem;

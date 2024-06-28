import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className='img' />
      <h3>{product.name}</h3>
      <p>Rs{product.price}</p>
      <button className='product-btn' onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;

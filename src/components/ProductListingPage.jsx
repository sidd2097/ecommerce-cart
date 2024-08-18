import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductListingPage = ({ addToCart }) => { // Accept addToCart as a prop
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} // Pass addToCart to ProductCard
        />
      ))}
    </div>
  );
};

export default ProductListingPage;

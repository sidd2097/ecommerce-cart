import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h3 className="mt-2 text-lg font-bold">{product.title}</h3>
      <p className="mt-1 text-gray-600">${product.price}</p>
      <button 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

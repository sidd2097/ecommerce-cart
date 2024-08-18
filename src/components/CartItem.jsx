import React from 'react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
      <div>
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p>${item.price}</p>
      </div>
      <div className="flex items-center">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        <span className="mx-2">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        <button 
          className="ml-4 text-red-500" 
          onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

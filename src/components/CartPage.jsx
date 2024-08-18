import React from 'react';
import CartItem from './CartItem';

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 10; // Example discount
  const total = subtotal - discount;

  return (
    <div className="p-4">
      {cart.map(item => (
        <CartItem 
          key={item.id} 
          item={item} 
          updateQuantity={updateQuantity} 
          removeFromCart={removeFromCart} 
        />
      ))}
      <div className="mt-6">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Discount: -${discount.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
        <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;

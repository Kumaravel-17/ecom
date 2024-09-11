import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const { product, quantity } = location.state || {};
  const [promoCode, setPromoCode] = useState('');
  const [shipping, setShipping] = useState(5.00);
  const [userQuantity, setUserQuantity] = useState(quantity); // Updated quantity

  if (!product) {
    return <div>No items in the cart.</div>;
  }

  const applyPromoCode = () => {
    if (promoCode === 'DISCOUNT10') {
      alert('Promo code applied! 10% discount.');
      return 0.9; // 10% discount
    } else {
      alert('Invalid promo code.');
      return 1; // No discount
    }
  };

  const discountMultiplier = promoCode === 'DISCOUNT10' ? 0.9 : 1; // Apply discount if valid
  const totalPrice = product.price * userQuantity * discountMultiplier;

  return (
    <div className="flex justify-between p-5 bg-gray-100">
      <div className="w-2/3 bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-3">Shopping Cart</h2>
        <h3 className="text-xl font-medium mb-5">{userQuantity} Items</h3>
        <div className="flex justify-between items-center py-3 border-b border-gray-200">
          <div className="flex items-center">
            <img src={product.thumbnail} alt={product.title} className="w-20 h-20 mr-3" />
            <div>
              <p className="font-medium">{product.title}</p>
              <p className="text-gray-500">{product.category}</p>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="bg-gray-200 px-3 py-1 rounded-lg"
              onClick={() => setUserQuantity(Math.max(1, userQuantity - 1))}
            >
              -
            </button>
            <input
              type="text"
              value={userQuantity}
              readOnly
              className="w-10 text-center mx-3 border border-gray-300 rounded-lg"
            />
            <button
              className="bg-gray-200 px-3 py-1 rounded-lg"
              onClick={() => {
                if (userQuantity < product.stock) {
                  setUserQuantity(userQuantity + 1);
                } else {
                  alert('Stock limit reached!');
                }
              }}
            >
              +
            </button>
          </div>
          <p>£{product.price.toFixed(2)}</p>
          <p>£{totalPrice.toFixed(2)}</p>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="w-1/3 bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-3">Order Summary</h2>
        <div className="flex justify-between mb-3">
          <p>Items: {userQuantity}</p>
          <p>£{(product.price * userQuantity).toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p>Shipping:</p>
          <select
            value={shipping}
            onChange={(e) => setShipping(parseFloat(e.target.value))}
            className="border border-gray-300 rounded-lg p-1"
          >
            <option value={5.00}>Standard Delivery - £5.00</option>
            <option value={10.00}>Express Delivery - £10.00</option>
          </select>
        </div>
        <div className="flex justify-between mb-3">
          <p>Promo Code:</p>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter your code"
            className="border border-gray-300 rounded-lg p-1"
          />
          <button
            onClick={applyPromoCode}
            className="bg-red-500 text-white px-3 py-1 rounded-lg ml-3"
          >
            Apply
          </button>
        </div>
        <div className="flex justify-between mb-5">
          <p>Total Cost:</p>
          <p>£{(totalPrice + shipping).toFixed(2)}</p>
        </div>
        <button className="bg-blue-500 text-white w-full py-3 rounded-lg" onClick={(()=>{
          alert("sucess....")
        })}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

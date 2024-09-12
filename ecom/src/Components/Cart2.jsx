import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Navbar from './Navlower';

const Cart2 = () => {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [shipping, setShipping] = useState(5.00);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const updateQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const applyPromoCode = () => {
    if (promoCode === 'DISCOUNT10') {
      alert('Promo code applied! 10% discount.');
      return 0.9;
    } else {
      alert('Invalid promo code.');
      return 1;
    }
  };

  const handleCheckout = () => {
    alert('Checkout successful!');
    setCartItems([]); 
    localStorage.removeItem('cart'); 
  };

  if (cartItems.length === 0) {
    return <div>No items in cart</div>;
  }

  const discountMultiplier = promoCode === 'DISCOUNT10' ? 0.9 : 1;
  const totalItemsPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) * discountMultiplier;
  const totalPrice = totalItemsPrice + shipping;

  return (
    <>
      <Nav />
      <Navbar />
      <div className="flex flex-col lg:flex-row p-5 bg-gray-100">
        <div className="lg:w-2/3 bg-white p-5 rounded-lg shadow-lg mb-5 lg:mb-0 lg:mr-5">
          <h2 className="text-2xl font-bold mb-3">Shopping Cart</h2>
          <h3 className="text-xl font-medium mb-5">{cartItems.length} Items</h3>
          {cartItems.map((item, index) => (
            <div key={index} className="flex flex-col lg:flex-row justify-between items-center py-3 border-b border-gray-200">
              <div className="flex items-center mb-3 lg:mb-0">
                <img src={item.image} alt={item.title} className="w-60 h-20 mr-3 sm:h-[200px] " />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-gray-500">{item.category}</p>
                </div>
              </div>
              <div className="flex items-center mb-3 lg:mb-0">
                <button
                  className="bg-gray-200 px-3 py-1 rounded-lg"
                  onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))}
                >
                  -
                </button>
                <input
                  type="text"
                  value={item.quantity}
                  readOnly
                  className="w-10 text-center mx-3 border border-gray-300 rounded-lg"
                />
                <button
                  className="bg-gray-200 px-3 py-1 rounded-lg"
                  onClick={() => {
                    if (item.quantity < item.availproduct) {
                      updateQuantity(index, item.quantity + 1);
                    } else {
                      alert('Stock limit reached!');
                    }
                  }}
                >
                  +
                </button>
              </div>
              <p className="mb-3 lg:mb-0">£{item.price.toFixed(2)}</p>
              <p>£{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="lg:w-1/3 bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Order Summary</h2>
          <div className="flex justify-between mb-3">
            <p>Items: {cartItems.length}</p>
            <p>£{totalItemsPrice.toFixed(2)}</p>
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
            <p>£{totalPrice.toFixed(2)}</p>
          </div>
          <button
            className="bg-blue-500 text-white w-full py-3 rounded-lg"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart2;

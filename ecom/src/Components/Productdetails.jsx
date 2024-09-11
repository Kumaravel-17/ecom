import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const navigate = useNavigate();
  const [userQuantity, setUserQuantity] = useState(0);

  if (!product) return <div>Product not found</div>;

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value <= product.stock) {
      setUserQuantity(value);
    } else {
      alert(`Only ${product.stock} items are available. Sorry.`);
    }
  };
  

  const handleAddToCart = () => {
    if (userQuantity > 0 && userQuantity <= product.stock) {
      navigate('/cart', {
        state: {
          product: product,
          quantity: userQuantity,
        },
      });
      alert(`Added ${userQuantity} of ${product.title} to the cart.`);
    } else {
      alert('Please enter a valid quantity.');
    }
  };

  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <div className="flex justify-center items-center py-8 ps-4 lg:ps-12 bg-white">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 flex justify-center h-[700px]">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-green-500">
              ${discountedPrice.toFixed(2)}
            </span>
            <span className="text-lg text-red-500 ml-4">{product.discountPercentage}% off</span>
          </div>
          <div className="text-lg font-semibold mb-2">
            Rating: <span className="text-yellow-500">{product.rating} / 5</span>
          </div>
          <div className="text-lg font-semibold mb-2">
            Stock: {product.stock} (Status: {product.availabilityStatus})
          </div>
          <div className="text-lg font-semibold mb-2">
            SKU: {product.sku}
          </div>
          <div className="text-lg font-semibold mb-2">
            Weight: {product.weight} g
          </div>
          <div className="text-lg font-semibold mb-2">
            Warranty: {product.warrantyInformation}
          </div>
          <div className="text-lg font-semibold mb-2">
            Shipping Info: {product.shippingInformation}
          </div>
          <div className="text-lg font-semibold mb-2">
            Return Policy: {product.returnPolicy}
          </div>

          <input
            type="number"
            min={0}
            value={userQuantity}
            onChange={handleQuantityChange}
            className="mt-4 p-2 w-20 border border-black-300 rounded"
          />
          <button
            className="bg-black text-white h-8 w-48 mt-4"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

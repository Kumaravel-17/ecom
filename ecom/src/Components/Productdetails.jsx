import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Nav'; 
import  Navbar  from './Navlower'; 

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [quantity, setQuantity] = useState(1);

  const gocart = (e) => {
    e.preventDefault();

    let discount = product.price * product.discountPercentage / 100;
    const item = {
      id: product.id,
      quantity: quantity,
      price: product.price,
      image: product.thumbnail,
      discount: discount,
      availproduct: product.stock
    };

    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(item);
    localStorage.setItem('cart', JSON.stringify(cartItems));

    navigate('/cart', { state: { item } });
  };

  const handleQuantityChange = (e) => {
    if (e.target.value > product.stock) {
      alert(`Only ${product.stock} items in stock!`);
      e.target.value = product.stock;
    }
    setQuantity(e.target.value);
  };

  return (
    <>
      <Nav />
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-10 w-full">
        <div className="border-black border-solid sm:m-3 border-[4px] p-5 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%]">
          <center>
            <div className="font-serif text-2xl">{product.title}</div>
          </center>
          <div className="mt-5 flex justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-[100px] sm:h-[200px] md:h-[200px] lg:h-[250px] xl:h-[200px]"
            />
          </div>
          <div className="mt-4 text-lg">
            <p><strong>Price: </strong>${product.price}</p>
            <p><strong>Stock: </strong>{product.stock}</p>
            <p><strong>Quantity: </strong></p>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="border border-gray-400 px-2 py-1 mt-2 w-[70px]"
            />
            <center><button className="bg-black w-[70px] text-white rounded-sm" onClick={gocart}>Add</button></center>
          </div>
        </div>
        <div className="mx-[10%]">
          <p><strong>Description: </strong>{product.description}</p>
          <p><strong>Category: </strong>{product.category}</p>
          <p><strong>Discount: </strong>{product.discountPercentage}%</p>
          <p><strong>Rating: </strong>{product.rating}</p>
          <p><strong>Brand: </strong>{product.brand}</p>
          <p><strong>SKU: </strong>{product.sku}</p>
          <p><strong>Weight: </strong>{product.weight}g</p>
          <p><strong>Dimensions: </strong>{`W: ${product.dimensions.width}cm, H: ${product.dimensions.height}cm, D: ${product.dimensions.depth}cm`}</p>
          <p><strong>Warranty: </strong>{product.warrantyInformation}</p>
          <p><strong>Shipping Info: </strong>{product.shippingInformation}</p>
          <p><strong>Availability: </strong>{product.availabilityStatus}</p>
          <p><strong>Return Policy: </strong>{product.returnPolicy}</p>
          <p><strong>Minimum Order Quantity: </strong>{product.minimumOrderQuantity}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

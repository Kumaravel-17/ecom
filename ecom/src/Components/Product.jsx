import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Navbar from './Navlower';
const Api_url = `https://dummyjson.com/products`;

const Product = () => {
  
  const [items, setItems] = useState([]); 
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(Api_url);
        if (!response.ok) throw new Error("Data not available");
        const listItems = await response.json();
        setItems(listItems.products); 
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);
 
  const handleClick = (item) => {
    navigate(`/product/${item.id}`, { state: { product: item } });
  };

  if (isLoading) return <div>Loading...</div>;
  if (fetchError) return <div>Error: {fetchError}</div>;

  return (
  
    <div className="p-5">
      <h2 className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {items.map((e) => (
          <div 
            key={e.id} 
            className='border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col'
          >
            <h3 className='font-bold text-lg text-center mb-3'>{e.title}</h3>
            <img 
              src={e.thumbnail} 
              alt={e.title} 
              className='w-full h-48 object-cover rounded-md mb-3 flex-grow'
            />
            <p className='text-gray-600 text-center mb-2'>${e.price}</p>
            <button 
              onClick={() => handleClick(e)} 
              className='bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mt-auto'
            >
              ADD
            </button>
          </div>
        ))}
      </h2>
    </div>
  
  );
};

export default Product;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Category from './Category.jsx';

const Api_url = `https://dummyjson.com/products`;

const Product = () => {
  const [items, setItems] = useState([]); 
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate(); // Hook for navigation

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

  const categories = [...new Set(items.map(item => item.category))];

  if (isLoading) return <div>Loading...</div>;
  if (fetchError) return <div>Error: {fetchError}</div>;

  return (
    <div>
      {categories.map((category) => (
        <Category
          key={category} 
          category={category}
          items={items.filter(item => item.category === category)}
          allitems={items}
          handleClick={handleClick}
          
        />
      ))}
    </div>
  );
};

export default Product;

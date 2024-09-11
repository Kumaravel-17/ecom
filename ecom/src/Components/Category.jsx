import React from 'react';

const Category = ({ category, items, handleClick }) => {
  return (
    <div>
      <br />
      <center><h1 className='font-extrabold font-serif uppercase p-16' >{category}</h1></center><br />
      <div className=' px-12 grid text-sm md:text-ms  grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4'>
        {items.map((item) => (
          <div
            key={item.id}
            className='p-4 border rounded transition-transform duration-300 hover:scale-105 px-16'
          >
            <h2>{item.title}</h2>
            <img
              src={item.thumbnail}
              alt={item.title}
              onClick={() => handleClick(item)} 
              className='w-full h-[200px] object-cover cursor-pointer'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

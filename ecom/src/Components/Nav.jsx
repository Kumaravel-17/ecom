import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import logo from '../Assets/logo.jpg';

const Nav = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 ps-0 dark:text-white'>
      <div className='bg-indigo-600 py-3 ps-0 pe-4'>
        <div className='container  flex justify-between items-center sm:  md:ps-11'>
          
          <a href='#' className='text-sm font-bold flex gap-3 md:text-2xl lg:text-3xl items-center text-white'>
            <img src={logo} alt='logo' className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full' />
            <span >ECom</span>
          </a>

         
          <div className='flex items-center space-x-4'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search...'
                className='w-[150px] md:w-[250px] lg:w-[250px] rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 pl-10'
              />
              <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
            </div>

            {/* Cart Icon */}
       <FaShoppingCart className='text-white text-xl cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

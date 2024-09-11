import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 ps-5 md:ps-12 bg-gray-800 text-white">
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="hover:text-gray-400">Home</a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-400">About</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-400">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

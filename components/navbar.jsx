'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // state to manage navbar visibility
  const [nav, setNav] = useState(false);

  // toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // array containing navigation items
  const navItems = [
    { id: 1, text: 'View Posts' },
    { id: 2, text: 'Add a Post' },
  ];

  // click event handler for "View Posts" button
  const handleViewPostsClick = () => {
    console.log("View Posts button clicked");
  };

  // click event handler for "Add a Post" button
  const handleAddPostClick = () => {
    console.log("Add a Post button clicked");
  };

  return (
    <div className='bg-gray-50 border-gray-200 shadow-lg flex justify-between items-center h-20 w-full mx-auto px-4'>
    {/* Text Logo */}
      <h1 className='w-full text-3xl font-bold ml-4 text-black'>Social<br/>App</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex space-x-2'>
      <li key={1}>
      <Link href="/">
        <button
            type="button"
            className='rounded-full px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm whitespace-nowrap'
            onClick={handleViewPostsClick}
          >
            View Posts
          </button>
      </Link>
</li>

{/* "Add a Post" button for desktop */}
<li key={2}>
  <Link href='/add' >
    <button
      type="button"
      className='rounded-full px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm whitespace-nowrap'
      onClick={handleAddPostClick}
    >
      Add a Post
    </button>
  </Link>
</li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r bg-gray-50 border-gray-200 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-black m-4'>Social App</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-blue-300 duration-300 hover:text-black cursor-pointer border-gray-300'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiFillRead } from 'react-icons/ai';
import { GiBookshelf } from "react-icons/gi";


const Navbar = () => {
  // state to manage navbar visibility
  const [nav, setNav] = useState(false);

  // toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // array containing navigation items
  const navItems = [
    { id: 1, text: 'View Library' },
    { id: 2, text: 'Add a Book' },
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
    <div className='flex items-center'>
        <GiBookshelf size={84} className='text-xl ml-8 mr-2' /> 
        <h1 className='text-2xl font-serif text-center font-bold text-black'>
            Page<br/>Turner
        </h1>
    </div>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex space-x-2'>
      <li key={1}>
      <Link href="/">
        <button
            type="button"
            className='rounded-full px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm whitespace-nowrap'
            onClick={handleViewPostsClick}
          >
            View Library
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
      Add a Book
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
        <div className='flex items-center'>
          <GiBookshelf size={32} className='text-md ml-4 mr-2' />
          <h1 className='text-md md:text-xl font-serif font-bold text-black m-2'>Page Turner</h1>
        </div>

        {/* Mobile Navigation Items */}
        <li
          className='p-4 border-b font-serif rounded-xl hover:bg-blue-300 duration-300 hover:text-black cursor-pointer border-gray-300'
        >
          <Link href='/'>
            <p onClick={handleNav}>View Posts</p>
          </Link>
        </li>
        <li
          className='p-4 border-b font-serif rounded-xl hover:bg-blue-300 duration-300 hover:text-black cursor-pointer border-gray-300'
        >
          <Link href='/add'>
            <p onClick={handleNav}>Add to Library</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
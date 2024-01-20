import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Logo from '../assets/images/logo.gif';
const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    //scroll event Listener
    window.addEventListener('scroll', () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${header ? 'top-0' : 'top-9'} fixed bg-white w-full max-w-[90vw] 1g:max-w-[1100px] 
      mx-auto rounded-md h-[90px] shadow-primary px-4 
      1g:px-8 z-20 transition-all duration-500 flex
      items-center justify-between`}
    >
      <div className="flex items-center">
        {/* Logo */}
        <a href="#">
          <img src={Logo} alt='' style={{ width: "13rem" }} />
        </a>
        {/* nav */}
        <div className='hidden lg:flex' >
          <Nav />
        </div>
      </div>
      <div className='flex items-center'>
        {/* buttons */}
        <div className=' flex 1g: gap-x-4   '>
          <button className=' text-heading font-medium
           1g: text-base hover:text-orange-transition'>
            Sign In
          </button >
          <button className='btn btn-md 1g:px-[30px]
          bg-orange-100 border border-orange text-orange
          font-medium text-sm lg:text-base
          hover:bg-orange-200 hover:text-white transition'>
            Sign Up
          </button>
        </div>
        {/* nav mobile */}
        <NavMobile />
      </div>
    </header>
  );
};
export default Header;
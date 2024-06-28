import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Logo from '../assets/images/logo.gif';
import WhatsAppLogo from '../assets/images/whatsapp-logo.png';

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    // Scroll event Listener
    const handleScroll = () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${header ? 'top-0' : 'top-9'} fixed bg-white w-full max-w-[90vw] lg:max-w-[1100px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-center lg:justify-between`}
    >
      <div className="flex items-center">
        {/* Logo */}
        <a href="#">
          <img src={Logo} alt='' style={{ width: "13rem" }} />
        </a>
        {/* nav */}
        <div className='hidden lg:flex ml-auto'>
          <Nav />
        </div>
      </div>
      <div className='flex items-center'>
        {/* WhatsApp logo as a button */}
        <a
          href="https://wa.me/91"
          target="_blank"
          rel="noopener noreferrer"
          className='flex items-center'
        >
          <img
            src={WhatsAppLogo}
            alt="WhatsApp Logo"
            className='h-[50px] w-[50px] mr-2 cursor-pointer animate-bounce'
          />
        </a>
        {/* nav mobile */}
        <NavMobile />
      </div>

    </header>
  );
};

export default Header;

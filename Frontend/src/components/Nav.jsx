import React, { useState } from 'react';
import { navigation } from '../data';
import { Link } from 'react-router-dom';
import Login from './forms/Login';
const Nav = () => {
  const [isBlog, setIsBlog] = useState(false)
  return (
    <nav className='ml-[70px]'>
      <ul className='flex gap-x-[42px]'>
        {navigation.map((item, index) => {
          if (item.name === "Blogs") {
            return <li key={index} >
              <Link to={"/login"}>{item.name}</Link>
            </li>
          }
          else {
            return <li key={index} >
              <a href={item.href}>{item.name}</a>
            </li>
          }

        })}
      </ul>
    </nav>
  );
};

export default Nav;

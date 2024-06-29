import React from 'react';
import { navigation } from '../data';
import { HashLink as Link } from 'react-router-hash-link';
const Nav = () => {
    return (
        <nav className='ml-[70px]'>
            <ul className='flex gap-x-[42px]'>
                {navigation.map((item, index) => (
                    <li key={index}>
                        <Link to={`${item.href}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;

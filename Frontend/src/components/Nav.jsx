import React from 'react';
import { navigation } from '../data';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='ml-[70px]'>
            <ul className='flex gap-x-[42px]'>
                {navigation.map((item, index) => (
                    <li key={index}>
                        {item.name === "Blogs" ? (
                            <Link to={"/blogs"}>{item.name}</Link>
                        ) : (
                            <a href={item.href}>{item.name}</a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;

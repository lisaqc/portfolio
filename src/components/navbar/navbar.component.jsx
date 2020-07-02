import React from 'react';
import 'font-awesome/css/font-awesome.css';
import './navbar.styles.css';

const Navbar = () => {

    return (
        <navbar className='navbar'> 
            <ul class="menu__list">
                <li class="menu__list-item"><a class="menu__link" href="/home">Home</a></li>
                <li class="menu__list-item"><a class="menu__link" href="/about">About</a></li>
                <li class="menu__list-item"><a class="menu__link" href="/resume">Resume</a></li>
            </ul>
        </navbar>
    );
};

export default Navbar;

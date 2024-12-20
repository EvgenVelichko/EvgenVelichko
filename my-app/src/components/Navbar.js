/** @format */

import React from 'react';
import '../styles/components/navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#certificates">Дипломи</a>
                </li>
                <li>
                    <a href="#projects">Проєкти</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

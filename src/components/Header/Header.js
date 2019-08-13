import React from 'react';
import Navbar from './Navbar/Navbar';
import './Header.scss';

const Header = (props) =>(
    <header className="header">
        <Navbar {...props} />
    </header>
)

export default Header
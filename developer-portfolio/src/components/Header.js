import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming there is a CSS file for styling the header

const Header = () => {
    return (
        <header className="header">
            <div className="branding">
                <h1>My Portfolio</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
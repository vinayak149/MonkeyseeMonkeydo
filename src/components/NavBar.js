// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/submit">Submit Idea</Link>
            <Link to="/review">Review Ideas</Link>
        </nav>
    );
};

export default NavBar;

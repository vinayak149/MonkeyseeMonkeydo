import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create and import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar flex min-h-screen flex-col z-10">
      <div className="navbar-container h-14 bg-0a192f">
        <Link to="/" className="navbar-logo">
          MonkeySee<span>MonkeyDo</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/login" className="nav-links">Login / Signup</Link>
          </li>
          {/* Other menu items can be added here */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

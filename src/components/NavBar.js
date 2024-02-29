import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create and import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Hackathon<span>Hub</span>
        </Link>
        <ul className="nav-menu">
           <li className="nav-item">
            <Link to="/home" className="nav-links">Home</Link>
          </li>
        <li className="nav-item">
            <Link to="/auth-container" className="nav-links">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/auth-con" className="nav-links">Signup</Link>
          </li>
         
          {/* <li className="nav-item">
            <Link to="/participant-dashboard" className="nav-links">Participant Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/judge-dashboard" className="nav-links">Judge Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/panelist-dashboard" className="nav-links">Panelist Dashboard</Link>
          </li> */}
          {/* Add additional nav items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

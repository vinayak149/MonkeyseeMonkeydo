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
          {/* <li className="nav-item">
            <Link to="/login" className="nav-links">Login / Signup</Link> */}
        <li className="nav-item">
            <Link to="/auth" className="nav-links">Login / Signup</Link>
          </li>
          {/* Other menu items can be added here */}
          
         
          {/* <li className="nav-item">
            <Link to="/participant-dashboard" className="nav-links">Participant Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/judge-dashboard" className="nav-links">Judge Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/panelist-dashboard" className="nav-links">Panelist Dashboard</Link>
          </li> */}
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

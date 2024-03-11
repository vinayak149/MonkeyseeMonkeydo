import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create and import the CSS file
import monkeyGif from './Monkey.gif'

const Navbar = () => {
  return (
    <nav className="navbar flex min-h-screen flex-col z-10">
      <div className="navbar-container h-14 bg-0a192f">
        <Link to="/" className="navbar-logo">
          <span className="small-text">MonkeySee</span> {/* Wrap "MonkeySee" in a span with a class */}
          <span className="small-text">MonkeyDo</span> {/* "MonkeyDo" remains as it is */}
          <img src={monkeyGif} alt="Monkey GIF" className="gif" /> {/* Use the imported monkeyGif variable as the src */}
        </Link>
        <ul className="nav-menu">
          {/* You can add other links here */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

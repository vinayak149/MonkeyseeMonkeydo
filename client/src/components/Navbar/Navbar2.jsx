import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import monkeyGif from './Monkey.gif';
import DialogBox from './DialogBox'; // Import the DialogBox component
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  const handleLogoutClick = () => {
    setDialogOpen(true); // Show the dialog
  };

  const handleConfirmLogout = () => {
    setDialogOpen(false); // Close the dialog
    // Perform your logout logic here, then redirect
    localStorage.clear();
    navigate('/auth');
  };

  const handleClose = () => {
    setDialogOpen(false); // Close the dialog without logging out
  };

  // Determine if the current page is the registration page
  const isRegisterPage = location.pathname === '/register';

  return (
    <nav className="navbar flex min-h-screen flex-col z-10">
      <div className="navbar-container h-14 bg-0a192f">
        <Link to="/" className="navbar-logo">
          <span className="small-text">MonkeySee</span>
          <span className="small-text">MonkeyDo</span>
          <img src={monkeyGif} alt="Monkey GIF" className="gif" />
        </Link>
        <ul className="nav-menu">
          {/* Only show the logout button if the user is logged in */}
          {isLoggedIn && !isRegisterPage && (
            <li className="nav-item">
              <div onClick={handleLogoutClick} className="nav-links" style={{ cursor: 'pointer' }}>Logout</div>
            </li>
          )}
        </ul>
      </div>
      <DialogBox
        isOpen={isDialogOpen}
        onClose={handleClose}
        onConfirm={handleConfirmLogout}
        title="Confirm Logout"
      >
        Are you sure you want to logout?
      </DialogBox>
    </nav>
  );
};

export default Navbar;

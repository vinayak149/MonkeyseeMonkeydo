// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css'; // Make sure to create and import the CSS file
// import monkeyGif from './Monkey.gif'; // Import your GIF file
// import DialogBox from './DialogBox'; // Import the DialogBox component
// import { useAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const [isDialogOpen, setDialogOpen] = useState(false);
//   const { isLoggedIn, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogoutClick = () => {
//     // Only show the logout confirmation dialog if a user is logged in
//     if (isLoggedIn) {
//       setDialogOpen(true); // Show the dialog
//     }
//   };

//   const handleConfirmLogout = () => {
//     setDialogOpen(false); // Close the dialog
//     logout(); // Perform your logout logic here, then redirect
//     navigate('/auth');
//     console.log("event"); // Redirect to home page or login page as needed
//   };

//   const handleClose = () => {
//     setDialogOpen(false); // Close the dialog without logging out
//   };

//   return (
//     <nav className="navbar flex min-h-screen flex-col z-10">
//       <div className="navbar-container h-14 bg-0a192f">
//         <Link to="/" className="navbar-logo">
//           <span className="small-text">MonkeySee</span>
//           <span className="small-text">MonkeyDo</span>
//           <img src={monkeyGif} alt="Monkey GIF" className="gif" />
//         </Link>
//         <ul className="nav-menu">
//           {!isLoggedIn && (
//             <li className="nav-item">
//               <Link to="/auth" className="nav-links">Login / Signup</Link>
//             </li>
//           )}
//           {isLoggedIn && (
//             <>
//               <li className="nav-item">
//                 <Link to="/dashboard" className="nav-links">Participant Dashboard</Link>
//               </li>
//               <li className="nav-item">
//                 {/* Changed to div for logout functionality */}
//                 <div onClick={handleLogoutClick} className="nav-links" style={{cursor: 'pointer'}}>Logout</div>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//       <DialogBox
//         isOpen={isDialogOpen}
//         onClose={handleClose}
//         onConfirm={handleConfirmLogout}
//         title="Confirm Logout"
//       >
//         Are you sure you want to logout?
//       </DialogBox>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Make sure to create and import the CSS file
import monkeyGif from './Monkey.gif'; // Import your GIF file
import DialogBox from './DialogBox'; // Import the DialogBox component
import { useAuth } from "../context/AuthContext";
import { UserInfo } from '../../utils/helper';

const Navbar = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const userInfo = new UserInfo();

  const handleLogoutClick = () => {
    // Only show the logout confirmation dialog if a user is logged in
    if (isLoggedIn) {
      setDialogOpen(true); // Show the dialog
    }
  };

  const handleConfirmLogout = () => {
    setDialogOpen(false); // Close the dialog
    logout(); // Perform your logout logic here, then redirect
    navigate('/auth');
    console.log("event"); // Redirect to home page or login page as needed
  };

  const handleClose = () => {
    setDialogOpen(false); // Close the dialog without logging out
  };

  return (
    <nav className="navbar flex min-h-screen flex-col z-10">
      <div className="navbar-container h-14 bg-0a192f">
        <Link to="/" className="navbar-logo">
          <span className="small-text">MonkeySee</span>
          <span className="small-text">MonkeyDo</span>
          <img src={monkeyGif} alt="Monkey GIF" className="gif" />
        </Link>
        <ul className="nav-menu">
          {!isLoggedIn && (
            <li className="nav-item">
              <Link to="/auth" className="nav-links">Login / Signup</Link>
            </li>
          )}
          {isLoggedIn && (
            <>
              <li className="nav-item">
                {(userInfo.getRole() === 'PARTICIPANT') && <Link to="/dashboard" className="nav-links">Participant Dashboard</Link>}
                {(userInfo.getRole() === 'PANELIST') && <Link to="/panelist" className="nav-links">Panelist Dashboard</Link>}
                {(userInfo.getRole() === 'JUDGE') && <Link to="/judge" className="nav-links">Judge Dashboard</Link>}
              </li>
              <li className="nav-item">
                {/* Changed to div for logout functionality */}
                <div onClick={handleLogoutClick} className="nav-links" style={{ cursor: 'pointer' }}>Logout</div>
              </li>
            </>
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

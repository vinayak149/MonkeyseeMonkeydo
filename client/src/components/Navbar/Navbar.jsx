import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create and import the CSS file
import monkeyGif from './Monkey.gif'; // Import your GIF file
import { useAuth } from "../context/AuthContext";
 
// const Navbar = () => {
//   const { isLoggedIn, logout } = useAuth();
//   return (
//     <nav className="navbar flex min-h-screen flex-col z-10">
//       <div className="navbar-container h-14 bg-0a192f">
//         <Link to="/" className="navbar-logo">
//           <span className="small-text">MonkeySee</span> {/* Wrap "MonkeySee" in a span with a class */}
//           <span className="small-text">MonkeyDo</span> {/* "MonkeyDo" remains as it is */}
//           <img src={monkeyGif} alt="Monkey GIF" className="gif" /> {/* Use the imported monkeyGif variable as the src */}
//         </Link>
//         {/* <ul className="nav-menu">
//           <li className="nav-item">
//             <Link to="/auth" className="nav-links">Login / Signup</Link>
//           </li>
//         </ul> */}
//         <ul className="nav-menu">
//         {!isLoggedIn && (
//           <li className="nav-item">
//             <Link to="/auth" className="nav-links">Login / Signup</Link>
//           </li>
//         )}
//         {isLoggedIn && (
//           <li className="nav-item">
//             <button onClick={logout} className="logout">Logout</button>
//           </li>
//         )}
//         </ul>
//       </div>
//     </nav>
//   );
// };
 
// export default Navbar;

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

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
            <li className="nav-item">
              {/* Use the same class as the login/signup links for consistency */}
              <button onClick={logout} className="nav-links" style={{border: 'none', backgroundColor: 'transparent'}}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
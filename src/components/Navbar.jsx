import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by verifying token or user data in localStorage
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Login"); // Remove user data from localStorage
    setIsLoggedIn(false);
    window.location.reload(); // Refresh the page to update UI
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Course<span>Pro</span></Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/subscription">Combo</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <div className="auth-buttons">
        {isLoggedIn ? (
          <>
            <Link to="/profile" className="signup-btn">Profile</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

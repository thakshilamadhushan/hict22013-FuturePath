import React, { useState } from "react";
import "./navBar.css";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          {/*<div className="logo-icon">✦</div>*/}
          <h2>Future<span>Path</span>
          </h2>
        </div>

        {/* Nav Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/" className="active-link">Home</Link></li>
          <li><Link to="/jobs">Find Jobs</Link></li>
          <li><Link to="/companies">Companies</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Search */}
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search jobs, companies..."
          />
        </div>

        {/* Buttons */}
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>

        {/* Mobile Menu */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
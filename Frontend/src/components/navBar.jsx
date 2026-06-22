import React, { useState } from "react";
import "./navBar.css";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

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
          <li><a href="/" className="active-link">Home</a></li>
          <li><a href="/jobs">Find Jobs</a></li>
          <li><a href="/companies">Companies</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
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
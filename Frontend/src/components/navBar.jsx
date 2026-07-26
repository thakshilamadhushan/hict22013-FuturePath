import React, { useState } from "react";
import "./navBar.css";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import LoginModal from "./Login/LoginModal";
import SignupModal from "./SignUp/SignupModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            {/*<div className="logo-icon">✦</div>*/}
            <h2>
              Future<span>Path</span>
            </h2>
          </div>

          {/* Nav Links */}
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/findjobs" className={({ isActive }) => (isActive ? "active-link" : "")}>Find Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/companies" className={({ isActive }) => (isActive ? "active-link" : "")}>Companies</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>Contact</NavLink>
            </li>
          </ul>

          {/* Search */}
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search jobs, companies..." />
          </div>

          {/* Buttons */}
          <div className="nav-buttons">
            <button className="login-btn" onClick={() => setShowLogin(true)}>
              Login
            </button>
            <button className="signup-btn" onClick={() => setShowSignup(true)}>
              Sign Up
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
      {showLogin && <LoginModal closeModal={() => setShowLogin(false)} />}

      {showSignup && <SignupModal closeModal={() => setShowSignup(false)} />}
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./navBar.css";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "/FuturePathLogo.png";
import LoginModal from "./Login/LoginModal";
import SignupModal from "./SignUp/SignupModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <img src={Logo} className="navbar-logo-icon" />
            <h2>
              Future<span>Path</span>
            </h2>
          </div>

          {/* Nav Links */}
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/findjobs"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Find Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/companies"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Companies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contact
              </NavLink>
            </li>

            {/* Mobile Buttons */}
            <li className="mobile-buttons">
              <button
                className="nav-login-btn"
                onClick={() => {
                  setShowLogin(true);
                  setMenuOpen(false);
                }}
              >
                Login
              </button>

              <button
                className="nav-signup-btn"
                onClick={() => {
                  setShowSignup(true);
                  setMenuOpen(false);
                }}
              >
                Sign Up
              </button>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="nav-buttons">
            {user ? (
              <div className="profile-container">
                <img
                  src={user.profilePic}
                  alt="profile"
                  className="profile-img"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                />

                {showProfileMenu && (
                  <div className="profile-dropdown">
                    <p>{user.name}</p>

                    <button
                      onClick={() =>
                        navigate(
                          user.role === "jobseeker"
                            ? "/jobseeker"
                            : "/employer",
                        )
                      }
                    >
                      Dashboard
                    </button>

                    <button onClick={logout} className="userlogout">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  className="nav-login-btn"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </button>

                <button
                  className="nav-signup-btn"
                  onClick={() => setShowSignup(true)}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="mobile-right">
            {user && (
              <div className="profile-container">
                <img
                  src={user.profilePic}
                  alt="profile"
                  className="profile-img"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                />

                {showProfileMenu && (
                  <div className="profile-dropdown mobile-dropdown">
                    <button
                      onClick={() =>
                        navigate(
                          user.role === "jobseeker"
                            ? "/jobseeker/dashboard"
                            : "/employer/dashboard",
                        )
                      }
                    >
                      Dashboard
                    </button>

                    <button onClick={logout}>Logout</button>
                  </div>
                )}
              </div>
            )}

            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
      {showLogin && <LoginModal closeModal={() => setShowLogin(false)} />}

      {showSignup && <SignupModal closeModal={() => setShowSignup(false)} />}
    </>
  );
};

export default Navbar;

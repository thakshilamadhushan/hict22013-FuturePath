import React, { useState } from "react";
import "./SignupModal.css";
import {
  FaGoogle,
  FaLinkedinIn,
  FaRegUser,
  FaRegEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaTimes,
  FaUser,
  FaShoppingBag,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const SignupModal = ({ closeModal }) => {
  const [role, setRole] = useState("jobseeker");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-overlay" onClick={closeModal}>
      <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close */}

        <button className="close-btn" onClick={closeModal}>
          <FaTimes />
        </button>

        {/* Logo */}

        <div className="logo-row">
          <div className="logo-icon">
            <HiSparkles />
          </div>

          <h2>
            Future<span>Path</span>
          </h2>
        </div>

        {/* Heading */}

        <h1>Create your account</h1>

        <p className="subtitle">Start your AI-powered job search today</p>

        {/* Role */}

        <div className="role-switch">
          <button
            className={role === "jobseeker" ? "active" : ""}
            onClick={() => setRole("jobseeker")}
          >
            <FaUser /> Job Seeker
          </button>

          <button
            className={role === "employer" ? "active" : ""}
            onClick={() => setRole("employer")}
          >
            <FaShoppingBag /> Employer
          </button>
        </div>

        {/* Social */}

        <div className="social-buttons">
          <button>
            <FaGoogle />
            Google
          </button>

          <button>
            <FaLinkedinIn />
            LinkedIn
          </button>
        </div>

        {/* Divider */}

        <div className="divider">
          <span>or with email</span>
        </div>

        {/* Form */}

        <form>
          <label>Full name</label>

          <div className="input-box">
            <FaRegUser />
            <input type="text" placeholder="Alex Johnson" />
          </div>

          <label>Email address</label>

          <div className="input-box">
            <FaRegEnvelope />
            <input type="email" placeholder="you@example.com" />
          </div>

          <label>Password</label>

          <div className="input-box">
            <FaLock />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Min. 8 characters"
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button className="signup-btn">Create Account</button>
        </form>

        <p className="terms">
          By signing up you agree to our
          <span> Terms </span>
          and
          <span> Privacy Policy</span>
        </p>

        <p className="login-link">
          Already have an account?
          <span> Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;

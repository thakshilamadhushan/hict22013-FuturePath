import "./LoginModal.css";
import {FaGoogle,FaLinkedinIn,FaRegEnvelope,FaLock,FaEye,FaTimes,} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

export default function LoginModal({ closeModal }) {
  return (
    <div className="login-overlay" onClick={closeModal}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        {/* Header */}

        <div className="login-top">
          <div className="brand">
            <div className="brand-icon">
              <HiSparkles />
            </div>

            <h2>
              Future<span>Path</span>
            </h2>
          </div>
        </div>

        <h1>Welcome back</h1>

        <p className="subtitle">Sign in to continue your job search</p>

        {/* Social Buttons */}

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
          <span>or continue with email</span>
        </div>

        {/* Email */}

        <div className="input-group">
          <label>Email address</label>

          <div className="input-box">
            <FaRegEnvelope />
            <input type="email" placeholder="you@example.com" />
          </div>
        </div>

        {/* Password */}

        <div className="input-group">
          <label>Password</label>

          <div className="input-box">
            <FaLock />
            <input type="password" placeholder="••••••••" />
            <FaEye className="eye" />
          </div>
        </div>

        {/* Options */}

        <div className="options">
          <label className="remember">
            <input type="checkbox" />
            Remember me
          </label>

          <a href="/">Forgot password?</a>
        </div>

        {/* Login */}

        <button className="modallogin-btn">Sign In</button>

        <p className="modalsignup">
          Don't have an account?
          <a href="/"> Sign up free</a>
        </p>
      </div>
    </div>
  );
}

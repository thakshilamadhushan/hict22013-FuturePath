import "./LoginModal.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaGoogle,
  FaLinkedinIn,
  FaRegEnvelope,
  FaLock,
  FaEye,
  FaTimes,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

export default function LoginModal({ closeModal }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sampleUsers = [
    {
      email: "jobseeker@gmail.com",
      password: "123456",
      role: "jobseeker",
      profilePic: "https://i.pravatar.cc/150?img=12",
    },
    {
      email: "employer@gmail.com",
      password: "123456",
      role: "employer",
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-RO26oq304_-stFTTKg9p8g6_rEPqTMQ_rl6524WH70cXRQyv0rQeBs&s=10",
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const user = sampleUsers.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      alert("Invalid Email or Password");
      return;
    }

    // Save login (optional)
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect according to role
    if (user.role === "jobseeker") {
      navigate("/jobseeker");
    } else if (user.role === "employer") {
      navigate("/employer");
    }

    closeModal();

  };

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
        <form onSubmit={handleLogin}>
          <div className="login-input-group">
            <label>Email address</label>

            <div className="login-input-box">
              <FaRegEnvelope />
              <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
          </div>

          {/* Password */}

          <div className="login-input-group">
            <label>Password</label>

            <div className="login-input-box">
              <FaLock />
              <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required/>
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
          <button className="modallogin-btn" type="submit">Sign In</button>
          <p className="modalsignup">
            Don't have an account?
            <a href="/"> Sign up free</a>
          </p>
        </form>
      </div>
    </div>
  );
}

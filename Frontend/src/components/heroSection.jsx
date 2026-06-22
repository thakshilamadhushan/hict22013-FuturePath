import React from "react";
import "./HeroSection.css";
import {FaSearch, FaMapMarkerAlt, FaBriefcase, FaBuilding, FaUsers, FaAward, FaUpload} from "react-icons/fa";

function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-left">

          <div className="hero-badge">
            ✨ AI-Powered Job Matching Platform
          </div>

          <h1>
            Find Your <span>Dream Job</span>
            <br />
            with AI-Powered
            <br />
            Matching
          </h1>

          <p>
            Upload your CV, showcase your skills, and discover jobs
            tailored precisely to your experience — powered by
            cutting-edge AI.
          </p>

          {/* Search Box */}

          <div className="job-search-card">

            <div className="search-row">

              <div className="input-box">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Job title, keywords..."
                />
              </div>

              <div className="input-box">
                <FaMapMarkerAlt />
                <input
                  type="text"
                  placeholder="Location..."
                />
              </div>

              <select>
                <option>All Types</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Remote</option>
              </select>

            </div>

            <div className="button-row">

              <button className="find-btn">
                <FaSearch />
                Find Jobs
              </button>

              <button className="upload-btn">
                <FaUpload />
                Upload CV
              </button>

            </div>

          </div>

          {/* Tags */}

          <div className="popular-tags">
            <span>Popular:</span>

            <button>React Developer</button>
            <button>Data Analyst</button>
            <button>Product Designer</button>
            <button>DevOps</button>
          </div>

        </div>

        {/* Right Side */}

        <div className="hero-right">

          <div className="dashboard-card">

            <div className="dashboard-header">
              <h3>AIMatch</h3>
              <span>3 new roles found</span>
            </div>

            <div className="job-item">
              <div>
                <h4>AI Engineer</h4>
                <p>Stripe</p>
              </div>
              <span>97%</span>
            </div>

            <div className="job-item">
              <div>
                <h4>ML Engineer</h4>
                <p>OpenAI</p>
              </div>
              <span>93%</span>
            </div>

            <div className="job-item">
              <div>
                <h4>Product Designer</h4>
                <p>Figma</p>
              </div>
              <span>90%</span>
            </div>

            <div className="progress">
              <div className="progress-fill"></div>
            </div>

          </div>

          <div className="floating-card top">
            <h3>+2,847</h3>
            <p>New Jobs</p>
          </div>

          <div className="floating-card bottom">
            <h3>97%</h3>
            <p>AI Score Match</p>
          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="stats">

        <div className="stat-card">
          <FaBriefcase />
          <div>
            <h3>50K+</h3>
            <p>Active Jobs</p>
          </div>
        </div>

        <div className="stat-card">
          <FaBuilding />
          <div>
            <h3>10K+</h3>
            <p>Companies</p>
          </div>
        </div>

        <div className="stat-card">
          <FaUsers />
          <div>
            <h3>100K+</h3>
            <p>Candidates</p>
          </div>
        </div>

        <div className="stat-card">
          <FaAward />
          <div>
            <h3>94%</h3>
            <p>Placement Rate</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default HeroSection;
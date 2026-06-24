import React from "react";
import starIcon from "../assets/start.png";
import HeroImage from "../assets/hero.png";
import "./heroSection.css";
import {FaSearch, FaMapMarkerAlt, FaBriefcase, FaBuilding, FaUsers, FaAward, FaUpload} from "react-icons/fa";

function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-left">

          <div className="hero-badge">
            <img src={starIcon} alt="AI Icon" />AI-Powered Job Matching Platform
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

              <select className="job-type-select">
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

        <img src={HeroImage} alt="Hero" className="hero-image" />

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
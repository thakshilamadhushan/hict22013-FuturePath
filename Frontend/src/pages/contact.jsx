import React from "react";
import "./contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Hero */}
      <div className="contact-hero">
        <button className="contact-badge">
          <FaEnvelope /> Get In Touch
        </button>

        <h1>We'd love to hear from you</h1>

        <p>
          Whether you're a job seeker, an employer, or just curious — our team
          responds within 24 hours.
        </p>
      </div>

      {/* Content */}
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <div className="info-card">
            <div className="icon">
              <FaEnvelope />
            </div>
            <div>
              <h4>Email us</h4>
              <h3>hello@futurepath.ai</h3>
              <p>We reply within 24 hours</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <div>
              <h4>Call Us</h4>
              <h3>+1 (415) 555-0192</h3>
              <p>Mon-Fri, 9am-6pm PST</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4>San Francisco HQ</h4>
              <h3>100 Mission Street</h3>
              <p>San Francisco, CA 94105</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon">
              <FaGlobe />
            </div>
            <div>
              <h4>Global Offices</h4>
              <h3>London · Singapore</h3>
              <p>Remote-first team worldwide</p>
            </div>
          </div>

          <div className="info-card social-card">
            <h3>Follow us</h3>

            <div className="social-icons">
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaLinkedinIn />
              </a>
              <a href="/">
                <FaGithub />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        {/* Right Side */}

        <div className="contact-form">

          <h2>Send us a message</h2>

          <p>Fill out the form and we'll be in touch soon.</p>

          <form>

            <div className="row">
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="Alex Johnson" />
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" />
              </div>
            </div>

            <div className="input-group">
              <label>Subject</label>

              <select>
                <option>Select a topic...</option>
                <option>Job Inquiry</option>
                <option>Employer</option>
                <option>Support</option>
                <option>General</option>
              </select>
            </div>

            <div className="input-group">
              <label>Message</label>

              <textarea
                rows="6"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>

            <button className="send-btn">
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
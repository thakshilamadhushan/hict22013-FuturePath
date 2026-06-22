
import "./Footer.css";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-brand">
          <div className="logo">
            <h2>FuturePath</h2>
          </div>


          <div className="social-icons">
            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Platform */}
        <div className="footer-links">
          <h3>PLATFORM</h3>
          <a href="#">Find Jobs</a>
          <a href="#">Companies</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Company */}
        <div className="footer-links">
          <h3>COMPANY</h3>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>STAY UPDATED</h3>

          <p>
            Weekly job market insights to your inbox.
          </p>

          <div className="newsletter-box">
            <input
              type="email"
              placeholder="your@email.com"
            />
            <button>➜</button>
          </div>

          <div className="contact-info">
            <p>✉ futurepath@gmail.com</p>
            <p>🌍 SL · Colombo · Sri Lanka
            </p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 FuturePath Inc. All rights reserved.</p>

        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
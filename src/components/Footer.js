import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a
          href="https://github.com/Austin-Online"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-social-icon"
        ><FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/austinshook/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-social-icon"
          ><FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

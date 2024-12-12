import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Osman Demir. Tüm hakları saklıdır.</p>
        <p>Web Developer | .NET, React, Firebase, Bootstrap, MS SQL</p>
      </div>
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/osmandemir2533/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="LinkedIn Logo" className="footer-logo" />
        </a>
        <a href="https://github.com/osmandemir2533" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub Logo" className="footer-logo footer-logo-github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

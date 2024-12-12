import React from "react";
import "./Communication.css";

const Communication = () => {
  return (
    <div className="contact-page">
      <h1>İletişim</h1><br />
      <h2><strong>OSMAN DEMİR</strong></h2>
      <p>
        Ben Erzurum Teknik Üniversitesi Bilgisayar Mühendisliği son sınıf öğrencisiyim. Web, .NET, React, Firebase, Bootstrap, MS SQL gibi teknolojilerle uğraşıyorum. LinkedIn ve GitHub hesaplarımı inceleyip iletişime geçebilirsiniz.
      </p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/osmandemir2533/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="LinkedIn Logo" className="social-logo" />
        </a>
        <a href="https://github.com/osmandemir2533" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub Logo" className="social-logo-git" />
        </a>
      </div>
      <div className="gif">
      <img src="/logo2.gif" alt="Gif" />
      </div>
    </div>
    
    
  );
};

export default Communication;

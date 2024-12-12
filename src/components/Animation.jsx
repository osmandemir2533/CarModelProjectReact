import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Animation.css";

const Animation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 4.2 saniye sonra ana sayfaya yönlendir
    const timer = setTimeout(() => {
      navigate("/home");
    }, 4180);

    // Temizleme işlemi
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="animation-container">
      <img src="/animation.gif" alt="Loading Animation" className="animation-gif" />
    </div>
  );
};

export default Animation;

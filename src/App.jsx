import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Communication from "./pages/Communication";
import Footer from "./components/Footer";
import Animation from "./components/Animation";
import "./App.css";

const App = () => {
  return (
    <Router> {/* BrowserRouter'ı burada sarmalıyoruz */}
      <Routes>
        <Route path="/" element={<Animation />} /> {/* Animation bileşeni varsayılan rota */}
        <Route path="/home" element={<><Navbar /><HomePage /><Footer /></>} /> {/* HomePage Navbar ve Footer ile */}
        <Route path="/about" element={<><Navbar /><AboutPage /><Footer /></>} />
        <Route path="/communication" element={<><Navbar /><Communication /><Footer /></>} />
      </Routes>
    </Router>
  );
};

export default App;

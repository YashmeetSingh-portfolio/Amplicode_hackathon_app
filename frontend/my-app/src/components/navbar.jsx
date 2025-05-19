
import React from 'react';
import { BrainCog } from 'lucide-react';
import '../styles/navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <BrainCog size={28} color="#7f5af0" />
        <span className="navbar-title">CodeMind AI</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Explain</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="navbar-btn">Try AI</button>
    </nav>
  );
};

export default Navbar;

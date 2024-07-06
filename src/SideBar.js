

// src/Sidebar.js
import React from 'react';
import './Sidebar.css'; // We'll create this file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Convey.</h1>
      <h2>Get started</h2>
      <div style={{ paddingTop: '2.5px' }}>
        <ul className="fade-in-list">
          <li><a href="#home">Topicals</a></li>
          <li><a href="#services">Camry cars</a></li>
          <li><a href="#about">Elephant</a></li>
          <li><a href="#contact">Microsoft</a></li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <div className="circle"></div>
        <p className="footer-text">Portfolio Link</p>
      </div>
    </div>

  );
};

export default Sidebar;



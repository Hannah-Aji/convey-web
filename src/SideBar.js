

// src/Sidebar.js
import React from 'react';
import './Sidebar.css'; // We'll create this file for styling
import 'font-awesome/css/font-awesome.min.css';




const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Convey.</h1>
      <h2>Get started</h2>
      <div style={{ paddingTop: '2.5px' }}>
        <ul className="fade-in-list">
          <li><a href="#home">Mykonos, Greece</a></li>
          <li><a href="#services">Lagos, Nigeria</a></li>
          <li><a href="#about">Dublin, Ireland</a></li>
          <li><a href="#contact">Bristol, England</a></li>
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



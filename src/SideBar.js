

// src/Sidebar.js
import React from 'react';
import './Sidebar.css'; // We'll create this file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>CONVEY</h1>
    </div>
  );
};

export default Sidebar;


/*
import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <h2 style={{
          fontFamily: 'Fraunces, serif',
          fontStyle: 'normal',
          fontSize: '20pt',
          fontWeight: '600',
          color: '#fefef1'
        }}>Convey.</h2>
        <div style={{ paddingTop: '17.5px' }}>
        </div>
        <h4 style={{
          fontFamily: 'Fraunces, serif',
          fontStyle: 'normal',
          fontSize: '14pt',
          fontWeight: '400',
          color: '#fefef1'
        }}>For you</h4>
        
        <div style={{ paddingTop: '2.5px' }}>
        </div>

        <ul className="fade-in-list">
          <li><a href="#home">Topicals</a></li>
          <li><a href="#services">Camry cars</a></li>
          <li><a href="#about">Elephant</a></li>
          <li><a href="#contact">Microsoft</a></li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <button style={{
          paddingLeft: '10px',
          paddingRight: '18px',
          paddingTop: '0px',
          paddingBottom: '0px',
          marginBottom: '32px',
          borderRadius: '32px',
          backgroundColor: '#575757',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div className="round-container"></div>
          <p style={{
            fontFamily: 'Fraunces, serif',
            fontStyle: 'normal',
            fontSize: '11pt',
            fontWeight: '300',
            fontVariationSettings: 'opsz auto'
          }}>
            Portfolio link
          </p>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
*/
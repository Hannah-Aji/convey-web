
// src/App.js
import React from 'react';
import Sidebar from './SideBar';
import SearchBar from './SearchBar';
import './App.css';



const App = () => {
  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Add your search logic here
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <div className="header">
          <div className="test"></div>
        </div>
        <div className="body-content">
          <h2>Welcome to Convey</h2>
          <p>This is the main content area.</p>
          <div style={{ paddingTop: '10px' }}></div>
          <p style={{
            fontFamily: 'Fraunces, serif',
            fontStyle: 'normal',
            fontSize: '13pt',
            fontWeight: '300',
            fontVariationSettings: 'opsz auto',
            color: 'black'
          }}>
            Following Bubble Boy, Gyllenhaal starred opposite Dustin Hoffman, Susan Sarandon and Ellen Pompeo in Moonlight Mile (2002), as a young man coping with the death of his fiancée and the grief of her parents. The story, which received mixed reviews, is loosely based on writer-director Brad Silberling's personal experiences following the murder of his girlfriend, Rebecca Schaeffer.
          </p>
          <div style={{ paddingTop: '50px' }}></div>
          <button type="button" className="btn" onClick={handlePulse}><i className="fa fa-close"></i>New Search</button>
        </div>
      </div>
    </div>
  );
};

const handlePulse = (event) => {
  const button = event.currentTarget;
  button.classList.add('pulse');
  setTimeout(() => {
    button.classList.remove('pulse');
  }, 500);
};

export default App;





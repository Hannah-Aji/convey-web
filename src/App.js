
// src/App.js
import React, { useState } from 'react';
import Sidebar from './SideBar';
import SearchBar from './SearchBar'; 
import FloatingButton from './FloatingButton';
import './App.css';



const App = () => {

  const [showContent, setShowContent] = useState(true);

  const handleSearchBarButtonClick = () => {
    setShowContent(true); // Show the content
  };

  const handleNewSearch = () => {
    setShowContent(false); // Hide the content
    console.log('New search triggered'); // Replace with actual logic
  };

  // Define the main content to display based on showContent
  const mainContent = showContent ? (
    <div className="body-content">
      <h2>Welcome to Convey</h2>
      <p>This is the main content area.</p>
      <div style={{ paddingTop: '10px' }}>
        <p>
          Following Bubble Boy, Gyllenhaal starred opposite Dustin Hoffman, Susan Sarandon and Ellen Pompeo in Moonlight Mile (2002), as a young man coping with the death of his fiancée and the grief of her parents. The story, which received mixed reviews, is loosely based on writer-director Brad Silberling's personal experiences following the murder of his girlfriend, Rebecca Schaeffer.
        </p>
      </div>
    </div>
  ) : null;

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <div className="header">
          <SearchBar onClick={handleSearchBarButtonClick} />
        </div>
        
        {mainContent}

        <FloatingButton onClick={handleNewSearch} />
      </div>
    </div>
  );
};


export default App;





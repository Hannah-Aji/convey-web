import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Sidebar from './SideBar';
import Timeline from './timeline';

function App() {
  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Add your search logic here
  };

  return (
    <div className="App">
      <header className="app-bar">
        <div id="root"></div>
        <SearchBar onSearch={handleSearch} />
      </header>
      <div className="container">
        <Sidebar />
        <main className="content">
          <h1 style={{
            fontFamily: 'Fraunces, serif',
            fontStyle: 'normal',
            fontSize: '12.5pt',
            fontWeight: '400',
            color: '#333'
          }}>
            Showing all events for "Toyota from 06/2044 to 07/2045"
          </h1>
          <div style={{ marginBottom: '30px' }}></div>
          
          <Timeline />
          <div style={{ paddingTop: '50px' }}></div>
          <button type="button" className="btn" onClick={handlePulse}><i className="fa fa-close"></i> Clear events</button>
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
        </main>
      </div>
    </div>
  );
}

const handlePulse = (event) => {
  const button = event.currentTarget;
  button.classList.add('pulse');
  setTimeout(() => {
    button.classList.remove('pulse');
  }, 500);
};

export default App;

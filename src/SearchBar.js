
import React, { useRef } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './SearchBar.css';


function SearchBar() {

  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    buttonRef.current.classList.add('pulse');
    setTimeout(() => {
      buttonRef.current.classList.remove('pulse');
    }, 1000); // 1000ms is the duration of the animation
  };

  return (
    <div className="search-bar">
      <input
         type="text"
        placeholder="Search for a city..."
      />
      <button
        ref={buttonRef}
        onClick={handleButtonClick}>
        <i className="fa fa-location-arrow"></i>
      </button>
    </div>
  );
}

export default SearchBar;

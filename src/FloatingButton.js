import React, { useRef } from 'react';
import './FloatingButton.css';

function FloatingButton({ onClick }) {
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    buttonRef.current.classList.add('pulse');
    setTimeout(() => {
      buttonRef.current.classList.remove('pulse');
    }, 1000); // 1000ms is the duration of the animation

    // Additional logic for button click action
    onClick(); // Invoke the onClick function passed as a prop
  };

  return (
    <button ref={buttonRef} className="floating-button" onClick={handleButtonClick}>
      <i class="fa fa-close"></i> Clear
    </button>
  );
}

export default FloatingButton;

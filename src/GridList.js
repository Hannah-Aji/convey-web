

import React from 'react';
import './GridList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faPaperclip, faUmbrella } from '@fortawesome/free-solid-svg-icons'; 

const GridList = () => {

    const items = [
        
        { icon: faPaperclip, title: 'A Nutshell', description: 'A European cultural magnet since the 1860s' },
        { icon: faBurger, title: 'Location', description: 'Description 2' },
        { icon: faPaperclip, title: 'Weather', description: 'Description 3' },
        { icon: faUmbrella, title: 'History', description: 'Description 4' },
        { icon: faPaperclip, title: 'Average Flight Price', description: 'Description 5' },
        { icon: faPaperclip, title: 'Eating Habits', description: 'Description 6' },
      ];

  return (
    <div className="grid-container">
      {items.map((item, index) => (
        <div className="grid-item" key={index}>
          
          <FontAwesomeIcon icon={item.icon} className="icon" />
          <div className="title">{item.title}</div>
          <div className="description">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default GridList;

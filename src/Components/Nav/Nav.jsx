import React, { useState } from 'react';
import { MdOutlineLightMode } from 'react-icons/md';
import './Nav.css';

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);

    // Toggle body class based on dark mode
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    }
  };

  return (
    <div className="navigation" style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}>
      <div className="logo">
        <h1 style={{ margin: '10px', fontFamily: 'henny penny', color: isDarkMode ? 'white' : 'black' }}>BlasPhemy</h1>
      </div>
      <div className="navigation-stuff" style={{ margin: '10px', fontSize: '40px' }}>
        <a href="#" onClick={handleClick}>
          <MdOutlineLightMode style={{ color: isDarkMode ? 'white' : 'black' }} />
        </a>
      </div>
    </div>
  );
};

export default Nav;

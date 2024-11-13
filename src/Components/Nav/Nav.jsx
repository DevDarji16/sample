import React, { useState } from 'react';
import { MdOutlineLightMode } from 'react-icons/md';
import './Nav.css';
import { FaMonument } from 'react-icons/fa';

const Nav = ({tscore,setTScore,setGame}) => {
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
  const handleBack=()=>{
    setGame(null)
  }

  return (
    <div className="navigation" style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}>
      <div className="logo">
       <a href="#" onClick={handleBack} style={{textDecoration:'none'}}>
       <h1 style={{ margin: '10px', fontFamily: 'henny penny', color: isDarkMode ? 'white' : 'black',userSelect:'none' }}>BlasPhemy</h1></a> 
      </div>
      <h1 style={{fontFamily:'monument'}}>Score:{tscore}</h1> 
      <div className="navigation-stuff" style={{ margin: '10px', fontSize: '40px' }}>
        
        <a href="#" onClick={handleClick}>
          <MdOutlineLightMode style={{ color: isDarkMode ? 'white' : 'black' }} />
        </a>
      </div>
    </div>
  );
};

export default Nav;

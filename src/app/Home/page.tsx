import React from 'react';
import '@/CSS_Navigation/Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/login">LOGIN</a></li>
        <li><a href="/states">STATES</a></li>
        <li><a href="/imagess">DOCS</a></li>
        <li><a href="/api" className="sale">PRODUCT</a></li>
      </ul>
    </nav>
    
  );
};

export default Navigation;

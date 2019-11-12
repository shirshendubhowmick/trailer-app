import React from 'react';
import './Header.module.css';

const Header = (props) => {
  return (
    <header styleName="container">
      <span styleName="logo-text">Movie Trailers</span>
      <span>Filter</span>
    </header>
  );
};

export default Header;

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Fundación Social</Link>
        </div>
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li className="menu-item" onClick={handleHamburgerClick}>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li className="menu-item" onClick={handleHamburgerClick}>
            <Link to="/aliados">Aliados</Link>
          </li>
          <li className="menu-item" onClick={handleHamburgerClick}>
            <Link to="/noticias">Noticias</Link>
          </li>
          <li className="menu-item" onClick={handleHamburgerClick}>
            <Link to="/galeria">Galería</Link>
          </li>
          <li className="menu-item" onClick={handleHamburgerClick}>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={handleHamburgerClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

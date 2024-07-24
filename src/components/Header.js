import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <img src='./logo_blanc-removebg.png' alt='logo cinéma'></img>

      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/films">Films</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            A propos <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6" /></svg>
            <ul className="dropdown">
              <li><Link to="/about/tarifs">Tarifs</Link></li>
              <li><Link to="/about/salle">La salle</Link></li>
              <li><Link to="/about/acces">Accès</Link></li>
            </ul>
          </li>
          </ul>
      </nav>
    </header>
  );
};

export default Header;
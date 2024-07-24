import React from 'react';
import './Footer.css'; // Ensure you create this CSS file
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h3>Divers</h3>
        <ul>
          <li>Mentions légales</li>
          <li>Politique de protection des données personnelles</li>
          <li>Conditions générales d’utilisation</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Plan du site</h3>
        <ul>
          <li><Link to='./'>Accueil</Link></li>
          <li><Link to='./films'>Films</Link></li>
          <li><Link to='./contact'>Contact</Link></li>
          <li><Link to='./propos'>A propos</Link></li>
          <li><Link to='/about/tarifs'>Tarifs</Link></li>
          <li><Link to='/about/salle'>La salle</Link></li>
          <li><Link to='/about/acces'>Accès</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Liens utiles</h3>
        <ul>
          <li><Link>Contactez-nous</Link></li>
          <li>
            <a href="https://www.facebook.com/CinemaOrbey/" target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.x.com/CinemaOrbey" target="_blank" rel="noopener noreferrer">
              <img src="twitter-icon.webp" alt="Twitter" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/cinemalecercle/" target="_blank" rel="noopener noreferrer">
              <img src="instagram-icon.webp" alt="Instagram" className="social-icon" />
            </a>
          </li>
        </ul>   
      </div>
    </div>
  );
};

export default Footer;

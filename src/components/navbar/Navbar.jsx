import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="/">Accueil</a></p>
          <p><a href="/#services">Services</a></p>
          <p><a href="/#blog">Evènements</a></p>
          <p><a href="/about">À propos</a></p>
          <p><a href="/contact">Nous contacter</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button">Réservation</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="/">Accueil</a></p>
            <p><a href="/#services">Services</a></p>
            <p><a href="/#blog">Evènements</a></p>
            <p><a href="/about">A propos</a></p>
            <p><a href="/contact">Contact</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <button type="button">Reservation</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

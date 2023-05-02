import React from 'react';
import gpt3Logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Situé à Yaoundé, à 3,1 km du stade Ahmadou Ahidjo, l’HOTEL VILLAGE NOAH CMR propose un restaurant, un bar et un jardin. Il propose un service d’étage et une terrasse. Il propose des animations en soirée et une réception ouverte 24h/24.</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Menu</h4>
        <p><a href="/#blog">Evènements</a></p>
        <p><a href="/about">A propos</a></p>
        <p><a href="/contact">Contact</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Réseaux sociaux</h4>
        <p><a href="https://www.facebook.com/profile.php?id=100076244461292&mibextid=LQQJ4d"><img src={facebook} alt="" width={25} /> Village Noah</a></p>
        <p><a href="https://instagram.com/village_noah?igshid=YmMyMTA2M2Y="><img src={instagram} alt="" width={25}/> Village Noah</a></p>
        <p><a href=""><img src={twitter} alt="" width={25}/> Village Noah</a></p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 Village Noah. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;

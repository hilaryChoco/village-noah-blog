import React from 'react';
import yannick from '../../assets/yannick.png';
import quotes from '../../assets/quotes.png'
import quote from '../../assets/quote.png'
import './about.css';

const About = () => (
  <div className="about" id="about">
    <div className='about__header'>
      <h1>À propos du Village Noah</h1>
    </div>
    <div className="gpt3__possibility">
      <div className="gpt3__possibility-image">
        <img src={yannick} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <img src={quotes} alt="" width={70} className='mb-3'/>
        <p>Tout le monde aimerait être traité comme à la maison à l'hôtel, et à la maison - comme dans un hôtel. L'hospitalité est une qualité faite de simplicité primitive et de grandeur antique.</p>
        <img className="last" src={quote} alt=""  width={70}/>
        <div className='autor'>
          <p>Yannick Noah</p>
          <small>Fondateur</small>
        </div>
      </div>
    </div>
  </div>
);

export default About;

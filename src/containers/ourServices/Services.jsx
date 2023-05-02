import React from 'react';
import './services.css';
import { useNavigate } from "react-router-dom";

const cardsData = [
  { id: 1, title: 'CARD 1', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/200' },
  { id: 2, title: 'CARD 2', content: 'Bruce Wayne', imgUrl: 'https://unsplash.it/201/200' },
  { id: 3, title: 'CARD 3', content: 'Peter Parker', imgUrl: 'https://unsplash.it/200/201' },
  { id: 4, title: 'CARD 4', content: 'Tony Stark', imgUrl: 'https://unsplash.it/201/201' },
  { id: 5, title: 'CARD 5', content: 'Reed Richards', imgUrl: 'https://unsplash.it/202/200' },
  { id: 6, title: 'CARD 6', content: 'Wade Wilson', imgUrl: 'https://unsplash.it/200/199' },
  { id: 7, title: 'CARD 7', content: 'Peter Quill', imgUrl: 'https://unsplash.it/199/199' },
  { id: 8, title: 'CARD 8', content: 'Steven Rogers', imgUrl: 'https://unsplash.it/199/200' },
  { id: 9, title: 'CARD 9', content: 'Bruce Banner', imgUrl: 'https://unsplash.it/200/198' },
  { id: 10, title: 'CARD 10', content: 'Vincent Strange', imgUrl: 'https://unsplash.it/198/199' },
];

const Card = ({ title, content, imgUrl }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={imgUrl} alt="Avatar" />
            <p>Piscine</p>
          </div>
          <div class="flip-card-back bg-success">
            <h1>Piscine</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quisquam asperiores magnam accusantium possimus ex ratione tenetur ipsum excepturi... </p> 
            <button className='btn btn-primary fs-5' 
              onClick={() => {navigate(`/services/2`); }}
            >Voir plus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => (
  <div className="service" id="services">
    <div className="container-fluid">
      <h1>
        Nos Services
      </h1>
      <p>Dans l'univers du Village Noah, nous vous proposons plusieurs services...</p>
      <div className="cards-container">
        {
          cardsData.map((card) => (
            <Card
              title={card.title}
              content={card.content}
              imgUrl={card.imgUrl}
            />
          ))
        }
      </div>
    </div>
  </div>
);

export default Services;

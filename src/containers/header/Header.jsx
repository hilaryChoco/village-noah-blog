import React, {useState } from 'react';
import { Slide } from 'react-slideshow-image';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import './header.css';
import image from '../../assets/image.jpg';
import nature2 from '../../assets/nature2.jpg';
import nature3 from '../../assets/nature3.jpg';
import 'react-slideshow-image/dist/styles.css';
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Modal, Button } from "react-bootstrap";
import video from "../../assets/video.mp4"

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="gpt3__header" id="home">
      <div className="gpt3__header-content">
        <Slide indicators className="slide-content">
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}>
              <h1>Bienvenue au Village Noah Yaoundé - Tongolo</h1>
              <span>Pendant vos pauses, vos week-ends, ... C'est le véritable endroit où il faut être</span>
              <button className="primaryBtn" type="button" data-bs-toggle="modal" href="#exampleModalToggle" onClick={handleShow}> 
                <AiOutlinePlayCircle color="#fff" size={27} style={{marginRight:10}}/>
                Regarder la vidéo de présentation
              </button>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${nature2})` }}>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing deleniti harum rem?</span>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${nature3})` }}>
              <span>Lorem, ipsum dolor, explicabo earum adipisci recusandae tenetur natus illo fugiat!</span>
            </div>
          </div>
        </Slide>
        <Modal show={show} onHide={handleClose} className='modal-xl'>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <video
              width="100%"
              height="100%"
              preload="metadata"
              controls="controls"
              autoPlay="true"
            >
              <source src={video} type="video/mp4" />
            </video>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Header;

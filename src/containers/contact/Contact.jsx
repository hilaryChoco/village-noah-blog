import React from 'react';
import './contact.css';

const Features = () => (
  <div className="contact" id="contact">
    <div className='contact__header'>
      <h1>Contactez le Village Noah</h1>
    </div>
    <div className="contact__infos">
      <div className="col-md-4">2</div>
      <div className="col-md-4">2</div>
      <div className="col-md-4">2</div>
      <div className="col-md-4">2</div>
      <div className="col-md-4">2</div>
      <div className="col-md-4">2</div>
    </div>
    <div className="contact__form">
      <p>Vous pouvez directement envoyer un mail au Village Noah en remplissant le formulaire ci-dessous</p>
      <div className="container">
        <form onSubmit>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Nom <span className='text-danger'>*</span>
                </label>
                <input className="form-control" type="text" id="name" required />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email <span className='text-danger'>*</span>
                </label>
                <input className="form-control" type="email" id="email" required />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message <span className='text-danger'>*</span>
                </label>
                <textarea className="form-control" id="message" rows={10} required />
              </div>
              <button className="btn btn-primary" type="submit">Envoyer
              </button>
        </form>
      </div>
    </div>
  </div>
);

export default Features;

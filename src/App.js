import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

import { Footer, About, Contact, ServicesDetails } from './containers';
import { Home, Navbar } from './components';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
  <div className="App">
    <div>
      <Navbar />
    </div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/services/:id" element={<ServicesDetails />} />
      </Routes>
    </Router>
    <Footer />
  </div>
);

export default App;

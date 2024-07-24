import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Movies from './Films';
import Header from './components/Header';
import Footer from './components/Footer'; 

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Movies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

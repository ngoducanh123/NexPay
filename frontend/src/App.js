import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Merchant from './pages/Merchant';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merchant" element={<Merchant />} />
      </Routes>
    </Router>
  );
}

export default App;
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/WojciechZ04' element={<Home />} />
          <Route path='/WojciechZ04/projects' element={<Projects />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;

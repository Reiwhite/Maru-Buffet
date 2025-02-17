import './App.css';
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
      <Router>
          <Routes>
            <Route path="/Maru-Buffet" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/MenuPage" element={<MenuPage />} />
          </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;

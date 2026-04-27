import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Gallery />
              <Contact />
            </>
          } />
        </Routes>
        <WhatsAppFAB />
      </div>
    </Router>
  );
}

export default App;

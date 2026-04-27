import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import InstagramFollow from './components/InstagramFollow';
import Membership from './components/Membership';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

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
              <InstagramFollow />
              <Membership />
              <Footer />
            </>
          } />
        </Routes>
        <MobileBottomNav />
      </div>
    </Router>
  );
}

export default App;

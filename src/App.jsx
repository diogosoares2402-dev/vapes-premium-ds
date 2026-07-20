import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import Catalog from './components/Catalog';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { products } from './data/products';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const catalogRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavigate = (section) => {
    setActiveSection(section);
    
    switch (section) {
      case 'home':
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'catalog':
        catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  const handleCatalogClick = () => {
    handleNavigate('catalog');
  };

  return (
    <div className="bg-dark-bg text-white overflow-x-hidden">
      <Navigation onNavigate={handleNavigate} activeSection={activeSection} />
      
      <main className="pt-20">
        {/* Home Section */}
        <div ref={homeRef}>
          <HeroSection onCatalogClick={handleCatalogClick} />
        </div>

        {/* Catalog Section */}
        <div ref={catalogRef}>
          <Catalog products={products} />
        </div>

        {/* About Section */}
        <div ref={aboutRef}>
          <About />
        </div>

        {/* Contact Section */}
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;

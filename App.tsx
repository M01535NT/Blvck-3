import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import PropertyDetail from './pages/PropertyDetail';
import { useScroll, motion, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="relative">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark origin-left z-[100] shadow-[0_0_10px_#bf953f]"
          style={{ scaleX }}
        />

        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
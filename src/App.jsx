import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import Sidebar from './components/Sidebar/sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Package from './components/Paket/package';
import Portofolio from './components/portofolio/Portofolio';

import Contact from './components/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import Refresh from './components/refresh/refresh';
import PackageMobile from './components/paketmobile/packagemobile';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Refresh />
      <Navbar />
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        {isMobile ? <PackageMobile /> : <Package />}
        <Portofolio />
        <Contact />
      </main>
    </>
  );
}

export default App;

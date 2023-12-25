import React, { useEffect, useState } from 'react';
import './home.css';
import Photo from '../../assets/roketcho.gif';
import HeaderSocials from './HeaderSocials';

import ScrollDown from './ScrollDown';

const Home = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const educationText = document.querySelector('.home__education');
    educationText.style.animation = 'none';
    setTimeout(() => {
      educationText.style.animation = 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite';
    }, 100);

    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Photo} alt="TeknoCraft Logo" className="home__img" />
        <h1 className="home__name">TeknoCraft.ID</h1>
        {isResponsive && <span className="responsive-text">TeknoCraft.ID</span>}
        <span className="home__education">Spesialis Jasa Pembuatan Website & Aplikasi </span>

        <HeaderSocials />

        <a href="#contact1" className="btn">
          Hubungi Kami!
        </a>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;

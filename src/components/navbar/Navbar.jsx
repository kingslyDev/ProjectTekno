// Navbar.jsx
import React, { useEffect, useState } from 'react';
import './navbar.css'; // Sesuaikan dengan path yang benar
import Logo from '../../assets/teknologicraft.png';

const Navbar = () => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const offset = 120;

      setIsNavbarTransparent(scrollPosition < offset);

      const sections = ['home', 'about', 'services', 'package', 'Portfolio', 'contact'];
      const adjustedScrollPosition = scrollPosition + offset;

      for (const section of sections) {
        const targetElement = document.getElementById(section);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          const offsetBottom = offsetTop + targetElement.offsetHeight;

          if (adjustedScrollPosition >= offsetTop && adjustedScrollPosition < offsetBottom) {
            document.querySelectorAll('.navbar__link').forEach((link) => {
              link.classList.remove('active');
            });

            document.querySelectorAll(`.navbar__link[href="#${section}"]`).forEach((link) => {
              link.classList.add('active');
            });
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isNavbarTransparent ? 'transparent' : ''}`}>
      <ul className="navbar__list">
        <li className="navbar__item navbar__logo">
          <a href="#home">
            <img src={Logo} alt="Logo" className="navbar__logo-img" />
          </a>
        </li>
        <li className="navbar__item">
          <a href="#home" className={`navbar__link ${isNavbarTransparent ? 'navbar__link--transparent' : ''} active`}>
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a href="#about" className={`navbar__link ${isNavbarTransparent ? 'navbar__link--transparent' : ''}`}>
            About
          </a>
        </li>
        <li className="navbar__item">
          <a href="#services" className={`navbar__link ${isNavbarTransparent ? 'navbar__link--transparent' : ''}`}>
            Services
          </a>
        </li>
        <li className="navbar__item navbar__dropdown">
          <a href="#package" className={`navbar__link ${isNavbarTransparent ? 'navbar__link--transparent' : ''}`}>
            Package
          </a>
        </li>
        <li className="navbar__item">
          <a href="#Portfolio" className={`navbar__link ${isNavbarTransparent ? 'navbar__link--transparent' : ''}`}>
            Portfolio
          </a>
        </li>
        <li className="navbar__item">
          <a href="#contact" className={`navbar__link ${isNavbarTransparent ? 'navbar__link--transparent' : ''}`}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

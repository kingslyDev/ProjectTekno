import React, { useState } from 'react';
import './sidebar.css';
import Logo from '../../assets/teknocraftid.svg';

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);

  const handleToggle = () => {
    showMenu(!toggle);
  };

  return (
    <>
      <aside className={`aside ${toggle ? 'show-menu' : ''}`}>
        <div>
          <nav className="nav">
            <ul className="nav__list">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link">
                    <i className="icon-home"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    <i className="icon-people"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#services" className="nav__link">
                    <i className="icon-briefcase"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#mobile" className="nav__link">
                    <i className="icon-tag"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#Portfolio" className="nav__link">
                    <i className="icon-layers"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    <i className="icon-bubble"></i>
                  </a>
                </li>
              </ul>
            </ul>
          </nav>
          <div className="nav__footer">
            <span className="copyright">@2023 TeknocraftID</span>
          </div>
        </div>
      </aside>

      <div className={`nav__toggle${toggle ? ' nav__toggle-open' : ''}`} onClick={handleToggle}>
        <i className={`icon-menu${toggle ? ' icon-menu-open' : ''}`}></i>
      </div>
    </>
  );
};

export default Sidebar;

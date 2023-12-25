import React from 'react';

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">1K+</h3>
          <span className="about__subtitle">Projek Selesai</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>

        <div>
          <h3 className="about__title">100+</h3>
          <span className="about__subtitle">Review Klien</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-organization"></i>

        <div>
          <h3 className="about__title">7</h3>
          <span className="about__subtitle">Mitra Kami</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;

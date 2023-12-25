import React, { useState, useEffect } from 'react';
import './services.css';
import Image1 from '../../assets/website-service.png';
import Image2 from '../../assets/mobile-service.png';
import Image3 from '../../assets/digitalmarketing-service.png';
import Image4 from '../../assets/server-service.png';

const data = [
  {
    id: 1,
    Image: Image1,
    title: 'Pembuatan Website',
    description: 'Maksimalkan potensi bisnis Anda dengan website profesional, desain kreatif, dan pengembangan responsif dari tim berpengalaman kami.',
  },
  {
    id: 2,
    Image: Image2,
    title: 'Pembuatan Aplikasi',
    description: 'Wujudkan ide Anda dengan membuat aplikasi mobile. Kami siap membantu dari awal hingga peluncuran dan dapat di Download pada Google Playstore / Appstore.',
  },
  {
    id: 3,
    Image: Image3,
    title: 'Digital Marketing',
    description: 'Optimalkan bisnis online Anda. Kami siap membantu anda dengan Layanan digital marketing kami berbasis data dan kreatif guna memperkuat visibilitas, dan sukseskan pemasaran Anda.',
  },
  {
    id: 4,
    Image: Image4,
    title: 'Cloud Hosting',
    description: 'Optimalkan website dengan layanan cloud hosting terbaik kami! Kecepatan, keandalan, dan skalabilitas terjamin. Aman, efisien, mendukung pertumbuhan bisnis digital Anda skala besar.',
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Layanan Kami</h2>

      <div className="services__container grid">
        {data.map(({ id, Image, title, description }) => (
          <div className="services__card" key={id}>
            <img src={Image} alt="" className="services__img" />
            <h3 className="section services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

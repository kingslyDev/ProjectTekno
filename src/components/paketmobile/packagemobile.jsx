import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './packagemobile.css'; // Sesuaikan dengan path struktur proyek Anda
import AppMobile from './aplikasimobile';
import Digital from '../digital/Digi';
import Pengadaan from '../Pengadaan/Pengadaan';

const KartuPaketWebsiteM = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sliderRef = useRef(null); // Referensi untuk slider Slick

  const handleScroll = () => {
    const packageSection = document.getElementById('package');
    const windowHeight = window.innerHeight;
    const packageSectionTop = packageSection.offsetTop;
    const packageSectionBottom = packageSectionTop + packageSection.offsetHeight;

    const isScrolledIntoView = window.scrollY + windowHeight > packageSectionTop && window.scrollY < packageSectionBottom;

    setShowSidebar(isScrolledIntoView);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const dataPaket = [
    {
      nama: 'Paket SiapOnline',
      deskripsi: 'Cocok untuk Website Portofolio & Blog',
      fitur: ['Unlimited Bandwidth', '100 Template Desain', 'Domain my.id', 'Hosting 1 Tahun', '12GB Penyimpanan', 'Sertifikat SSL', 'Responsive'],
      harga: 'Rp79.999',
      pesan: 'https://wa.me/6282331972019?text=Saya%20tertarik%20dengan%20paket%20pembuatan%20website%20siapOnline',
    },
    {
      nama: 'Paket UMKM',
      deskripsi: 'Sempurna untuk bisnis skala kecil',
      fitur: ['Unlimited Bandwidth', '200 Template Desain', 'Domain .Com', 'Hosting 1 Tahun', '1GB Penyimpanan', 'Sertifikat SSL', 'Dinamis (isi data)', 'Responsive'],
      harga: 'Rp279.000',
      pesan: 'https://wa.me/6282331972019?text=Saya%20tertarik%20dengan%20paket%20UMKM',
    },
    {
      nama: 'Paket Pro',
      deskripsi: 'Untuk website profesional dan toko online skala raksasa',
      fitur: ['Unlimited Bandwidth', 'Desain (Unlimited)', 'Domain Pilih', 'Hosting Lanjutan', '100GB Penyimpanan', 'Sertifikat SSL', 'Dukungan 24/7', 'Request Crud (API)', 'Responsive', 'IP dedicated'],
      harga: 'PRICE? CALL',
      pesan: 'https://wa.me/6282331972019?text=Saya%20tertarik%20dengan%20paket%20Pro',
    },
  ];

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="paket-container" id="mobile">
      <h2 className="paket-title">Paket Pembuatan Website</h2>

      <Slider ref={sliderRef} {...slickSettings}>
        {dataPaket.map((paket, index) => (
          <div className="kartu-paket" key={index}>
            <p className="swipe-indicator">Geser</p>
            <h2 className="paket-name">{paket.nama}</h2>
            <p className="paket-description">{paket.deskripsi}</p>
            <ul className="paket-features">
              {paket.fitur.map((fitur, indexFitur) => (
                <li key={indexFitur}>
                  <span className="feature-text">{fitur}</span>
                </li>
              ))}
            </ul>
            <p className="paket-price">{paket.harga}</p>
            <a href={paket.pesan} target="_blank" rel="noopener noreferrer" className="order-now-button">
              Pesan Sekarang
            </a>
          </div>
        ))}
      </Slider>
      <AppMobile />
      <Digital />
      <Pengadaan />
    </section>
  );
};

export default KartuPaketWebsiteM;

import React, { useState, useEffect } from 'react';
import './Package.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Pricing from '../pricing/Pricing';
import Digital from '../digital/Digi';
import Pengadaan from '../Pengadaan/Pengadaan';

const KartuPaketWebsite = () => {
  const [showSidebar, setShowSidebar] = useState(false);

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
      fitur: ['Unlimited Bandwidth', '100 Template Desain', 'Domain .Biz', 'Hosting 1 Tahun', '500MB Penyimpanan', 'Sertifikat SSL', 'Responsive'],
      harga: 'Rp79.999',
      pesan: 'https://wa.me/6282331972019?text=Saya%20tertarik%20dengan%20paket%20UMKM',
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

  return (
    <section className="package container" id="package">
      <h2 className="section__title">Paket Pembuatan Website</h2>

      <div className="paket-website">
        {dataPaket.map((paket, index) => (
          <div className="kartu-paket-website" key={index}>
            <h2 className="paket-title">{paket.nama}</h2>
            <p className="paket-description">{paket.deskripsi}</p>
            <ul className="paket-features">
              {paket.fitur.map((fitur, indexFitur) => (
                <li key={indexFitur}>
                  <span className="icon-text">{fitur}</span>
                  <i className="fas fa-check icon-check"></i>
                </li>
              ))}
            </ul>
            <p className="harga">{paket.harga}</p>
            <a href={paket.pesan} target="_blank" rel="noopener noreferrer" className="pesan-sekarang-button">
              Pesan Sekarang
            </a>
          </div>
        ))}
      </div>

      <Pricing />
      <Digital />
      <Pengadaan />
      {showSidebar && (
        <div className="sidebar">
          <ul>
            <li>
              <a href="#package">Pembuatan Website</a>
            </li>
            <li>
              <a href="#pricing">Pembuatan Aplikasi</a>
            </li>
            <li>
              <a href="#digital">Digital Marketing</a>
            </li>
            <li>
              <a href="#devkitp">Enterprise</a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default KartuPaketWebsite;

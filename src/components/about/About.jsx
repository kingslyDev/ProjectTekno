import React from 'react';
import './About.css';
import AboutImage from '../../assets/teknocrafti.png';
import AboutBox from './AboutBox';

const AboutComponent = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Tentang Kami</h2>

      <div className="about__container grid">
        <img src={AboutImage} alt="" className="about__img" />

        <div className="about__data">
          <div className="about__info">
            <p className="about__description">
              PT. TATA CIPTA INVOASINDO adalah perusahaan teknologi yang telah memberikan solusi inovatif di bidang IT selama 3 tahun. Dengan pengalaman operasional yang solid, kami telah berhasil menyediakan layanan terbaik dalam
              pengembangan website, aplikasi, serta pengadaan dan konfigurasi server.
            </p>
            <a href="#services" className="btn" download="TeknoCraft_Penawaran.pdf">
              Download Penawaran Kami
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Manifesto</h3>
                <span className="skills_number development">Kami senantiasa berkomitmen untuk menjadi mitra terpercaya dalam mendukung semua usaha memasuki era digitalisasi.</span>
              </div>

              <div className="skills__bar">
                <span className="skills percentage"></span>
              </div>
            </div>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Layanan Kami</h3>
                <span className="skills_number">
                  Layanan kami meliputi pengembangan website dan aplikasi skala UMKM hingga besar, serta penyediaan server dengan opsi sewa dan pembangunan. Kami hadir sebagai mitra jangka panjang, menawarkan solusi efisien dan inovatif
                  untuk mendukung perkembangan bisnis Anda. Percayakan pada kami untuk menjelajahi potensi tanpa batas di ranah teknologi.
                </span>
              </div>

              <div className="skills__bar">
                <span className="skills percentage"></span>
              </div>
            </div>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Kerjasama</h3>
                <span className="skills_number development">
                  Kami dengan senang hati membuka pintu kerjasama sebagai sub-pengembang. Bersama-sama, kita dapat menghadirkan solusi yang handal dan berkualitas tinggi. Jangan ragu untuk menghubungi kami dan mulailah kolaborasi yang
                  saling menguntungkan. Kami siap menjadi bagian dari kesuksesan proyek Anda.
                </span>
              </div>

              <div className="skills__bar">
                <span className="skills percentage"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default AboutComponent;

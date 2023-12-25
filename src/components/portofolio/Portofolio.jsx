import React from 'react';
import './portofolio.css';
import Photo1 from '../../assets/KEDAIPC.png';
import Photo2 from '../../assets/UPN-KPU-BEM.png';
import Photo3 from '../../assets/LATARDISKUSI.png';
import Photo4 from '../../assets/QINAR.png';
import Photo5 from '../../assets/CONSULTING.png';
import Photo6 from '../../assets/ROTATE.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PortfolioSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <section id="Portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-titleP">
          <h2>Portfolio</h2>
          <p>Beberapa layanan yang telah berhasil kami sediakan.</p>
        </div>

        <Slider {...settings}>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
              <img src={Photo2} className="img-fluid" alt="" />
            </div>
            <div className="portfolio-info">
              <h4>Website pemilihan BEM FH UPN</h4>
              <p>Website E-Voting</p>
              <a href={Photo2} data-gall="portfolioGallery" className="venobox preview-link" title="Web 3">
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
              <img src={Photo1} className="img-fluid" alt="" />
            </div>
            <div className="portfolio-info">
              <h4>Kedaipcid</h4>
              <p>Website E-Commerce Toko Komputer</p>
              <a href={Photo1} data-gall="portfolioGallery" className="venobox preview-link" title="Web 3">
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
              <img src={Photo3} className="img-fluid" alt="" />
            </div>
            <div className="portfolio-info">
              <h4>Latardiskusi</h4>
              <p>Web Online Course</p>
              <a href={Photo3} data-gall="portfolioGallery" className="venobox preview-link" title="Web 3">
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
              <img src={Photo4} className="img-fluid" alt="" />
            </div>
            <div className="portfolio-info">
              <h4>PT.Qinar Raya Mandiri</h4>
              <p>Pengadaan Komputer & Setting Jaringan</p>
              <a href={Photo4} data-gall="portfolioGallery" className="venobox preview-link" title="Web 3">
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
              <img src={Photo5} className="img-fluid" alt="" />
            </div>
            <div className="portfolio-info">
              <h4>Konsultasi Sistem Aplikasi Mobile</h4>
              <p>Mobile Security Apps</p>
              <a href={Photo5} data-gall="portfolioGallery" className="venobox preview-link" title="Web 3">
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
              <img src={Photo6} className="img-fluid" alt="" />
            </div>
            <div className="portfolio-info">
              <h4>CV. Electornics Persada Nusantara</h4>
              <p>Pengadaan Komputer Berserta Jaringan</p>
              <a href={Photo6} data-gall="portfolioGallery" className="venobox preview-link" title="Web 3">
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default PortfolioSection;

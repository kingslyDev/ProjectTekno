import React, { createRoot } from 'react';
import './pricing.css';
import Image1 from '../../assets/app1.png';
import Image2 from '../../assets/app2.png';
import Image3 from '../../assets/app3.png';

const pricingData = [
  {
    image: Image1,
    plan: 'Amatir',
    features: ['10 Template bebas pilih', 'Build hingga jadi .APP', 'Upload ke Google PlayStore'],
    support: 'portofolio / penawaran / app statis',
    price: '300.000',
    link: 'https://wa.me/6282331972019?text=Saya%20ingin%20konsultasi%20terkait%20pembuatan%20aplikasi%20paket%20AMATIR',
  },
  {
    image: Image2,
    plan: 'Profesional',
    features: ['30 Template bebas pilih', '3 Crud (API)', 'Hosting 1 Bulan', 'Domain database .COM ', 'Penyimpanan 12GB', 'Upload PlayStore'],
    support: 'Consign / Toko / Skincare',
    price: '2.729.000',
    link: 'https://wa.me/6282331972019?text=Saya%20tertarik%20dengan%20paket%20Profesional',
    best: true,
  },
  {
    image: Image3,
    plan: 'Enterprise / Jagoan',
    features: ['Free Desain Unlimited ', 'Unlimited Crud (API)', 'Hosting Lanjutan', 'Domain Database BEBAS', 'Penyimpanan 200GB', 'Upload PlayStore / Appstore'],
    support: 'Multitask',
    price: 'CALL',
    link: 'https://wa.me/6282331972019?text=Saya%20tertarik%20dengan%20paket%20Jagoan',
  },
];
function toggleOverlay() {
  const overlay = document.getElementById('pricingOverlay');
  overlay.classList.toggle('show');
}

const Pricing = () => {
  return (
    <section className="pricing container section" id="pricing">
      <h2 className="section__title">Pembuatan Aplikasi Mobile</h2>

      <div className="pricing__container grid">
        {pricingData.map((item, index) => (
          <div className={`pricing__item ${item.best ? 'best' : ''}`} key={index}>
            <img src={item.image} alt="" className="pricing__img" />
            <h3 className="pricing__plan">{item.plan}</h3>
            <ul className="pricing__features">
              {item.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>

            <h3 className="price">
              <em>Rp</em> {item.price}
            </h3>
            <a href={item.link} className="button">
              Konsultasi Sekarang
            </a>
            <p className="pricing__support">{item.support}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

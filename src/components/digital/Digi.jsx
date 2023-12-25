import React from 'react';
import '../digital/Digi.css';
import DigitalMarketingImage1 from '../../assets/digi1.png';
import DigitalMarketingImage2 from '../../assets/digi2.png';

const digitalMarketingData = [
  {
    image: DigitalMarketingImage1,
    plan: 'Digital Marketing Basic',
    features: ['Kelola Penuh Social Media', 'SEO Optimization', 'Ad Campaigns', 'Monthly Analytics', 'Full Social Media Package', 'SEO Optimization', 'Ad Campaigns', 'Monthly Analytics'],
    support: 'For Small Businesses',
    price: 'Start From Under 1JT',
    link: 'https://wa.me/628331972019?text=Saya%20tertarik%20lebih%20dalam%20mengenai%20paket%20Digital%20Basic',
  },
  {
    image: DigitalMarketingImage2,
    plan: 'Digital Marketing Pro',
    features: ['Kelola Penuh Social Media', 'SEO Optimization', 'Ad Campaigns', 'Monthly Analytics', 'Full Social Media Package', 'SEO Optimization', 'Ad Campaigns', 'Monthly Analytics', 'Free Data Analytics'],
    support: 'For Medium to Large Businesses',
    price: 'Start From 3JT',
    link: 'https://wa.me/628331972019?text=Saya%20tertarik%20lebih%20dalam%20mengenai%20paket%20PRO',
    best: true,
  },
];

const DigitalMarketingPricing = () => {
  return (
    <section className="digi container section2" id="digital">
      <h2 className="section__title">Paket Layanan Digital Marketing</h2>

      <div className="digi__container grid">
        {digitalMarketingData.map((item, index) => (
          <div className={`digi__item2 ${item.best ? 'best' : ''}`} key={index}>
            <img src={item.image} alt="" className="digi__img" />
            <h3 className="digi__plan2">{item.plan}</h3>
            <ul className="digi__features">
              {item.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={featureIndex >= 4 ? 'feature-multiline' : ''}>
                  <i className="fas fa-check icon-check"></i>
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="price2">{item.price}</h3>
            <a href={item.link} className="button2">
              Consult Now
            </a>
            <p className="digi__support2">{item.support}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalMarketingPricing;

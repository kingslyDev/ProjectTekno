import { createRoot } from 'react-dom/client';

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a href="https://www.instagram.com/teknocraftid/?hl=id" className="home__social-link" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>

      <a href="http://teknocraftid.my.id" className="home__social-link" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>

      <a href="https://api.whatsapp.com/send/?phone=6282331972019&text&type=phone_number&app_absent=0" className="home__social-link" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>

      <a href="http://teknocraftid.my.id" className="home__social-link" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-tiktok"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;

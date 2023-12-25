import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const ContactForm = () => {
  const form = useRef();
  const contactInfoSec = useRef();
  const mapSec = useRef();
  const mapInner = useRef();
  const [isInputFocused, setIsInputFocused] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yht9pji', 'template_isfohv4', form.current, 'iTR8WOOjZ-t8ariIz').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  const hideContactInfoSec = () => {
    if (window.innerWidth >= 768) {
      contactInfoSec.current.style.display = 'none';
    }
  };

  const showContactInfoSec = () => {
    contactInfoSec.current.style.display = 'block';
  };

  useEffect(() => {
    const inputs = form.current.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.addEventListener('click', hideContactInfoSec);
      input.addEventListener('blur', showContactInfoSec);
    });

    // Clean up event listeners on component unmount
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('click', hideContactInfoSec);
        input.removeEventListener('blur', showContactInfoSec);
      });
    };
  }, []);

  return (
    <section className="contact_us" id="contact">
      <div className="container">
        <div className="row">
          <div className="map_sec" ref={mapSec}>
            <div className="map_inner" ref={mapInner}>
              <h4>Temukan kami di Google Maps!</h4>
              <div className="map_bind">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0705534387766!2d112.72400837357266!3d-7.345974472263056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb5287000b97%3A0x4af4096683c25d42!2sJl.%20Dukuh%20Menanggal%20I%20No.28%20A%2C%20RT.002%2FRW.03%2C%20Dukuh%20Menanggal%2C%20Kec.%20Gayungan%2C%20Surabaya%2C%20Jawa%20Timur%2060234!5e0!3m2!1sid!2sid!4v1703496016485!5m2!1sid!2sid"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="contact_inner">
            <div className="contact_form_inner">
              <div className="contact_field">
                <h3>Contact Us</h3>
                <p>Hubungi kami kapanpun, kami usahakan untuk membalas anda secepat mungkin</p>
                <form ref={form} onSubmit={sendEmail}>
                  <input type="text" className="form-control form-group" placeholder="Name" name="user_name" onFocus={() => setIsInputFocused(true)} />
                  <input type="email" className="form-control form-group" placeholder="Email" name="user_email" onFocus={() => setIsInputFocused(true)} />
                  <input type="text" className="form-control form-group" placeholder="subject" name="subject" onFocus={() => setIsInputFocused(true)} />
                  <textarea className="form-control form-group" placeholder="message" name="message" onFocus={() => setIsInputFocused(true)}></textarea>
                  <button type="submit" className="contact_form_submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="contact_info_sec" id="contact1" ref={contactInfoSec}>
              <h4>Contact Info</h4>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-headset"></i>
                <span>+62-8233-3197-2019</span>
              </div>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-envelope-open-text"></i>
                <span>info@teknocraftid.com</span>
              </div>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-map-marked-alt"></i>
                <span>CV. TATA CIPTA INOVASINDO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

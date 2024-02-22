import './App.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS file

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="zoom-in">
      <section id="contact" className="contact-section">
        <div className="contact-links">
          <a href="https://www.instagram.com/isaiahiruoha/" target="_blank" className="btn contact-details"><i className="fab fa-instagram"></i> Instagram</a>
          <a id="profile-link" href="https://github.com/IsaiahIruoha" target="_blank" className="btn contact-details"><i className="fab fa-github"></i> GitHub</a>
          <a href="mailto:isaiahiruoha@gmail.com" className="btn contact-details"><i className="fas fa-at"></i> Email</a>
          <a href="https://www.linkedin.com/in/isaiahiruoha/" className="btn contact-details"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
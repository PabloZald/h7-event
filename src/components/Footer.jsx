import React from 'react';
import logoFooter from '../assets/logos-h7-blanco.png';
import ContactIcon from '../assets/contact-icon.png';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="mt-4 w-100">
      <div className="container text-center py-4">
        <img src={ContactIcon}  alt="Contact icon" className="icon-md mb-3" />

        {/* Línea Bicolor Personalizada */}
        <div className="d-flex mx-auto mb-3" style={{ width: '100%', maxWidth: '600px', height: '3px' }}>
          <div style={{ width: '75%', backgroundColor: '#0f4f88ff' }}></div>
          <div style={{ width: '25%', backgroundColor: '#db0032ff' }}></div>
        </div>

        <p className="mb-1">
          More information, please contact: <br />
          <strong>info@mroholdings.com</strong>
        </p>

        <a 
          href="https://wa.me/50378890790" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-decoration-none text-dark d-block mb-4"
        >
          <strong>WhatsApp</strong> <br />
          +503 7889 0790
        </a>
      </div>

      {/* Rectángulo Gris con Logos */}
      <div 
        className="d-flex align-items-center justify-content-center w-100" 
        style={{ backgroundColor: '#6d6e72ff', height: '100px' }}
      >
        <div className="d-flex gap-4">
          <NavLink className="" to="/">
            <img src={logoFooter}  alt="Logo Footer" className="me-2 logo" />
            </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
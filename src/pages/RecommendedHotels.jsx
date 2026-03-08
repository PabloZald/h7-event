import React from 'react';
import heroImage from '../assets/hotels-hero.jpg';
import Divider  from '../components/Divider';
import hyattImage from '../assets/hyatt.png';
import intercontinentalImage from '../assets/intercontinental.png';
import HiltonImage from '../assets/hilton.png';

const hotelsData = [
  {
    name: "Hyatt Centric San Salvador",
    description: "San Benito District, Approx. 50 min from SAL Airport.",
    link: "https://www.hyatt.com/hyatt-centric/salct-hyatt-centric-san-salvador",
    image: hyattImage
  },
  {
    name: "InterContinental San Salvador",
    description: "Metrocentro Area, Approx. 45 min from SAL Airport.",
    link: "https://www.intercontinental.com/hotels/us/en/find-hotels/hotel-search?fromRedirect=true&qSrt=sBR&glat=SEAR&qDest=San%20Salvador,%20El%20Salvador&setPMCookies=true&dp=true&gbraid=0AAAAAD4keY8Vgj68Tq8WwKh5ivmPT7COO&mktgvar=go_cmp-19640469545_adg-143037047262_ad-646719777115_kwd-326371357574_dev-c_ext-&showApp=false&gclid=Cj0KCQiA2bTNBhDjARIsAK89wlHQ3KSEaMO4VJQevwzY-jbTnI8o9Zn3Dfo9iumE04vI3-uFxOyAo3waAmAvEALw_wcB&cm_mmc=PDSEA-_-G_F-AMER_FS-MLAC_H-AMER_HS-SLV_IC_BSF_EXM_HOTEL-SSLHB_ES&srb_u=1&qRad=30&qRdU=mi",
    image: intercontinentalImage
  },
  {
    name: "Hilton San Salvador",
    description: "San Benito District, Approx. 50 min from SAL Airport.",
    link: "https://www.hilton.com/es/hotels/salsahh-hilton-san-salvador/",
    image: HiltonImage
  }
];

const Hotels = () => {
  return (
    <div>
        <section className="hero-section position-relative w-100 overflow-hidden">
        <img 
          src={heroImage} // 2. Usas la variable importada
          alt="Aeroman Hangar 7" 
          className="w-100 h-100"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="hero-gradient-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </section>
      <Divider /> 
        <div className="container py-3">
        <h1 className="display-4 fw-bold mb-5 text-uppercase text-center">HOTELS</h1>

        <div className="row">
            <div className="col-12 mx-auto" style={{ maxWidth: '900px' }}>
            {hotelsData.map((hotel, index) => (
              <div key={index} className="mb-5 pb-4">
                {/* Foto de 150px alto por ancho completo */}
                      <div className="w-100 overflow-hidden rounded mb-3" style={{ height: '200px' }}>
                          <img 
                          src={hotel.image} 
                          alt={hotel.name} 
                          className="w-100 h-100" 
                          style={{ objectFit: 'cover' }}
                          />
                      </div>
                    <div className="location-item py-3 ps-md-5 pe-3">
                      <div className="timeline">
                        <div className="line"></div>
                        <div className="arrow">⌄</div>
                      </div>
                      
                        {/* Información del Hotel */}
                        <div className="content">
                          <h3 className="fw-bold text-dark">{hotel.name}</h3>
                          <p className="text-muted my-2">{hotel.description}</p>
                          <a 
                              href={hotel.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="btn btn-sm btn-outline-primary"
                          >
                              Visit Website
                          </a>
                        </div>
                    </div>
              </div>
            ))}
            </div>
        </div>
        </div>
    </div>
  );
};

export default Hotels;
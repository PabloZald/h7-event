import React from 'react';
import heroImage from '../assets/discover-hero.png';
import Divider  from '../components/Divider';
import ZonaRosaImage from '../assets/zona-rosa.png';
import SurfCityImage from '../assets/surf-city.png';
import CentroHistoricoImage from '../assets/centro-historico.png';
import RutaDeLasFloresImage from '../assets/ruta-de-las-flores.png';


const placesData = [
  {
    name: "San Benito District",
    description: "Dining & Cultural Area, Located in the heart of San Salvador, San Benito is the city’s main gastronomic and cultural district, offering a vibrant selection of restaurants, cafés, galleries, and evening venues, as well as several of the city’s most renowned hotels and museums.",
    link: "https://www.hyatt.com/hyatt-centric/salct-hyatt-centric-san-salvador",
    image: ZonaRosaImage
  },
  {
    name: "San Salvador Historic Center",
    description: "Historic City Tour, Discover the recently revitalized Historic Center of San Salvador, featuring the National Palace, Metropolitan Cathedral, and vibrant cultural spaces that reflect the country’s history and identity.",
    link: "https://www.ihg.com/intercontinental/hotels/gb/en/san-salvador/ssvha/hoteldetail",
    image: CentroHistoricoImage
  },
  {
    name: "Surf City",
    description: "Pacific Coast, Located approximately 40 km from San Salvador (about 45 minutes by car), Surf City offers stunning Pacific Ocean views, iconic surf beaches, and a vibrant coastal atmosphere.",
    link: "https://www.hilton.com/es/hotels/salsahh-hilton-san-salvador/",
    image: SurfCityImage
  },
  {
    name: "Ruta de las Flores",
    description: "Coffee & Mountain Region, A scenic route located outside the capital, approximately 100 km from San Salvador (around 2–2.5 hours by car). This picturesque journey through charming towns and coffee plantations offers visitors the opportunity to experience El Salvador’s renowned coffee culture and mountain landscapes.",
    link: "https://www.hilton.com/es/hotels/salsahh-hilton-san-salvador/",
    image: RutaDeLasFloresImage
  }
];

const Discover = () => {
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
    <div className="row justify-content-center">
      <div className="col-12 col-md-9">
        <h1 className="display-4 fw-bold mb-5 text-uppercase text-center">DISCOVER <span className="text-nowrap">EL SALVADOR</span></h1>
        <h5 className="mb-5 text-dark">El Salvador offers a unique blend of culture, nature, and world-class hospitality. You may wish to explore some of the following highlights during your visit.</h5>

          {placesData.map((hotel, index) => (
            <div key={index} className="mb-5 pb-4">
              {/* Foto de 150px alto por ancho completo */}
                    <div className="w-100 overflow-hidden rounded mb-3">
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

export default Discover;
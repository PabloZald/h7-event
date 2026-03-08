import React from 'react';
import heroImage from '../assets/travel-hero.jpg';
import Divider  from '../components/Divider';
import ContactIcon from '../assets/contact-icon.png';
import TimeZone from '../assets/ceremony-start-icon.png';
import LocationIcon from '../assets/location-icon.png';
import TransportationIcon from '../assets/transportation-icon.png';
import WeatherIcon from '../assets/weather-icon.png';
import CashIcon from '../assets/cash-icon.png';
import OptionalFacilityIcon from '../assets/optional-facility-icon.png';

const Travel = () => {
  return (
    <div>
         <section className="hero-section position-relative w-100 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Aeroman Hangar 7" 
          className="w-100 h-100"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="hero-gradient-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </section>
      <Divider /> 
        <div className="container py-3">
          <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="row">
                    <div className="col-12">
                    {/* Primera Columna: Zona Horaria */}
                      <h1 className="display-4 text-center fw-bold mb-5 text-uppercase">TRAVEL INFORMATION</h1>
                    </div>

                    <div className="col-12 col-md-5 d-flex flex-column align-items-center text-center">
                      <div className="mb-3">
                      <img src={TimeZone}  alt="Contact icon" className="icon-md mb-3" />
                      </div>
                      <h5 className="fw-bold text-uppercase">TIME ZONE</h5>
                      <p className="text-muted" style={{ maxWidth: '350px' }}>
                          El Salvador operates on Central Standard Time (CST, UTC -6) year-round.
                      </p>
                    </div>

                    <div className="col-md-2">
                      <div className="timeline">
                          <div className="line"></div>
                          <div className="arrow">⌄</div>
                      </div>
                    </div>

                    {/* Segunda Columna: Clima / Información adicional (Estructura duplicada) */}
                    <div className="col-12 col-md-5 d-flex flex-column align-items-center text-center border-start-md">
                      <div className="mb-3">
                        <img src={LocationIcon}  alt="Contact icon" className="icon-md mb-3" />
                      </div>
                      <h5 className="fw-bold text-uppercase">ARRIVAL AIRPORT</h5>
                      <p className="text-muted" style={{ maxWidth: '350px' }}>
                        All international flights arrive at: <strong>Monseñor Óscar Arnulfo Romero International Airport (SAL)</strong>. 
                        The airport is located approximately <strong>40 minutes from San Salvador</strong>, where most recommended hotels are located.
                      </p>
                    </div>
                    
                    <div className="col-12 col-md-5 d-flex flex-column align-items-center text-center">
                      <div className="mb-3">
                      <img src={OptionalFacilityIcon}  alt="Contact icon" className="icon-md mb-3 mt-4" />
                      </div>
                      <h5 className="fw-bold text-uppercase">DISTANCES</h5>
                      <p className="text-muted" style={{ maxWidth: '350px' }}>
                        <strong>Airport → San Salvador</strong> (hotel area) Approx. 45-60 minutes. 
                      </p>
                      <p className="text-muted" style={{ maxWidth: '350px' }}>
                        <strong>Airport → Aeroman Facility</strong> Approx. 5 minutes.
                      </p>
                    </div>

                    <div className="col-md-2">
                      <div className="timeline">
                          <div className="line"></div>
                          <div className="arrow">⌄</div>
                      </div>
                    </div>

                    <div className="col-12 col-md-5 d-flex flex-column align-items-center text-center">
                      <div className="mb-3">
                      <img src={TransportationIcon}  alt="Contact icon" className="icon-md mb-3 mt-4" />
                      </div>
                      <h5 className="fw-bold text-uppercase">TRANSPORTATION</h5>
                      <p className="text-muted" style={{ maxWidth: '350px' }}>
                          Guests may use the following transportation options:
                          • Hotel transportation services
                          • Authorized airport taxis
                          • Car rental agencies available at
                          the airport
                          • Ride-hailing services
                          Additional transportation options will be shared here closer to the event date.
                      </p>
                    
                    </div>


                    <div className="col-12 col-md-5 d-flex flex-column align-items-center text-center">
                      <div className="mb-3">
                      <img src={WeatherIcon}  alt="Contact icon" className="icon-md mb-3 mt-4" />
                      </div>
                      <h5 className="fw-bold text-uppercase">WEATHER</h5>
                      <p className="text-muted" style={{ maxWidth: '350px' }}>
                      Average temperature this time of the year: <strong>35–40 °C</strong>
                      </p>
                    </div>

                    <div className="col-md-2">
                      <div className="timeline">
                          <div className="line"></div>
                          <div className="arrow">⌄</div>
                      </div>
                    </div>


                    <div className="col-12 col-md-5 d-flex flex-column align-items-center text-center">
                      <div className="mb-3">
                      <img src={CashIcon}  alt="Contact icon" className="icon-md mb-3 mt-4" />
                      </div>
                      <h5 className="fw-bold text-uppercase">CURRENCY</h5>
                      <p className="text-muted" style={{ maxWidth: '350px' }}>
                      El Salvador uses the <strong>U.S. Dollar (USD)</strong>.
                      </p>
                    </div>

                </div>
            </div>  
          </div>
        </div>
    </div>
  );
};

export default Travel;
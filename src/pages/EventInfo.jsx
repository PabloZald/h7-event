import React from 'react';
import heroImage from '../assets/event-info-hero.png';
import Divider  from '../components/Divider';
import HangarLines from '../assets/hangar-lines.png';
import CeremonyStartIcon from '../assets/ceremony-start-icon.png';
import OptionalFacilityIcon from '../assets/optional-facility-icon.png';
import DressCodeIcon from '../assets/dress-code-icon.png';
import DressCodeExample from '../assets/dress-code-example.png';
import ReceptionIcon from '../assets/reception-icon.png';
import { NavLink } from 'react-router-dom';
// import TransportationIcon from '../assets/transportation-icon.png';
// import WeatherIcon from '../assets/weather-icon.png';
// import CashIcon from '../assets/cash-icon.png';


const EventInfo = () => {
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
        <section className="py-3">
            <div className="row">
              <div className="col-12 text-center">
                {/* Título Principal */}
                <h1 className="display-4 fw-bold mb-3"></h1>
           
                {/* Ilustración de líneas grises (Placeholder) */}
                <div className="mb-4 d-flex justify-content-center">
                  <img src={HangarLines}  alt="Hangar Lines"   className="img-fluid"
                    />
                </div>
              </div>
            </div>


            <div className="container py-3">
              <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="row text-center">
                        <div className="col-12">
                        {/* Primera Columna: Zona Horaria */}
                          <h1 className="display-4  fw-bold mb-5 text-uppercase">EVENT INFO</h1>
                          
                            {/* Nombre de la facilidad */}
                            <h3 className="mb-4 text-dark fw-bolder">Aeroman Facility</h3>

                            {/* Información de ubicación */}
                            <div className="mt-4 mb-5">
                                <h5 className="mb-2 fw-normal">Monseñor Óscar Arnulfo Romero</h5>
                                <h5 className="mb-2 fw-normal">International Airport,</h5>
                                <h5 className="mb-0 fw-normal">Access 6, El Salvador.</h5>
                            </div>

                        </div>

                        <div className="col-12 col-md-5 d-flex flex-column align-items-center text-center">
                          <div className="mb-3">
                          <img src={CeremonyStartIcon}  alt="Ceremony icon" className="icon-md mb-3 mt-4 mt-sm-0" />
                          </div>
                          <h5 className="fw-bold text-uppercase">Ceremony Start</h5>
                          <p className="text-muted" style={{ maxWidth: '350px' }}>
                            4:30 PM We kindly recommend <strong>arriving early</strong> to allow sufficient time for airport security checkpoints and access procedures.
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
                            <img src={OptionalFacilityIcon}  alt="NotAllowed icon" className="icon-md mb-3 mt-4 mt-sm-0" />
                          </div>
                          <h5 className="fw-bold text-uppercase">Optional Facility Tours</h5>
                          <p className="text-muted mb-0" style={{ maxWidth: '350px' }}>
                              For guests interested in visiting our operations, <strong>guided Hangar tours</strong> will be available prior
                              to the ceremony at:
                          </p>
                            <ul className='text-muted'>
                              <li>3:00 PM</li>
                              <li> 3:30 PM</li>
                              <li>4:00 PM</li>
                            </ul>
                        </div>
                        
                        <div className="col-12 col-md-5 d-flex flex-column align-items-center text-center">
                          <div className="mb-3">
                          <img src={DressCodeIcon}  alt="Contact icon" className="icon-md mb-3 mt-4" />
                          </div>
                          <h5 className="fw-bold text-uppercase">Dress Code</h5>
                          <p className="text-muted mb-1" style={{ maxWidth: '350px' }}>
                               <strong>Cocktail Attire – Warm Climate</strong>
                          </p>
                          <p className="text-muted" style={{ maxWidth: '350px' }}>
                              With temperatures at the airport reaching approximately 35 °C, <strong>lightweight and breathable fabrics are recommended</strong>.
                          </p>
                          {/* Ilustración de líneas grises (Placeholder) */}
                          <div className="mb-4 d-flex justify-content-center">
                              <img src={DressCodeExample}  alt="Dress Code Example Lines"   className="img-fluid"
                                />
                            </div>
                        </div>

                        <div className="col-md-2">
                          <div className="timeline">
                              <div className="line"></div>
                              <div className="arrow">⌄</div>
                          </div>
                        </div>

                        <div className="col-12 col-md-5 d-flex flex-column align-items-center text-center">
                          <div className="mb-3">
                            <img src={ReceptionIcon}  alt="Contact icon" className="icon-md mb-3 mt-4" />
                          </div>
                            <h5 className="fw-bold text-uppercase">Reception</h5>
                            <p className="text-muted" style={{ maxWidth: '350px' }}>
                              A cocktail reception will follow the ceremony. We look forward to celebrating with you.
                            </p>
                        </div>
                        <div className="col">
                        <NavLink className="btn btn-primary btn-lg btn-border-radius px-5 mt-5" to="/access-requirements">See Access Requirements</NavLink>
                        </div>
                    </div>
                </div>  
              </div>
            </div>

        </section>
    </div>
  );
};

export default EventInfo;
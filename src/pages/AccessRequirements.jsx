import React from 'react';
import Divider  from '../components/Divider';
import InfoIcon from '../assets/info-icon.png';
import NotAllowedIcon from '../assets/not-allowed-icon.png';
import EnDocIcon from '../assets/en-doc-icon.png';
import EsDocIcon from '../assets/es-doc-icon.png';
import heroImage from '../assets/access-requirements-hero.png';

const AccessRequirements = () => {
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
        <div className="py-3">
            <div className="container">
                <h1 className="display-4 fw-bold mb-5 text-uppercase text-center">VISITOR ACCESS REQUIREMENTS</h1>

                <div className="row g-5">
                    {/* Primera Columna: Imagen (4 de 12 en MD+) */}
                    <div className="col-12 col-md-4">
                        <div className="rounded overflow-hidden shadow-sm">
                            <img 
                            src="https://images.unsplash.com/photo-1582801396492-705377f39876?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Security Protocol" 
                            className="img-fluid w-100"
                            style={{ minHeight: '400px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    {/* Segunda Columna: Contenido e Iconos (8 de 12 en MD+) */}
                    <div className="col-12 col-md-8">
                    
                    {/* Bloque 1: Identificación */}
                    <div className="mb-5">
                    <img src={InfoIcon}  alt="Contact icon" className="icon-md mb-3 me-3" />
                        <p className="text-muted lh-lg">
                        To ensure security and proper access control, all visitors are required to present a valid physical identification document upon arrival, either a DUI (for Salvadoran citizens) or a passport, as required by CEPA regulations. This document must be the same identification previously submitted as part of the access authorization process. If arriving by vehicle, visitors will also be required to present the corresponding vehicle registration card.
                        <br /><br />
                        As the event will take place within a restricted-access area of the airport, all visitors will be required to pass through security checkpoints prior to entering the facility.
                        </p>
                    </div>

                    {/* Bloque 2: Objetos Prohibidos */}
                    <div className="mb-5 p-4 bg-light rounded">
                        <img src={NotAllowedIcon}  alt="Contact icon" className="icon-md mb-3 me-3" />
                        <p className="fw-bold mb-2">Please also note that the following items are strictly prohibited within the facilities:</p>
                        <ul className="list-unstyled">
                        <li>• Sharp objects or cutting instruments</li>
                        <li>• Firearms</li>
                        <li>• Illegal substances</li>
                        <li>• Any other item considered dangerous or restricted under security policies</li>
                        </ul>
                        <p className="small mt-3">We kindly ask all guests to comply with these guidelines to help ensure a safe and orderly environment within the facilities.</p>
                    </div>

                    {/* Bloque 3: Formulario */}
                    <div className="mt-5">
                        <h5 className="fw-bold mb-4">Kindly complete the following Visitor Access Form prior to your arrival.</h5>
                        
                        <div className="row g-4">

                            {/* Versión Inglesa (Siguiendo el patrón) */}
                            <div className="col-12 col-md-4 d-flex align-items-center">
                            <img src={EnDocIcon}  alt="Contact icon" className="icon-md mb-3 me-3" />
                                <div>
                                <p className="mb-1 fw-bold">English version:</p>
                                <a href="https://icktx7d.onk2.com/Runtime/Runtime/Form/Visitors+forms+-+ENG/" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm btn-border-radius">
                                    Open Form
                                </a>
                                </div>
                            </div>

                            {/* Versión Española */}
                            <div className="col-12 col-md-4 d-flex align-items-center">
                                <img src={EsDocIcon}  alt="Contact icon" className="icon-md mb-3 me-3" />
                                <div>
                                <p className="mb-1 fw-bold">Spanish version:</p>
                                <a href="https://icktx7d.onk2.com/Runtime/Runtime/Form/Visitors+forms+-+SPA/" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm btn-border-radius">
                                    Open Form
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AccessRequirements;
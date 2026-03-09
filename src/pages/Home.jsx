import React from 'react';
import heroImage from '../assets/home-hero.jpg';
import  Divider  from '../components/Divider';
import  ImageCircleButton  from '../components/ImageCircleButton';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
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
    <div className="container">
      {/* Content Section */}
      <section className="py-3">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="display-4 fw-bold mb-3">WELCOME!</h1>
            <h3 className="text-secondary mb-2">
              To the Heart of Aviation maintenance in the Americas.
            </h3>
            
            <div className="mx-auto" style={{ maxWidth: '800px' }}>
              <p className="lead text-dark lh-base">
                We look forward to welcoming you to El Salvador as we celebrate the 
                inauguration of <strong>Hangar 7</strong> an important milestone in 
                Aeroman and MROH’s continued growth and in the region’s aviation 
                maintenance industry.
              </p>
            </div>
          </div>
        </div>
      </section>


 {/* CIRCULOS
      <div className="container py-2">
        <div className="row justify-content-center mb-n5">
          <div className="col-md-4 d-flex justify-content-center">
          <ImageCircleButton label="Event Info" to="/event-info" rotation={80} />
          </div>
          <div className="col-md-4 d-flex justify-content-center mt-4 mt-sm-0">
            <ImageCircleButton label="Travel" to="/travel" rotation={0} />
          </div>
          <div className="col-md-4 mt-4 mt-sm-0">
            <ImageCircleButton label="Hotels" to="/recommended-hotels" rotation={170} />
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-md-4 d-flex justify-content-center">
            <ImageCircleButton label="Discover" to="/discover" rotation={20} />
          </div>
          <div className="col-md-4 d-flex justify-content-center mt-4 mt-sm-0">
            <ImageCircleButton label="Q&A" to="/qa" rotation={150} />
          </div>
        </div>
      </div>
    */}

    </div>
    </div>
  );
};

export default Home;
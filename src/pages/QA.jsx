import React from 'react';

const qaData = [
  {
    id: "collapseOne",
    question: "What language will the event be conducted in?",
    answer: "The event will be conducted primarily in Spanish, with translation services available upon request."
  },
  {
    id: "collapseTwo",
    question: "Is photography allowed?",
    answer: "Photography will not be permitted within the facility due to security protocols applicable to restricted airport areas. A designated area will be available within the event space for photography, and guests are kindly asked to follow the guidance provided by event staff."
  },
  {
    id: "collapseThree",
    question: "What electrical outlets are used in El Salvador?",
    answer: "El Salvador uses Type A and Type B outlets, the same as those used in the United States, with 110V voltage."
  },
  {
    id: "collapseFour",
    question: "What is the weather like in April in El Salvador?",
    answer: "El Salvador has a tropical climate, with daytime temperatures typically ranging between 30–35 °C and occasionally reaching up to 40 °C. April is part of the dry season, so rainfall is generally limited, with most days being sunny and warm."
  },
  {
    id: "collapseFive",
    question: "Will security screening be required to access the facility?",
    answer: "Yes. As the event will take place within a restricted-access area of the airport, all guests will pass through security checkpoints prior to entering the facility."
  },
  {
    id: "collapseSix",
    question: "Is Wi-Fi widely available?",
    answer: "Yes, Wi-Fi is widely available in hotels, restaurants, and most business areas in San Salvador."
  }
];

const QA = () => {
  return (
    <div className="container py-5">
      
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
        <h1 className="display-4 fw-bold mb-5 text-uppercase text-center">Q&A</h1>
          <div className="accordion accordion-flush" id="accordionQA">
            {qaData.map((item, index) => (
              <div className="accordion-item border-bottom py-2" key={index}>
                <h2 className="accordion-header" id={`heading${item.id}`}>
                  <button 
                    className="accordion-button collapsed fw-bold bg-white text-dark shadow-none" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#${item.id}`} 
                    aria-expanded="false" 
                    aria-controls={item.id}
                  >
                    {item.question}
                  </button>
                </h2>
                <div 
                  id={item.id} 
                  className="accordion-collapse collapse" 
                  aria-labelledby={`heading${item.id}`} 
                  data-bs-parent="#accordionQA"
                >
                  <div className="accordion-body text-muted">
                    {item.answer}
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

export default QA;
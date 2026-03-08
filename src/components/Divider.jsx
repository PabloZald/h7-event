import React from 'react';


export const Divider = () => {
  return (
    <div>
      {/* Línea Bicolor Personalizada */}
      <div className="d-flex mx-auto" style={{ width: '100%', maxWidth: '600px', height: '3px' }}>
          <div style={{ width: '75%', backgroundColor: '#0f4f88ff' }}></div>
          <div style={{ width: '25%', backgroundColor: '#db0032ff' }}></div>
        </div>
    </div>
  );
};

export default Divider;
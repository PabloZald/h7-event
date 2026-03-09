import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ImageCircleButton= ({ label, rotation = 0, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
  };
  return (
    <button className="btn-custom-container" onClick={handleClick}>
      {/* Capa de la imagen que rota */}
      <div 
        className="bg-image" 
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      
      {/* Capa del texto que siempre se queda quieto */}
      <span className="btn-text">
        {label}
      </span>
    </button>
  );
};

export default ImageCircleButton;
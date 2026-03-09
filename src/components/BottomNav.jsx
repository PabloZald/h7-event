import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const BottomNav = () => {
  const menuItems = [
    
    { label: 'Info', to: '/event-info', icon: 'bi-info-circle' },
    { label: 'Access', to: '/access-requirements', icon: 'bi-shield-check' },
    { label: 'Travel', to: '/travel', icon: 'bi-airplane' },
    { label: 'Hotels', to: '/recommended-hotels', icon: 'bi-building' },
    { label: 'Discover', to: '/discover', icon: 'bi-compass' },
    { label: 'Q&A', to: '/qa', icon: 'bi-patch-question' },
  ];

  return (
    <nav className="bottom-nav d-lg-none"> {/* Se oculta en pantallas grandes (Desktop) */}
      {menuItems.map((item, index) => (
        <NavLink 
          key={index} 
          to={item.to} 
          className={({ isActive }) => `bottom-nav-link ${isActive ? 'active' : ''}`}
        >
          <i className={`bi ${item.icon} nav-icon`}></i>
          <span className="nav-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
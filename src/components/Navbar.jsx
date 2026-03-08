import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logos-h7-color.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top py-3">
      <div className="container">
        {/* Logos */}
        <div className="navbar-brand d-flex align-items-center">
          <NavLink className="" to="/">
            <img src={logo}  alt="Logo 1" className="me-2 logo" />
          </NavLink>
        </div>

        {/* Toggle para móviles */}
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navAero">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="navAero">
          <ul className="navbar-nav ms-auto mt-3 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link px-3 pb-2 text-uppercase fw-bold" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 pb-2 text-uppercase fw-bold" to="/event-info">Event Info</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 pb-2 text-uppercase fw-bold" to="/access-requirements">Access Requirements</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 pb-2 text-uppercase fw-bold" to="/travel">Travel</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 pb-2 text-uppercase fw-bold" to="/recommended-hotels">Hotels</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 pb-2 text-uppercase fw-bold" to="/discover">Discover</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 pb-2 text-uppercase fw-bold" to="/qa">Q&A</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
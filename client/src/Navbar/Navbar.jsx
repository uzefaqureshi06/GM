import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="logo">
       <img src="https://res.cloudinary.com/dxqt7tfgl/image/upload/v1728989166/Uzefa/molrfjlnaneg5mdqmq0u.png"/>
      </div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/programs">Programs</NavLink></li>
        <li><NavLink to="/trainers">Trainers</NavLink></li>
        <li><NavLink to="/STORE">store</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/category">Category</NavLink></li>
      </ul>
    
    </nav>
  );
};

export default Navbar;

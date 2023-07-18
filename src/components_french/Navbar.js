import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar_french() {


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link className='navbar-logo' activeClass="active" smooth spy to="home">
            OPEN DEV
            <i class="fa-solid fa-laptop-code"></i>
          </Link>
          <ul className={'nav-menu active'}>
            <li className='nav-item'>
              <Link className='nav-links' activeClass="active" smooth spy to="about">
                À Propos
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-links' activeClass="active" smooth spy to="projects"
              >
                Projets
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                activeClass="active" smooth spy to="learn"
              >
                Apprentissage
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                activeClass="active" smooth spy to="contact"
              >
                Contactez-Nous
              </Link>
            </li>

          </ul>
          <Link
            className='btn--outline'
            activeClass="active" smooth spy to="volunteer"
          >
            Volontaire
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar_french;

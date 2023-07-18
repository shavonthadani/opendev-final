import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {

  return (
    <>
      <nav className='navbar' aria-label='Main Navigation' role="navigation">
        <div className='navbar-container'>
          <Link className='navbar-logo' activeClass="active" smooth spy to="home" aria-label="Home">
            OPEN DEV
            <i className="fa-solid fa-laptop-code"></i>
          </Link>
          <ul className={'nav-menu active'} role="menu">
            <li className='nav-item' role="presentation">
              <Link className='nav-links' activeClass="active" smooth spy to="about" aria-label="About Us" role="menuitem">
                About Us
              </Link>
            </li>
            <li className='nav-item' role="presentation">
              <Link className='nav-links' activeClass="active" smooth spy to="projects" aria-label="Projects" role="menuitem">
                Projects
              </Link>
            </li>
            <li className='nav-item' role="presentation">
              <Link
                className='nav-links'
                activeClass="active" smooth spy to="learn" aria-label="Learning" role="menuitem"
              >
                Learning
              </Link>
            </li>
            <li className='nav-item' role="presentation">
              <Link
                className='nav-links'
                activeClass="active" smooth spy to="contact" aria-label="Contact Us" role="menuitem"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <Link
            className='btn--outline'
            activeClass="active" smooth spy to="volunteer" aria-label="Volunteer"
          >
            Volunteer
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

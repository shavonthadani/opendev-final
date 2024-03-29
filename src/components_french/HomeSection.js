import React, { useState } from 'react';
import '../App.css';
import './HomeSection.css';
import BackgroundImage from '../images/img-home.jpg'

function HomeSection_french() {
  const handleClickScroll = () => {
    const element = document.getElementById('volunteer');
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="hero-container" style={{ background: `url(${BackgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', }}>
        <h1 className='title'>OPEN DEV<i class="fa-solid fa-laptop-code"></i></h1>
        
        <p>Code source ouvert, Esprits ouverts, Portes Ouvertes</p>
        <div className="hero-btns">
          <button className="btn btn-scroll btn-lg btn-light w3-border-teal" onClick={handleClickScroll}>
            Devenez bénévole aujourd'hui
          </button>
        </div>
        <div className="w3-row-padding w3-center" style={{ marginTop: 64 }}>
          <div className="w3-quarter" style={{ color: 'white' }}>
            <i className="fa-solid fa-people-group w3-margin-bottom w3-center" />
            <p className="w3-large">Contributeurs Actifs: 2,500</p>
          </div>
          <div className="w3-quarter" style={{ color: 'white' }}>
            <i class="fa-solid fa-pen-ruler w3-margin-bottom w3-center"></i>
            <p className="w3-large">Total des Projets:<br />105</p>
          </div>
          <div className="w3-quarter" style={{ color: 'white' }}>
            <i className="fa-solid fa-code-branch w3-margin-bottom" />
            <p className="w3-large">Pull Requests:<br />50,000</p>
          </div>
          <div className="w3-quarter" style={{ color: 'white' }}>
            <i className="fa-solid fa-bug w3-margin-bottom" />
            <p className="w3-large">Problèmes Résolus: 175,000</p>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default HomeSection_french;

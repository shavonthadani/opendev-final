import React from 'react';
import './AboutSection.css';

function AboutSection_french() {
  return (
    <div className="w3-container " style={{ padding: "1px 1px" }} id="about">
      <div className="w3-row-padding w3-center" style={{ marginTop: 64 }}>
        <div class="w3-padding-16"><span class="w3-xlarge subtitle">À Propos de Nous</span></div>

        <div className="w3-quarter ">
          <i className="fa-solid fa-people-group w3-margin-bottom w3-jumbo w3-center" />
          <p className="w3-large">Communauté</p>
          <p>
            Nous sommes une communauté de développeurs qui créent des logiciels open source pour le bien commun
          </p>
        </div>

        <div className="w3-quarter">
          <i className="fa fa-heart w3-margin-bottom w3-jumbo" />
          <p className="w3-large">Passion</p>
          <p>
            Sur notre plateforme, nous nous efforçons de vous connecter à des projets qui correspondent à vos passions et intérêts
          </p>
        </div>

        <div className="w3-quarter">
          <i className="fa-solid fa-book w3-margin-bottom w3-jumbo" />
          <p className="w3-large">Éduquer</p>
          <p>
            Nous proposons une multitude de ressources pour vous aider à commencer votre parcours de développement de logiciels
          </p>
        </div>

        <div className="w3-quarter">
          <i className="fa-solid fa-brain w3-margin-bottom w3-jumbo" />
          <p className="w3-large">Se renseigner</p>
          <p>Nous nous efforçons d'être une force motrice derrière les solutions transformatrices qui façonneront un meilleur avenir pour tous</p>
        </div>

      </div>
    </div>
  );
}

export default AboutSection_french;

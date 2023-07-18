import React, { useEffect } from 'react';
import './ProjectSection.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function ProjectSection_french() {
  const notify1 = () => toast.success("Rejoint");
  useEffect(() => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const items = document.getElementById('items').querySelectorAll('li');

    function filterItems() {
      const selectedOptions = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

      items.forEach(item => {
        if (selectedOptions.length === 0 || selectedOptions.includes(item.classList[0])) {
          item.classList.add('show');
        } else {
          item.classList.remove('show');
        }
      });
    }

    // Check initial state of checkboxes
    filterItems();

    checkboxes.forEach(checkbox => checkbox.addEventListener('change', filterItems));

    return () => {
      checkboxes.forEach(checkbox => checkbox.removeEventListener('change', filterItems));
    };
  }, []);

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="w3-row-padding w3-center" style={{ marginTop: 64 }}>
        <div className="w3-padding-16">
          <span className="w3-xlarge subtitle">Projets Actifs</span>
        </div>
      </div>

      <div className="card">
        <div className="filter-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <input type="checkbox" id="health" defaultValue="health" />
            <label htmlFor="health">Santé et Bien-être</label>
          </div>
          <div>
            <input type="checkbox" id="education" defaultValue="education" />
            <label htmlFor="education">Éducation</label>
          </div>
          <div>
            <input type="checkbox" id="environment" defaultValue="environment" />
            <label htmlFor="environment">Environnement</label>
          </div>
          <div>
            <input type="checkbox" id="accessibility" defaultValue="accessibility" />
            <label htmlFor="accessibility">Accessibilité</label>
          </div>
          <div>
            <input type="checkbox" id="social-justice" defaultValue="social-justice" />
            <label htmlFor="social-justice">Justice sociale</label>
          </div>
        </div>
      </div>

      <div id="items" className="w3-row-padding w3-center">
        <ul className="grid-list">
          <li className="health grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/chatbot.jpg")} alt="John" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Chatbot de Santé</h3>
                <p className="w3-opacity">Santé et Bien-être</p>
                <p>Développez un chatbot alimenté par l'IA qui fournit des informations de santé personnalisées, une évaluation des symptômes et des recommandations.</p>
                <p><button className="w3-button w3-light-grey w3-block" onClick={notify1}>Rejoindre</button></p>
                <br></br>
              </div>
            </div>
          </li>

          <li className="health grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/telehealth.jpg")} alt="John" style={{ width: '100%', borderRadius: '2.5%' }} ></img>
              <div className="w3-container">
                <h3>Plateforme de Télésanté</h3>
                <p className="w3-opacity">Santé et Bien-être</p>
                <p>Créez une plateforme de télésanté open-source qui permet des consultations à distance entre les prestataires de soins de santé et les patients.</p>
                <p><button className="w3-button w3-light-grey w3-block" style={{ borderRadius: '2.5%' }} onClick={notify1}>Rejoindre</button></p>
                <br></br>
              </div>
            </div>
          </li>

          <li className="health grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/wellness-app.jpg")} alt="John" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Application Bien-être</h3>
                <p className="w3-opacity">Santé et Bien-être</p>
                <p>Développez une application mobile qui propose des fonctionnalités pour suivre les activités, fixer des objectifs et accéder à des ressources de bien-être.</p>
                <p><button className="w3-button w3-light-grey w3-block" onClick={notify1}>Rejoindre</button></p>
                <br></br>
              </div>
            </div>
          </li>

          <li className="health grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/fitness-tracker.jpg")} alt="John" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Suivi de Fitness</h3>
                <p className="w3-opacity">Santé et Bien-être</p>
                <p>Créez un suivi de fitness sur le Web ou sur mobile qui permet aux utilisateurs de surveiller leurs activités physiques, de fixer des objectifs de fitness et de suivre leurs progrès.</p>
                <p><button className="w3-button w3-light-grey w3-block" onClick={notify1}>Rejoindre</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="health grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/meditation-app.jpg")} alt="John" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Application de Méditation</h3>
                <p className="w3-opacity">Santé et Bien-être</p>
                <p>Créez une application de méditation qui offre des séances de méditation guidées, des techniques de relaxation et des ressources pour le bien-être mental.</p>
                <p><button className="w3-button w3-light-grey w3-block" onClick={notify1}>Rejoindre</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="education grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/online-learning.jpg")} alt="Formation en ligne" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Plateforme d'E-Learning</h3>
                <p className="w3-opacity">Éducation</p>
                <p>Créez une plateforme d'apprentissage en ligne interactive qui propose des cours STEM spécialisés sur divers sujets avec des quiz et des certificats.</p>
                <p><button className="w3-button w3-light-grey w3-block" onClick={notify1}>Rejoindre</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="education grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/virtual-reality.jpg")} alt="Réalité Virtuelle" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Apprentissage en Réalité Virtuelle</h3>
                <p className="w3-opacity">Éducation</p>
                <p>Développez une plateforme d'apprentissage en réalité virtuelle qui offre des expériences éducatives immersives dans diverses matières.</p>
                <p><button className="w3-button w3-light-grey w3-block" style={{ borderRadius: '2.5%' }} onClick={notify1}>Rejoindre</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="environment grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/climate-app.jpg")} alt="Application Climatique" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Application de Surveillance du Changement Climatique</h3>
                <p className="w3-opacity">Environnement</p>
                <p>Développez une application mobile ou Web qui fournit des données en temps réel sur le changement climatique, des ressources éducatives et des conseils pour une vie durable.</p>
                <p><button className="w3-button w3-light-grey w3-block" onClick={notify1}>Rejoindre</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="environment grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/sustainable-ecommerce.jpg")} alt="Ecommerce Durable" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Plateforme Ecommerce Durable</h3>
                <p className="w3-opacity">Environnement</p>
                <p>Créez une place de marché en ligne pour des produits éco-responsables, promouvez des pratiques durables et fournissez une plateforme pour les vendeurs respectueux de l'environnement.</p>
                <p><button className="w3-button w3-light-grey w3-block" style={{ borderRadius: '2.5%' }} onClick={notify1}>Rejoindre</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="environment grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/green-energy.jpg")} alt="Énergie Verte" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Optimisation de l'Énergie Verte</h3>
                <p className="w3-opacity">Environnement</p>
                <p>Développez un algorithme ou un outil logiciel qui optimise l'utilisation des sources d'énergie verte, comme l'énergie solaire et éolienne, pour minimiser le gaspillage d'énergie.</p>
                <p><button className="w3-button w3-light-grey w3-block" style={{ borderRadius: '2.5%' }} onClick={notify1}>Rejoindre</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="accessibility grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/accessibility.jpg")} alt="Accessibilité" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Vérificateur d'Accessibilité Web</h3>
                <p className="w3-opacity">Accessibilité</p>
                <p>Développez une application Web ou une extension de navigateur qui analyse les pages Web et fournit des recommandations en matière d'accessibilité pour améliorer l'utilisabilité pour les personnes handicapées.</p>
                <p><button className="w3-button w3-light-grey w3-block" style={{ borderRadius: '2.5%' }} onClick={notify1}>Rejoindre</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="social-justice grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/social-justice-events.jpg")} alt="Événements pour la Justice Sociale" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Plateforme d'Événements pour la Justice Sociale</h3>
                <p className="w3-opacity">Justice Sociale</p>
                <p>Créez une plateforme Web qui connecte les individus et les organisations intéressés par les événements pour la justice sociale. La plateforme devrait permettre aux utilisateurs de parcourir, découvrir et participer à divers événements.</p>
                <p><button className="w3-button w3-light-grey w3-block" style={{ borderRadius: '2.5%' }} onClick={notify1}>Rejoindre</button></p>
                <br></br>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProjectSection_french;

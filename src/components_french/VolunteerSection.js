import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function VolunteerSection_french() {
  const notify = (event) => {
    toast.success("Envoyé !");
    event.preventDefault();
  };

  return (
    <>
      <div className="w3-container w3-padding-64 w3-theme-l5" id="volunteer">
        <div className="w3-row-padding w3-center">
          <div className="w3-padding-16">
            <span className="w3-xlarge subtitle">Volontariat avec Nous</span>
          </div>
        </div>
        <div className="w3-row">
          <div>
            <form className="w3-container w3-card-4 w3-padding-16 w3-white w3-round-large" onSubmit={notify}>
              <div className="row">
                <div className="column" style={{ float: 'left', width: '50%', padding: '10px' }}>
                  <div className="w3-section">
                    <label>Prénom</label>
                    <input className="w3-input" type="text" id="First" name="Name" required></input>
                  </div>
                  <div className="w3-section">
                    <label>Email</label>
                    <input className="w3-input" type="email" id="Email" name="Email" required></input>
                  </div>
                </div>
                <div className="column" style={{ float: 'left', width: '50%', padding: '10px' }}>
                  <div className="w3-section">
                    <label>Nom de Famille</label>
                    <input className="w3-input" type="text" id="Last" name="Name" required></input>
                  </div>
                  <div className="w3-section">
                    <label>GitHub</label>
                    <input className="w3-input" type="url" id="Git" name="Name" required></input>
                  </div>
                </div>
              </div>

              <div className="w3-section">
                <label>Qu'est-ce qui vous passionne ?</label>
                <input className="w3-input" type="text" id="q1" name="Message" required></input>
              </div>
              <div className="w3-section">
                <label>Quelle expérience en programmation avez-vous ?</label>
                <input className="w3-input" type="text" id="q2" name="Message" required></input>
              </div>

              <button type="submit" className="w3-button w3-right">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default VolunteerSection_french;

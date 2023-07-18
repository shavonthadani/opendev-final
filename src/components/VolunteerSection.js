import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function VolunteerSection() {
  const notify = (event) => {
    toast.success("Sent!")
    event.preventDefault();
  };

  return (
    <>
      <div class="w3-container w3-padding-64 w3-theme-l5" id="volunteer" role="main" aria-labelledby="volunteer-title">
        <div className="w3-row-padding w3-center" >
          <div class="w3-padding-16">
            <span class="w3-xlarge subtitle" id="volunteer-title">Volunteer With Us</span>
          </div>
        </div>
        <div class="w3-row">
          <div>
            <form class="w3-container w3-card-4 w3-padding-16 w3-white w3-round-large" onSubmit={notify} aria-label="Volunteer application form">
              <div class="row">
                <div class="column" style={{ float: 'left', width: '50%', padding: '10px' }}>
                  <div class="w3-section">
                    <label htmlFor="First">First Name</label>
                    <input class="w3-input" type="text" id="First" name="Name" required></input>
                  </div>
                  <div class="w3-section">
                    <label htmlFor="Email">Email</label>
                    <input class="w3-input" type="email" id="Email" name="Email" required></input>
                  </div>
                </div>
                <div class="column" style={{ float: 'left', width: '50%', padding: '10px' }}>
                  <div class="w3-section">
                    <label htmlFor="Last">Last Name</label>
                    <input class="w3-input" type="text" id="Last" name="Name" required></input>
                  </div>
                  <div class="w3-section">
                    <label htmlFor="Git">GitHub</label>
                    <input class="w3-input" type="url" id="Git" name="Name" required></input>
                  </div>
                </div>
              </div>
              <div class="w3-section">
                <label htmlFor="q1">What are you passionate about?</label>
                <input class="w3-input" type="text" id="q1" name="Message" required></input>
              </div>
              <div class="w3-section">
                <label htmlFor="q2">What programming experience do you have?</label>
                <input class="w3-input" type="text" id="q2" name="Message" required></input>
              </div>
              <button type="submit" class="w3-button w3-right" aria-label="Submit volunteer application">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default VolunteerSection;

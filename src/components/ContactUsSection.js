import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ContactUsSection() {
  const notify = (event) => {
    toast.success("Sent!")
    event.preventDefault();
  };

  return (
    <>
      <div class="w3-container w3-light-grey" style={{ paddingBottom: '70px' }} role="main" aria-labelledby="contact-us-title">
        <div class="w3-row-padding">
          <div class="w3-padding-16 w3-center">
            <span class="w3-xlarge subtitle" id="contact-us-title">Contact Us</span>
          </div>
          <div class="w3-col m6">
            <form class="w3-container w3-card-4 w3-padding-16 w3-white w3-round-large" onSubmit={notify} aria-label="Contact form">
              <div class="row">
                <div class="column" style={{ float: 'left', width: '50%', padding: '10px' }}>
                  <div class="w3-section">
                    <label htmlFor="Name">Name</label>
                    <input class="w3-input" type="text" id="Name" name="Name" required></input>
                  </div>
                </div>
                <div class="column" style={{ float: 'left', width: '50%', padding: '10px' }}>
                  <div class="w3-section">
                    <label htmlFor="Email">Email</label>
                    <input class="w3-input" type="email" id="Email" name="Email" required></input>
                  </div>
                </div>
              </div>
              <div class="w3-section">
                <label htmlFor="Subject">Subject</label>
                <input class="w3-input" type="text" id="Subject" name="Subject" required></input>
              </div>
              <div class="w3-section">
                <label htmlFor="Message">Message</label>
                <input class="w3-input" type="text" id="Message" name="Message" required></input>
              </div>
              <button type="submit" class="w3-button w3-right" aria-label="Send contact form">Send</button>
            </form>
          </div>
          <div class="w3-col m6 w3-center">
            <img class="w3-image w3-round-large" alt="Graphic of a computer" src={require("../images/coding.jpg")} width="600" height="30"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsSection;

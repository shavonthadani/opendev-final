import React, { useEffect } from 'react';
import './ProjectSection.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function ProjectSection() {
  const notify1 = () => toast.success("Joined");
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
    <ToastContainer position="top-center"/>
      <div className="w3-row-padding w3-center" style={{ marginTop: 64 }}>
        <div className="w3-padding-16">
          <span className="w3-xlarge subtitle">Active Projects</span>
        </div>
      </div>

      <div className="card">
        <div className="filter-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} role="group" aria-labelledby="filter-group">
          <div>
            <input type="checkbox" id="health" defaultValue="health" aria-label="Health and Wellness"/>
            <label htmlFor="health">Health and Wellness</label>
          </div>
          <div>
            <input type="checkbox" id="education" defaultValue="education" aria-label="Education" />
            <label htmlFor="education">Education</label>
          </div>
          <div>
            <input type="checkbox" id="environment" defaultValue="environment" aria-label="Environment" />
            <label htmlFor="environment">Environment</label>
          </div>
          <div>
            <input type="checkbox" id="accessibility" defaultValue="accessibility" aria-label="Accessibility" />
            <label htmlFor="accessibility">Accessibility</label>
          </div>
          <div>
            <input type="checkbox" id="social-justice" defaultValue="social-justice" aria-label="Socal Justice" />
            <label htmlFor="social-justice">Social Justice</label>
          </div>
        </div>
      </div>

      <div id="items" className="w3-row-padding w3-center">
        <ul className="grid-list">
          <li className="health grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/chatbot.jpg")} alt="ChatBot Image" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Health Chatbot</h3>
                <p className="w3-opacity">Health and Wellness</p>
                <p>Develop an AI-powered chatbot that provides personalized health information, symptom assessment, and recommendations.</p>
                <p><button className="w3-button w3-light-grey w3-block" onClick={notify1}>Join</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="health grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/telehealth.jpg")} alt="Picture of Doctor" style={{ width: '100%', borderRadius: '2.5%' }} ></img>
              <div className="w3-container">
                <h3>Telehealth Platform</h3>
                <p className="w3-opacity">Health and Wellness</p>
                <p>Create an open-source telehealth platform that enables remote consultations between healthcare providers and patients.</p>
                <p><button className="w3-button w3-light-grey w3-block" style={{ borderRadius: '2.5%' }} onClick={notify1}>Join</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="health grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/wellness-app.jpg")} alt="Picture of person with healthy brain" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Wellness App</h3>
                <p className="w3-opacity">Health and Wellness</p>
                <p>Develop a mobile application that provides features for tracking activities, setting goals, and accessing wellness resources.</p>
                <p><button className="w3-button w3-light-grey w3-block" onClick={notify1}>Join</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="health grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/fitness-tracker.jpg")} alt="Picture of person working out" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Fitness Tracker</h3>
                <p className="w3-opacity">Health and Wellness</p>
                <p>Create a web or mobile-based fitness tracker that allows users to monitor their physical activities, set fitness goals, and track progress.</p>
                <p><button className="w3-button w3-light-grey w3-block" onClick={notify1}>Join</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="health grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/meditation-app.jpg")} alt="Picture of brain weightlifting" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Meditation App</h3>
                <p className="w3-opacity">Health and Wellness</p>
                <p>Build a meditation application that offers guided meditation sessions, relaxation techniques, and mental well-being resources.</p>
                <p><button className="w3-button w3-light-grey w3-block" onClick={notify1}>Join</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="education grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/online-learning.jpg")} alt="Picture of Online Learning" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>E-Learning Platform</h3>
                <p className="w3-opacity">Education</p>
                <p>Create an interactive online learning platform that offers specialized STEM courses on various subjects with quizzes and certificates.</p>
                <p><button className="w3-button w3-light-grey w3-block" onClick={notify1}>Join</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="education grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/virtual-reality.jpg")} alt="Picture of a person in Virtual Reality" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Virtual Reality Learning</h3>
                <p className="w3-opacity">Education</p>
                <p>Develop a virtual reality learning platform that provides immersive educational experiences in various subjects.</p>
                <p><button className="w3-button w3-light-grey w3-block" style={{ borderRadius: '2.5%' }} onClick={notify1}>Join</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="environment grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/climate-app.jpg")} alt="Picture of Climate change" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Climate Change Monitoring App</h3>
                <p className="w3-opacity">Environment</p>
                <p>Develop a mobile or web application that provides real-time climate change data, educational resources, and tips for sustainable living.</p>
                <p><button className="w3-button w3-light-grey w3-block" onClick={notify1}>Join</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="environment grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/sustainable-ecommerce.jpg")} alt="Picture of a green earth" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Sustainable Ecommerce Platform</h3>
                <p className="w3-opacity">Environment</p>
                <p>Create an online marketplace for eco-friendly products, promoting sustainable practices and providing a platform for environmentally conscious sellers.</p>
                <p><button className="w3-button w3-light-grey w3-block" style={{ borderRadius: '2.5%' }} onClick={notify1}>Join</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="environment grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/green-energy.jpg")} alt="Picture of Green Energy" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Green Energy Optimization</h3>
                <p className="w3-opacity">Environment</p>
                <p>Develop an algorithm or software tool that optimizes the utilization of green energy sources, such as solar and wind power, to minimize energy waste.</p>
                <p><button className="w3-button w3-light-grey w3-block" style={{ borderRadius: '2.5%' }} onClick={notify1}>Join</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="accessibility grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/accessibility.jpg")} alt="Picture of a person with Accessibility needs" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Web Accessibility Checker</h3>
                <p className="w3-opacity">Accessibility</p>
                <p>Develop a web application or browser extension that analyzes webpages and provides accessibility recommendations to improve usability for people with disabilities.</p>
                <p><button className="w3-button w3-light-grey w3-block" style={{ borderRadius: '2.5%' }} onClick={notify1}>Join</button></p>
                <br></br>
              </div>
            </div>
          </li>
          <li className="social-justice grid-item project-item">
            <div className="w3-card" style={{ borderRadius: '2.5%' }}>
              <img src={require("../images/social-justice-events.jpg")} alt="Picture of a person protesting" style={{ width: '100%', borderRadius: '2.5%' }}></img>
              <div className="w3-container">
                <h3>Social Justice Events Platform</h3>
                <p className="w3-opacity">Social Justice</p>
                <p>Create a web platform that connects individuals and organizations interested in social justice events. The platform should allow users to browse, discover, and participate in various events.</p>
                <p><button className="w3-button w3-light-grey w3-block" style={{ borderRadius: '2.5%' }} onClick={notify1}>Join</button></p>
                <br></br>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProjectSection;

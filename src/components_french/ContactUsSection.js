import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ContactUsSection_french() {
    const notify = (event) => {
        toast.success("Envoyé!")
        event.preventDefault();
    };

    return (
        <>
            <div class="w3-container w3-light-grey "  style={{ paddingBottom: '70px' }}>
                <div class="w3-row-padding">
                    <div class="w3-padding-16 w3-center"><span class="w3-xlarge subtitle">Contactez-Nous</span></div>
                    <div class="w3-col m6">
                        <div>
                            <form class="w3-container w3-card-4 w3-padding-16 w3-white w3-round-large" onSubmit={notify}>
                                <div class="row">
                                    <div class="column" style={{ float: 'left', width: '50%', padding: '10px' }}>
                                        <div class="w3-section">
                                            <label>Nom</label>
                                            <input class="w3-input" type="text" id="First" name="Name" required></input>
                                        </div>
                                    </div>
                                    <div class="column" style={{ float: 'left', width: '50%', padding: '10px' }}>
                                        <div class="w3-section">
                                            <label>Email</label>
                                            <input class="w3-input" type="email" id="Last" name="Name" required></input>
                                        </div>
                                    </div>
                                </div>
                                <div class="w3-section">
                                    <label>Sujet</label>
                                    <input class="w3-input" type="text" id="q2" name="Message" required></input>
                                </div>
                                <div class="w3-section">
                                    <label>Message</label>
                                    <input class="w3-input" type="text" id="q2" name="Message" required></input>
                                </div>

                                <button type="submit" class="w3-button w3-right">Envoyer</button>
                            </form>
                        </div>
                    </div>
                    <div class="w3-col m6 w3-center">
                        <img class="w3-image w3-round-large" src={require("../images/coding.jpg")} width="600" height="30"></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUsSection_french;

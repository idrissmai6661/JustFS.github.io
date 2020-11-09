import React, { Component } from "react";
import Navigation from "../components/Navigation";
import ContactBox from "../components/contact/ContactBox";
import Network from "../components/contact/Network";
import ContactForm from "../components/contact/ContactForm";

class contact extends Component {
  render() {
    return (
      <div className="contact">
        <Navigation />
        <div className="contactContent">
          <div className="header"></div>
          <div className="text-content">
            <div className="contactTitle">
              <h1>Contactez-moi</h1>
            </div>
            <div className="boxesContainer">
              <ContactBox />
              <ContactForm />
            </div>
            <Network />
          </div>
        </div>
      </div>
    );
  }
}

export default contact;

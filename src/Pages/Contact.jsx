import React from "react";

import { Fade } from "react-awesome-reveal";
import { ContactForm } from "../components/contactForm";
import { ContactInfo } from "../constants";

const About = () => {
  return (
    <div className="contact">
      <div className="main">
        <h2>
          Let's <span>Connect</span> .{" "}
        </h2>
        <p>
          I'm always open to new opportunities and collaborations. If you have a
          project in mind or would like to discuss how I can contribute to your
          team, feel free to contact me!
        </p>
        <Fade>
          <div className="ContactWrapper">
            <div className="contactCard">
              {ContactInfo.map((contact) => {
                return (
                  <div key={contact.id}>
                    <a href={contact.href}>{contact.icon}</a>
                  </div>
                );
              })}
            </div>

            <ContactForm />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;

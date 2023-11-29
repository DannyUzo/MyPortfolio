import React from "react";

import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="about">
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
          <div className="contactCard">
            <h5>Let's stay connected! You can find me on:</h5>
            <ul>
              <li>
                <a href="https://linkedin.com/in/daniel-uzodinma-6ba3b7293">
                  <FaLinkedin /> Daniel Uzodinma
                </a>
              </li>
              <li>
                <a href="https://github.com/DannyUzo">
                  <FaGithub /> DannyUzo
                </a>
              </li>
              <li>
                <a href="mailto:uzodinmadaniel42@gmail">
                  <CiMail /> uzodinmadaniel42@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="contactCard1">
            <div className="phone">
              <IoCallOutline /> 08079328196
            </div>
            <div className="phone">
              <FaWhatsapp /> 08079328196
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;

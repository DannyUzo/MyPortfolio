import React from "react";
import Navbar from "../components/Navbar";
import html from "../Assets/images/html-5.png";
import css from "../Assets/images/css-3.png";
import js from "../Assets/images/js.png";
import scss from "../Assets/images/sass.png";
import react from "../Assets/images/react.png";
import tw from "../Assets/images/tailwind-css-icon.png";
import next from "../Assets/images/nextjs-icon.png";

import { Slide, Zoom } from "react-awesome-reveal";

const Qualifications = () => {
  return (
    <div className="qualifications">
      <div className="nav">
        <Navbar />
      </div>
      <div className="main">
        <Zoom triggerOnce>
        <h2>
          Here are some of my Qualifications<span>.</span>{" "}
        </h2>
        </Zoom>
        <small className="skillText">
          I'm a frontend web developer proficient in HTML5, CSS3, JavaScript,
          and React, crafting visually stunning and responsive designs. I excel
          in UI/UX design, optimizing web performance, and ensuring web
          accessibility. With expertise in Tailwind CSS, SCSS, and Next.js, I
          manage projects efficiently using Git version control and project
          management tools, guaranteeing cross-browser compatibility for
          seamless user experiences.
        </small>
        <div className="images"></div>

        <div className="skills">
          <strong>Skills</strong>
          <div className="skillImages">
            <Slide>
              {" "}
              <img src={html} alt="html" />
            </Slide>
            <Slide>
              {" "}
              <img src={css} alt="css" />
            </Slide>
            <Slide>
              {" "}
              <img src={js} alt="js" />
            </Slide>
            <Slide>
              {" "}
              <img src={scss} alt="scss" />
            </Slide>
            <Slide>
              <img src={react} alt="react" />
            </Slide>
            <Slide>
              {" "}
              <img src={tw} alt="tw" />
            </Slide>
            <Slide>
              {" "}
              <img src={next} alt="next" />
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;

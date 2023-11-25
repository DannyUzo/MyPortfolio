import React from "react";
import Navbar from "../components/Navbar";

import { Fade } from "react-awesome-reveal";
import { Skills } from "../constants";
import SkillCard from "../components/SkillCard";

const Qualifications = () => {
  return (
    <div className="qualifications">
      <div className="nav">
        <Navbar />
      </div>
      <div className="main">
        <Fade triggerOnce>
          <h2>
            Here are some of my Qualifications<span> .</span>{" "}
          </h2>
        </Fade>
        <Fade>
          <p className="skillText">
            I'm a frontend web developer proficient in HTML5, CSS3, JavaScript,
            and React, crafting visually stunning and responsive designs. I
            excel in UI/UX design, optimizing web performance, and ensuring web
            accessibility. With expertise in Tailwind CSS, SCSS, and Next.js, I
            manage projects efficiently using Git version control and project
            management tools, guaranteeing cross-browser compatibility for
            seamless user experiences.
          </p>
        </Fade>
        <div className="images"></div>

        <div className="skills">
          <strong>Skills</strong>
          <Fade>
            <div className="skillImages">
              {Skills.map((Language) => (
                <SkillCard key={Language.id} {...Language} />
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;

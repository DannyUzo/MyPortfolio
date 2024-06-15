import React from "react";

import { Fade } from "react-awesome-reveal";
import { Skills } from "../constants";
import SkillCard from "../components/SkillCard";
import Experience from "../components/Experience";

const Qualifications = () => {
  return (
    <div className="qualifications">
      <div className="main">
        <div className="skills">
        <Fade triggerOnce>
          <div>
          <strong>Experience</strong>
          <Experience />

          </div>
            <div>
          <strong>Skills</strong>
            <div className="skillImages">
              {Skills.map((Language) => (
                <SkillCard key={Language.id} {...Language} />
              ))}
            </div>

            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;

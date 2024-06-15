import React from "react";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({ name, href, github, framework }) => {
  return (
    <>
      <div className="ProjectCard">
        <h3>{name}</h3>
        <sub>{framework}</sub>
        <div className="LinkDiv">
          <div className="projectLinks">
            <a href={href}>
              <CiGlobe />
            </a>
          </div>
          <div className="projectLinks">
            <a href={github}>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

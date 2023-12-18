import React from "react";
import { CiGlobe } from "react-icons/ci";
import { FaCode } from "react-icons/fa";

const ProjectCard = ({ name, href, github, about, framework }) => {
  return (
    <>
      <div className="ProjectCard">
        <h3>{name}</h3>
        <p>{about}</p>
        <sub>{framework}</sub>
        <div className="LinkDiv">
          <div className="projectLinks">
            <CiGlobe />
            <a href={href}>Visit</a>
          </div>
          <div className="projectLinks">
            <FaCode />
            <a href={github}>Get Code</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

export const Collaborations = ({ name, href, about }) => {
  return (
    <>
      <div className="ProjectCard">
        <h3>{name}</h3>
        <p>{about}</p>
        <div className="LinkDiv">
          <div className="projectLinks">
              <CiGlobe />
            <a href={href}>
              Visit
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

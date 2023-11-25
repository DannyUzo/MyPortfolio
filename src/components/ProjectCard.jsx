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
          <div>
            <a href={href}>
              <CiGlobe />
              Visit
            </a>
          </div>
          <div>
            <a href={github}>
              <FaCode />
              Get Code
            </a>
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
          <div>
            <a href={href}>
              <CiGlobe />
              Visit
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

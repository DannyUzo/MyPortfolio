import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Collaborations } from "../components/ProjectCard";
import { Fade } from "react-awesome-reveal";
import { projectDetails, collabProjects } from "../constants";

const Projects = () => {
  return (
    <div className="projects">
      <div className="main">
        <h2>
          My projects<span> .</span>{" "}
        </h2>
        <p>
          Take a look at some of my recent projects to get a sense of my work:
        </p>
        <Fade triggerOnce>
          <strong>Personal Projects</strong>
          <div className="projectBox">
            {projectDetails.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </Fade>
          <strong>Collaborations</strong>
        <div>
          <div className="projectBox">
              {collabProjects.map((project) => (
                <Collaborations key={project.id} {...project}/>
              ))}
              </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

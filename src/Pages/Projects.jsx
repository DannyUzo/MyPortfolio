import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Fade } from "react-awesome-reveal";
import { projectDetails } from "../constants";

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
      </div>
    </div>
  );
};

export default Projects;

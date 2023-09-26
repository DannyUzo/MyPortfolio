import React from "react";
import Navbar from "../components/Navbar";

import { Slide } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div className="projects">
      <div className="nav">
        <Navbar />
      </div>
      <div className="main">
        <h2>
          My projects<span>.</span>{" "}
        </h2>
        <p>
          Take a look at some of my recent projects to get a sense of my work:
        </p>
        <div className="projectBox">
          <Slide>
            <div className="ProjectCard">
              <a href="https://weather-app-smoky-gamma-35.vercel.app/">
                {" "}
                Weather App
              </a>
            </div>
          </Slide>
          <Slide>
            <div className="ProjectCard">
              <a href="https://resturantsite.vercel.app/">
                Restaurant Landing Page{" "}
              </a>
            </div>
          </Slide>
          <Slide>
            <div className="ProjectCard">
              <a href="https://gallery-task3.vercel.app/">Image Gallery</a>
            </div>
          </Slide>
          <Slide>
            <div className="ProjectCard">
              <a href="https://nikepage-five.vercel.app/">Nike Landing page</a>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Projects;

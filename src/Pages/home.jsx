import React from "react";
import Navbar from "../components/Navbar";
import { Slide, Fade  } from 'react-awesome-reveal'

const Home = () => {
  return (
    <div className="home">
      <div className="nav">
        <Navbar />
      </div>
      <div className="main">
        <Slide triggerOnce>
        <h1>
          Hi, I'm <span>Daniel</span> .{" "}
        </h1>
        </Slide>
        <Fade>
        <h3>
        Frontend Web Developer in Lagos, Nigeria 
        </h3>
        </Fade>

        <div className="aboutMe">
            <Fade>
        <strong>
        About Me 
        </strong>
        <p>
        I'm a
        passionate and creative Frontend Web Developer based in the vibrant city
        of Lagos, Nigeria. With a love for turning ideas into functional and
        beautiful web experiences, I've dedicated myself to mastering the art of
        frontend development. My goal is to create digital solutions that not
        only look great but also provide exceptional user experiences.
        </p>
            </Fade>

        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <div className="nav">
        <Navbar />
      </div>
      <div className="main">
        <h1>
          Hi, I'm <span>Daniel</span> .{" "}
        </h1>
        <h3>
        Frontend Web Developer in Lagos, Nigeria 
        </h3>

        <div className="aboutMe">
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
        </div>
      </div>
    </div>
  );
};

export default Home;

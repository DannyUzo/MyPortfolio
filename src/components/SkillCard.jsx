import React from "react";
import { Fade } from "react-awesome-reveal";

const SkillCard = ({ imgUrl, label }) => {
  return (
    <>
      <Fade>
        <div className="skillCard">
          <img src={imgUrl} alt={label} />
          <sub>{label}</sub>
        </div>
      </Fade>
    </>
  );
};

export default SkillCard;

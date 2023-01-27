import React from "react";
import { programsData } from "../data/programsData";
import RightArrow from "../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs__header">
        <span>EXPLORE OUR</span>

        <span>PROGRAMS</span>

        <span>TO SHAPE YOU</span>
      </div>

      <div className="programs__categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}

            <span>{program.heading}</span>

            <span>{program.details}</span>

            <div className="join">
              <span>Join Now</span>

              <img src={RightArrow} alt="rightArrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;

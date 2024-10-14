import React from "react";
import "./Skills.css";
import { skills } from "../../Data";
const Skills = () => {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section__title" data-title="Skills">
          What I can Do
        </h2>
        <div className="skills__grid container grid">
          {skills.map(({ img, title, description }, index) => {
            return (
              <div className="skills__item" key={index}>
                <img src={img} alt="" className="skills__img" />
                <h3 className="skills__title">{title}</h3>
                <p className="skills__description">{description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;

import React from "react";
import "./Offer.css";
import { project } from "../../Data";

const Offer = () => {
  return (
    <>
      <section className="project section" id="projects">
        <h2 className="section__title" data-title="Projects">
          What I Did
        </h2>
        <div className="container">
          {project.map(({ img, title, category, description, path }, index) => {
            return (
              <div className="project__item" key={index}>
                <a href={path} target="black">
                  <div className="project__img-wrapper">
                    <img src={img} alt="" className="project__img" />
                  </div>
                </a>
                <div className="project__content">
                  <h3 className="project__title">{title}</h3>
                  <span className="project__category">{category}</span>
                  <p className="project__description">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Offer;

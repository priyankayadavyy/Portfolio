import React from "react";
import "./About.css";
import photo from "../../assets/priyanka.jpg";
import resume from "../../assets/Resume.pdf";
import { FiCheck } from "react-icons/fi";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="about__grid container grid">
          <div className="about__img-wrapper">
            <img className="about__img" src={photo} alt="" />
          </div>
          <div className="about__content">
            <h2 className="section__title title-left" data-title="About Me">
              Who I Am
            </h2>
            <p className="about__description">
              Hii, There! I'm Priyanka Yadav a dedicated Software Developer with
              over 2 year of experience in creating robust and effcient
              applications. My expertise spans across full-stack development,
              including front-end frameworks like React and back-end
              technologies such as Node.js and MongoDB. I have a knack for
              problem-solving and a passion for turning complex challenges into
              user-friendly solutions.
            </p>
            <div className="about__details grid">
              <p className="about__details-description">
                <FiCheck className="about__detals" />
                Front-end Developer
              </p>
              <p className="about__details-description">
                <FiCheck className="about__detals" />
                Web Developer
              </p>
              <p className="about__details-description">
                <FiCheck className="about__detals" />
                Problem Solver
              </p>
            </div>
            <a className="btn" href={resume}>
              View Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

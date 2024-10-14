import React from "react";
import "./Home.css";
import { socials } from "../../Data";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home__container container">
          <div className="home__content">
            <span className="home__subtitle">Hello, It's me</span>
            <h1 className="home__title">Priyanka Yadav</h1>
            <p className="home__description">
              And I'm a{" "}
              <TypeAnimation
                className="animation"
                sequence={[
                  "Software Developer",
                  2000,
                  "Web Designer",
                  2000,
                  "Problem-Solver",
                  2000,
                  "Front-end Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
              />
            </p>
            <div className="home__socials-links">
              {socials.map(({ icon, path }, index) => {
                return (
                  <div key={index}>
                    <a
                      className="home__social-link"
                      href={path}
                      target="_black"
                    >
                      {icon}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

import React from "react";
import "./ceriti.css";
import webc from "../../assets/webc.png";
import pythonc from "../../assets/pytthonc.png";
import data from "../../assets/data.jpg";
import ui from "../../assets/ui.jpg";
const Ceriti = () => {
  return (
    <>
      <section className="ceriti section" id="ceriti">
        <h2 className="section__title" data-title="Certifications">
          See My Certifications
        </h2>

        <div className="ceriti__grid grid container">
          <div className="ceriti__item">
            <img src={data} alt="" className="ceriti__img" />
            <div className="ceriti__data">
              <h3 className="ceriti__title">Google Data Analytics</h3>
              <p className="ceriti__job">Coursera</p>
            </div>
          </div>

          <div className="ceriti__item">
            <img src={ui} alt="" className="ceriti__img" />
            <div className="ceriti__data">
              <h3 className="ceriti__title">Google UX Design</h3>
              <p className="ceriti__job">Coursera</p>
            </div>
          </div>

          <div className="ceriti__item">
            <img src={pythonc} alt="" className="ceriti__img" />
            <div className="ceriti__data">
              <h3 className="ceriti__title">Python</h3>
              <p className="ceriti__job">GUVI</p>
            </div>
          </div>

          <div className="ceriti__item">
            <img src={webc} alt="" className="ceriti__img" />
            <div className="ceriti__data">
              <h3 className="ceriti__title">Web Development</h3>
              <p className="ceriti__job">Internshala</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ceriti;

import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { toast } from "react-toastify";
import { socials } from "../../Data";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !sub || !msg) {
        toast.error("PLease Provide all fields");
      }
      const res = await axios.post(
        "http://localhost:8080/api/v1/portfolio/sendEmail",
        {
          name,
          email,
          sub,
          msg,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setSub("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title" data-title="Contact Me">
          How can you communicate
        </h2>
        <form className="contact__form grid container">
          <div className="form__input-div">
            <input
              type="text"
              placeholder="Your Name"
              className="form__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form__input-div">
            <input
              type="email"
              placeholder="Your Email Address"
              className="form__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form__input-div">
            <input
              type="text"
              placeholder="Subject"
              className="form__input"
              value={sub}
              onChange={(e) => setSub(e.target.value)}
            />
          </div>

          <div className="form__input-div form__input-textarea">
            <textarea
              type="text"
              placeholder="Your Message"
              cols="30"
              rows="4"
              className="form__input"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
          </div>

          <button className="btn btn--flex contact--btn" onClick={handleSubmit}>
            Sent Message
          </button>
        </form>

        <div className="contact__socials-links btn--flex container">
          {socials.map(({ icon, path }, index) => {
            return (
              <div key={index}>
                <a className="contact__social-link" href={path} target="_black">
                  {icon}
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Contact;

import React from "react";
import ME from "../../assets/myFamily.jpeg";
import { FaAward } from "react-icons/fa";
import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Private Projects</small>
            </article>
          </div>
          <p>
            Control of a computerized environment, creativity and inventiveness,
            ability to work in a team, ability to analyze and evaluate, ability
            to learn, highly motivated, flexibility and adaptability, acceptance
            of responsibility.
          </p>
          <a href="#contact" className="btn btn-primary">
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

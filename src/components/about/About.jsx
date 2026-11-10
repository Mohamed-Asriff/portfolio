import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="Mohamed Asriff" className="about__img" />
        <div className="about__data">
            <Info/>
            <p className="about__description">
                IT undergraduate at the Institute of Technology, University of Moratuwa (2024 – Present), seeking an IoT / Embedded Systems internship. Hands-on experience across 10+ academic and personal projects. Comfortable with C/C++, Python, Java and Go, with backend/API development for device-to-cloud data flows and SQL/NoSQL databases for sensor and telemetry data.
                <br /><br />
                Strong in problem solving, Linux/Git workflows, and Agile teamwork, with a keen interest in connected devices and firmware development.
            </p>
        </div>
      </div>
    </section>
  );
};

export default About;

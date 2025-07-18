import React from "react";
// import "../styles/About.css";
import skills from "../data/skills";

function About() {
  return (
    <section className="info-section">
      <h1 className="info-title">Info</h1>

      <div className="info-row">
        <div className="info-label">↳ Overview</div>
        <div className="info-text">
          <p>
            Hi, I’m Priyank — with a developer’s logic and a designer’s heart.
            I craft digital experiences that feel intuitive, look beautiful, and perform effortlessly.
            My journey includes freelancing, co-op roles, and academic recognition in Design and Development.
          </p>
        </div>
      </div>

      <div className="info-row">
        <div className="info-label">↳ Services</div>
        <div className="info-services">
          <ul>
            <li>UX/UI Design</li>
            <li>Product Design</li>
            <li>Responsive Web Design</li>
          </ul>
          <ul>
            <li>Frontend Development</li>
            <li>Design Systems</li>
            <li>Brand Identity</li>
          </ul>
        </div>
      </div>

      <div className="info-row">
        <div className="info-label">↳ Experience</div>
        <div className="info-text info-services">
          <ul>
            <strong>HRX Connect</strong>
            <li>
              At HRX Connect, a talent intelligence company, I led the redesign of internal dashboards and marketing pages to support the product and growth teams.
            </li>
          </ul>
          <ul>
            <strong>CanSTEM</strong>
            <li>
              At Canstem, an immigration and educational consultancy, I revamped their entire website and student portal interface.
            </li>
          </ul>
          <ul>
            <strong>Webclues Infothech LLP.</strong>
            <li>
              As a design intern at WebClues, I supported mobile and web-based client projects with the senior design team.
            </li>
          </ul>
        </div>
      </div>

      <div className="info-row">
        <div className="info-label">↳ Skills</div>
        <div className="info-text info-services">
          <section id="skills" className="section skills">
            <div className="skill-cloud">
              {skills.map((skill, index) => (
                <span className="skill-tag" key={index}>{skill}</span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;

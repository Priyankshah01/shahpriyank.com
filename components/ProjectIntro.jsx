import React from "react";
// import "../styles/ProjectIntro.css";

const ProjectIntro = ({
  title,
  subtitle,
  overview,
  services = "Not specified",
  agency = "Not specified",
  toolsUsed = [],
  whatwasmyrole = "Not specified",
  images = [],
  problem,
  designProcess,
  solution,
  conclusion
}) => {
  return (
    <div className="project-intro">
      {/* 1. Title */}
      <h1 className="project-intro-title">{title}</h1>

      {/* 2. Subtitle */}
      <h2 className="project-intro-subtitle">{subtitle}</h2>

      {/* 3. Overview */}
      <div className="project-intro-section">
        <div className="project-intro-label">↳ Overview</div>
        <div className="project-intro-text">{overview || "No overview available."}</div>
      </div>

      <hr className="project-divider" />

      {/* 4. Services */}
      <div className="project-intro-section">
        <div className="project-intro-label">↳ Services</div>
        <div className="project-intro-text">{services}</div>
      </div>

      {/* 5. Agency */}
      <div className="project-intro-section">
        <div className="project-intro-label">↳ Agency</div>
        <div className="project-intro-text">{agency}</div>
      </div>

      {/* 6. Tools Used */}
      {toolsUsed.length > 0 && (
        <>
          <hr className="project-divider" />
          <div className="project-intro-section">
            <div className="project-intro-label">↳ Tools Used</div>
            <div className="project-intro-text">
              <section className="section tools">
                <div className="skill-cloud1">
                  {toolsUsed.map((tool, index) => (
                    <span className="skill-tag" key={index}>{tool}</span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </>
      )}

      {/* 7. What was my role */}
      <hr className="project-divider" />
      <div className="project-intro-section">
        <div className="project-intro-label">↳ What was my role</div>
        <div className="project-intro-text">{whatwasmyrole}</div>
      </div>

      <img src="/images/Giftelle-ui1.jpg" alt="Overview" className="project-img" />

      <img src="/images/Giftelle-ui2.jpg" alt="Services" className="project-img" />

      {/* 9. Problem */}
      {problem && (
        <>
          <hr className="project-divider" />
          <div className="project-intro-section">
            <div className="project-intro-label">↳ Problem</div>
            <div className="project-intro-text">{problem}</div>
          </div>
        </>
      )}

      {/* 10. Design Process */}
      {designProcess && (
        <>
          <hr className="project-divider" />
          <div className="project-intro-section">
            <div className="project-intro-label">↳ Design Process</div>
            <div className="project-intro-text">{designProcess}</div>
          </div>
        </>
      )}

      {/* 11. Solution */}
      {solution && (
        <>
          <hr className="project-divider" />
          <div className="project-intro-section">
            <div className="project-intro-label">↳ Solution</div>
            <div className="project-intro-text">{solution}</div>
          </div>
        </>
      )}

      <img src="/images/Giftelle-ui3.jpg" alt="Agency" className="project-img" />
      
      <img src="/images/giftelle-ui.jpg" alt="My Role" className="project-img" />


      {/* Conclusion */}
      {conclusion && (
        <>
          <hr className="project-divider" />
          <div className="project-intro-section">
            <div className="project-intro-label">↳ Conclusion</div>
            <div className="project-intro-text">{conclusion}</div>
          </div>
        </>
      )}

    </div>
  );
};

export default ProjectIntro;

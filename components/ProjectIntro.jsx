import React from "react";

const ProjectIntro = ({
  heroImg,
  outcomeTitle,
  outcomeSubtitle,
  client = [],
  targetAudience,
  problem,
  role,
  processSteps = [],
  finalImages = [],
  takeaways = [],
}) => {
  return (

    <div className="project-intro">

      <h1 className="project-intro-title">{outcomeTitle}</h1>
      <h2 className="project-intro-subtitle">{outcomeSubtitle}</h2>
      {/* HERO SECTION */}
      {heroImg && (
        <img
          src={heroImg}
          alt="Hero"
          className="project-img"
        />
      )}



      {/* PROBLEM SETUP */}
  {/* <img src="/images/giftelle-ui.jpg" alt="Client" className="project-img" /> */ }

  < div className = "project-intro-section" >
        <div className="project-intro-label">↳ Target Audience</div>
        <div className="project-intro-text">{targetAudience}</div>
      </div >
  {/* <img src="/images/audience.jpg" alt="Audience" className="project-img" /> */ }

  < div className = "project-intro-section" >
        <div className="project-intro-label">↳ Problem</div>
        <div className="project-intro-text">{problem}</div>
      </div >
  {/* <img src="/images/problem.jpg" alt="Problem" className="project-img" /> */ }

  < div className = "project-intro-section" >
        <div className="project-intro-label">↳ My Role</div>
        <div className="project-intro-text">{role}</div>
      </div >
  {/* <img src="/images/Giftelle-ui3.jpg" alt="My Role" className="project-img" /> */ }

      {client && (
      <div className="project-intro-section">
        <div className="project-intro-label">↳ Who is the client?</div>
        <div className="project-intro-text">
          <p>{client.title}</p>
          {client.image && (
            <img src={client.image} alt={client.title} className="project-img" />
          )}
        </div>
      </div>
    )}

{/* DESIGN PROCESS */ }
{
  processSteps.map((step, index) => (
    <div key={index}>
      {/* <hr className="project-divider" /> */}
      <div className="project-intro-section">
        <div className="project-intro-label">{`↳ Step ${index + 1}: ${step.title}`}</div>
        <div className="project-intro-text">{step.description}</div>
        {/* <div className="project-img">{step.image}</div> */}
      </div>
    </div>
  ))
}

{/* FINAL RESULTS */ }
{
  finalImages.length > 0 && (
    <>
      <hr className="project-divider" />
      <div className="project-intro-section">
        <div className="project-intro-label">↳ Final Results</div>
        <div className="project-intro-images">
          {finalImages.map((img, index) => (
            <img key={index} src={img} alt={`Final ${index + 1}`} />
          ))}
        </div>
      </div>
    </>
  )
}

{/* TAKEAWAYS */ }
{
  takeaways.length > 0 && (
    <>
      <hr className="project-divider" />
      <div className="project-intro-section">
        <div className="project-intro-label">↳ My 3 Main Takeaways</div>
        <div className="project-intro-text">
          <ul>
            {takeaways.map((point, index) => (
              <li key={index}>#{index + 1} — {point}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
    </div >
  );
};

export default ProjectIntro;

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import featuredProjects from "../data/featuredProjects"; // ✅ Your local data file
// import "../styles/Project.css"; // Optional: move this import to _app.js

const ProjectShowcase = () => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [projects] = useState(featuredProjects); // ✅ Fully static

  // Animate on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`project-grid-section ${isVisible ? "animate" : ""}`}
      ref={sectionRef}
    >
      <div className="project-title">
        <h2>Explore my mind</h2>
      </div>

      <div className="project-grid-container">
        {projects.map((project, index) => (
          <Link
            key={project.slug || index}
            href={`/projects/${project.slug}`}
            className="project-card"
          >
            <img
              src={`/images/${project.image1}`}
              alt={project.title}
              className="project-image"
              loading="lazy"
            />
            <div className="project-meta">
              <span>
                {new Date(
                  project.createdAt || project.date || "2024-01-01"
                ).getFullYear()}
              </span>
              <span>{project.status || "Design"}</span>
            </div>
            <hr className="project-divider" />
            <h3 className="project-title">
              {project.title} <span className="arrow">↗</span>
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;

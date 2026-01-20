import React from "react";

const ProjectIntro = ({
  heroImg,
  outcomeTitle,
  outcomeSubtitle,
  services,
  date,
  agency,
  client,
  targetAudience,
  problem,
  role,
  goals = null,
  techStack = null,

  // ✅ safe defaults
  accessibility = [],
  processSteps = [],
  finalImages = [],
  takeaways = [],

  liveDemoUrl,
  viewCodeUrl,
}) => {
  const hasAccessibility = Array.isArray(accessibility) && accessibility.length > 0;
  const hasProcess = Array.isArray(processSteps) && processSteps.length > 0;
  const hasFinalImages = Array.isArray(finalImages) && finalImages.length > 0;
  const hasTakeaways = Array.isArray(takeaways) && takeaways.length > 0;

  return (
    <div className="project-intro space-y-16">
      {/* Project Title & Subtitle */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">{outcomeTitle}</h1>
        <h2 className="text-xl text-gray-600">{outcomeSubtitle}</h2>
      </div>

      {/* Hero Section */}
      {heroImg && (
        <div className="w-full overflow-hidden rounded-2xl shadow-md">
          <img src={heroImg} alt="Hero" className="w-full object-cover" />
        </div>
      )}

      {/* Meta Details */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <p className="text-sm text-gray-400">Services</p>
          <p className="text-base text-gray-800">{services}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Date</p>
          <p className="text-base text-gray-800">{date}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Agency</p>
          <p className="text-base text-gray-800">{agency}</p>
        </div>
      </div>
      <hr className="project-divider" />

      {/* Problem & Role */}
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold">Target Audience</h3>
          <p className="text-gray-700 mt-2">{targetAudience}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">The Problem</h3>
          <p className="text-gray-700 mt-2">{problem}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">My Role</h3>
          <p className="text-gray-700 mt-2">{role}</p>
        </div>
      </div>

      {/* Client Info */}
      {client?.title && (
        <div>
          <h3 className="text-lg font-semibold">Client</h3>
          <p className="text-gray-700 mt-2">{client.title}</p>
          {client.image && (
            <img
              src={client.image}
              alt={client.title}
              className="mt-4 rounded-xl shadow"
            />
          )}
        </div>
      )}

      <hr className="project-divider" />

      {/* GOALS */}
      {goals && (
        <div className="mb-12 max-w-6xl">
          <h3 className="text-xl font-semibold mb-4">Clear Project Goals</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {goals.business && <li><strong>Business:</strong> {goals.business}</li>}
            {goals.design && <li><strong>Design:</strong> {goals.design}</li>}
            {goals.tech && <li><strong>Technical:</strong> {goals.tech}</li>}
          </ul>
        </div>
      )}

      {/* TECH STACK */}
      {techStack && (
        <div className="mb-12 max-w-6xl">
          <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
          <p>{techStack}</p>
        </div>
      )}

      {/* ACCESSIBILITY */}
      {hasAccessibility && (
        <div className="mb-12 max-w-6xl">
          <h3 className="text-xl font-semibold mb-4">Accessibility Considerations</h3>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
            {accessibility.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
      <hr className="project-divider" />

      {/* Process Steps */}
      {hasProcess && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Design & Development Process</h3>
          {processSteps.map((step, index) => (
            <div key={index} className="border-l-4 border-gray-300 pl-4">
              <h4 className="font-medium text-gray-900">
                Step {index + 1}: {step.title}
              </h4>
              <p className="text-gray-700 mt-1">{step.description}</p>
              {step.image && (
                <img
                  src={step.image}
                  alt={step.title}
                  className="mt-4 rounded-xl shadow"
                />
              )}
            </div>
          ))}
        </div>
      )}
      <hr className="project-divider" />

      {/* Final Results */}
      {hasFinalImages && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Final Results</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {finalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Final Image ${index + 1}`}
                className="rounded-xl shadow"
              />
            ))}
          </div>
        </div>
      )}

      {/* Key Takeaways */}
      {hasTakeaways && (
        <div>
          <h3 className="text-lg font-semibold">Key Takeaways</h3>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
            {takeaways.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Buttons */}
      {(liveDemoUrl || viewCodeUrl) && (
        <div className="flex flex-wrap gap-4 mt-6">
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
            >
              Live Demo
            </a>
          )}
          {viewCodeUrl && (
            <a
              href={viewCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-black rounded-xl hover:bg-gray-100"
            >
              View Code
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectIntro;

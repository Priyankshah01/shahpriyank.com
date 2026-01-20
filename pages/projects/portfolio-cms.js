// pages/projects/portfolio-cms.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ConnectSection from "../../components/ConnectSection";
import ProjectIntro from "../../components/ProjectIntro";

export default function PortfolioCMSPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectIntro
          heroImg="/images/portfolio-cms-hero.jpg"
          services="Full-Stack Development, API Design, CMS Architecture"
          date="July 2024"
          agency="Self-Initiated Project"
          outcomeTitle="Portfolio CMS Admin Panel"
          outcomeSubtitle="A fully custom content management system to manage my portfolio projects and skills — built from the ground up."

          client={{
            title: "Personal Project (for My Portfolio)",
            image: "/images/portfolio-cms-dashboard.jpg",
          }}

          targetAudience="Developers, designers, and tech-savvy creatives who want complete control over portfolio content and dynamic updates without relying on third-party CMS tools."

          problem="Hardcoding project data into the frontend made updating my portfolio slow and inefficient. Off-the-shelf CMS platforms like WordPress or Contentful were too bloated, restrictive, or expensive for my needs. I needed a streamlined, developer-friendly solution."

          role="I handled everything end-to-end: backend database design, secure REST API creation, admin dashboard UI, authentication logic, and frontend integration with my React/Next.js portfolio site."

          processSteps={[
            {
              title: "Schema Planning & MongoDB Setup",
              description:
                "I designed a lightweight, scalable MongoDB schema for `Projects` and `Skills`. Each document was structured for frontend flexibility: image paths, markdown-ready descriptions, tech tags, slugs, and visibility toggles. MongoDB Atlas was chosen for its reliability and integration ease with Node.js.",
            },
            {
              title: "Admin Dashboard UI with Pug",
              description:
                "Using Express and Pug, I created a clean, responsive admin interface for managing content. I implemented full CRUD functionality for both Projects and Skills. Each record could be added, edited, or deleted from a friendly UI — no database tools or JSON editing needed.",
            },
            {
              title: "RESTful API + Frontend Sync",
              description:
                "Built a secure, RESTful API using Express. CORS was properly configured to allow requests from my deployed React frontend. I then refactored my portfolio to fetch live project and skills data dynamically based on slugs — enabling seamless future content updates without redeploying the frontend.",
            },
            {
              title: "Deployment & Environment Setup",
              description:
                "The backend was deployed to Render with continuous deployment from GitHub. Environment variables for DB URIs and credentials were handled securely. MongoDB Atlas provided the production-grade database layer. Authentication for the admin dashboard was added to prevent unauthorized access.",
            },
          ]}

          finalImages={[
            "/images/portfolio-cms-list.jpg",
            "/images/portfolio-cms-edit.jpg",
            "/images/portfolio-cms-deployed.jpg",
          ]}

          takeaways={[
            "🛠 Custom CMS = Total Flexibility: I now have full control over how, when, and what content updates — without waiting on CMS limits or writing JSON manually.",
            "🔄 API-Driven = Scalable: By decoupling backend and frontend, I’ve set myself up for easy Next.js upgrades and mobile extensions.",
            "🔐 Developer Experience Matters: The CMS is not just powerful — it’s intuitive for me to use daily. I built it the way I wished commercial tools worked.",
          ]}

          liveDemoUrl="https://portfolio-admin-api-kria.onrender.com/"
          viewCodeUrl="https://github.com/Priyankshah01/portfolio-admin-api"
        />
      </main>
      <ConnectSection />
      <Footer />
    </>
  );
}

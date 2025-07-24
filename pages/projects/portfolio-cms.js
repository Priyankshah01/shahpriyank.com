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
                    outcomeTitle="Portfolio CMS Admin Panel"
                    outcomeSubtitle="A full-stack CMS to manage and edit my portfolio projects and skills dynamically"
                    client={{
                        title: "Personal Project (for My Portfolio)",
                        image: "/images/portfolio-cms-dashboard.jpg",
                    }}
                    targetAudience="Designers and developers who want a fully customized, code-driven CMS for portfolio management"
                    problem="Hardcoding portfolio content or relying on bloated CMS platforms is inefficient for rapid iteration and customization."
                    role="Solo Developer (Backend, API, Dashboard UI, Integration with React)"
                    processSteps={[
                        {
                            title: "Database & Schema Design",
                            description: "Defined MongoDB schemas for Projects and Skills with fields optimized for frontend rendering."
                        },
                        {
                            title: "Admin Panel Development",
                            description: "Built a Pug-based admin dashboard with Create, Read, Update, and Delete functionality for both projects and skills."
                        },
                        {
                            title: "API + Frontend Integration",
                            description: "Created secure API endpoints and integrated them with my React-based portfolio to serve dynamic content."
                        },
                        {
                            title: "Deployment",
                            description: "Hosted backend on Render, connected with MongoDB Atlas, and ensured cross-origin requests worked smoothly with CORS."
                        }
                    ]}
                    finalImages={[
                        "/images/portfolio-cms-list.jpg",
                        "/images/portfolio-cms-edit.jpg",
                        "/images/portfolio-cms-deployed.jpg",
                    ]}
                    takeaways={[
                        "Custom-built CMS offers full control, unlike rigid third-party tools",
                        "Separation of frontend and backend made future migration to Next.js seamless",
                        "Using RESTful APIs made my portfolio scalable and easier to maintain"
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

// pages/projects/basiscsui.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ConnectSection from "../../components/ConnectSection";
import ProjectIntro from "../../components/ProjectIntro";

export default function SchoolSysPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectIntro
          heroImg="/images/schoolsys-ui.jpg"
          outcomeTitle="Basics UI."
          outcomeSubtitle="Minimal UI System for Rapid Prototyping"
          client={{
            title: "Internal / Personal Project",
            image: "/images/Basics-ui3.jpg",
          }}

          targetAudience="Freelance designers, developers, and small teams building MVPs"
          problem="Most UI kits are bloated, opinionated, or hard to customize quickly for unique branding."
          role="I built Basics UI to help me and others create beautiful UIs with minimal setup using consistent, accessible design tokens."
          processSteps={[
            {
              title: "Research",
              description:
                "Studied existing systems like Tailwind UI and Radix Primitives. Identified gaps in customization and simplicity.",
            },
            {
              title: "Planning",
              description:
                "Mapped essential components: buttons, forms, modals, tabs, tooltips. Defined a token-based design system.",
            },
            {
              title: "Prototyping",
              description:
                "Designed high-fidelity wireframes and interactive prototypes in Figma, incorporating user feedback after usability tests.",
            },
            {
              title: "Refinement",
              description:
                "Shared with early testers. Got feedback on spacing, token structure, and responsiveness. Improved DX.",
              image: "/images/Basics-ui5.jpg",

            },
          ]}
          finalImages={[
            "/images/Basics-ui5.jpg",
            "/images/Basics-ui4.jpg",
            "/images/Basics-ui1.jpg",
          ]}
          takeaways={[
            "Design tokens make your system scalable and flexible.",
            "Accessibility can be built-in without extra effort.",
            "Early testing prevents over-engineering."
          ]}
        />
      </main>
      <ConnectSection />
      <Footer />
    </>
  );
}

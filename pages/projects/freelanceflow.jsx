import Footer from "../../components/Footer";
import ConnectSection from "../../components/ConnectSection";
import ProjectIntro from "../../components/ProjectIntro";

export default function FreelanceFlowPage() {
  return (
    <>
      <main>
        <ProjectIntro
          heroImg="/images/freelanceflowhero2.jpg"

          services="Product Design · UX/UI Design · Frontend Development"
          date="2025"
          agency="Freelance"

          outcomeTitle="Designing a unified SaaS platform to simplify freelance workflows."
          outcomeSubtitle="FreelanceFlow is a product-focused dashboard experience that consolidates projects, invoices, and time tracking into a single, structured system for freelancers."

          impact={[
            "Consolidated fragmented tools into a single workflow platform.",
            "Improved clarity and efficiency across project, invoice, and time tracking flows.",
            "Designed a scalable dashboard system ready for future product expansion."
          ]}

          client={{
            title: "FreelanceFlow",
            image: "/images/freelanceflow_Client Dashbaord.jpg",
          }}

          targetAudience="Freelancers, consultants, and independent professionals managing multiple clients, projects, invoices, and time tracking across disconnected tools."

          problem="Freelancers often rely on multiple tools to manage projects, invoices, and time tracking. This fragmentation leads to poor visibility, inefficient workflows, and increased cognitive load when switching between systems. Existing solutions either lack flexibility or are overly complex for everyday freelance use."

          role="I led the end-to-end product design and frontend implementation, including UX strategy, user flows, dashboard architecture, UI design, and responsive development using React and Tailwind."

          goals={{
            business:
              "Provide a centralized platform that improves freelancer productivity and reduces reliance on multiple tools.",
            design:
              "Create a clear, structured dashboard experience that simplifies complex workflows and improves usability.",
            tech:
              "Build a scalable frontend architecture using React with reusable components and modular design patterns."
          }}

          techStack={[
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
            "Socket.IO",
          ]}

          accessibility={[
            "Maintained strong color contrast for readability across dashboard views.",
            "Designed clear hierarchy and spacing to improve scanability of data-heavy interfaces.",
            "Ensured responsive layouts for desktop and mobile usage.",
            "Used consistent interaction patterns to reduce cognitive load."
          ]}

          processSteps={[
            {
              title: "Research & Workflow Analysis",
              description:
                "I studied how freelancers currently manage their work and identified inefficiencies caused by tool fragmentation. Common pain points included switching between apps, lack of visibility into project status, and confusion around invoicing and time tracking. This helped define the need for a unified workflow system.",
            },
            {
              title: "Information Architecture & System Design",
              description:
                "I designed a structured system connecting projects, tasks, invoices, and time tracking into a single platform. The focus was on creating logical relationships between features while keeping navigation simple and predictable.",
            },
            {
              title: "Wireframing & Dashboard UX",
              description:
                "I created wireframes focused on dashboard clarity, prioritization of information, and reducing cognitive overload. Key decisions included modular layouts, clear data grouping, and consistent navigation patterns.",
            },
            {
              title: "UI Design & Component System",
              description:
                "I developed a scalable UI system with reusable components, consistent spacing, and clear visual hierarchy. The design focused on readability, usability, and supporting data-heavy workflows without overwhelming the user.",
            },
            {
              title: "Frontend Implementation",
              description:
                "I translated the designs into a responsive React application using Tailwind CSS. I focused on performance, consistency, and building reusable components that align with the design system.",
              image: "/images/freelancceflow_Signin.jpg",
            },
          ]}

          finalImages={[
            "/images/freelanceflow_Client-Post-a-Job-Step1.jpg",
            "/images/freelanceflow_Freelancer-Browse-Job.jpg",
            "/images/freelnceflow_Client-Post-a-Job-Step5.jpg",
          ]}

          takeaways={[
            "Simplifying workflows significantly improves productivity and reduces cognitive load.",
            "Clear system architecture is essential when designing data-heavy products.",
            "Designing with scalability in mind makes future feature expansion easier.",
            "Bridging design and development improves execution quality and consistency."
          ]}

          liveDemoUrl="#"
          viewCodeUrl="#"
        />
      </main>

      <ConnectSection />
      <Footer />
    </>
  );
}
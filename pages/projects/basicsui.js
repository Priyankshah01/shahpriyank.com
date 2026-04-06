import Footer from "../../components/Footer";
import ConnectSection from "../../components/ConnectSection";
import ProjectIntro from "../../components/ProjectIntro";

export default function BasicsPage() {
  return (
    <>
      <main>
        <ProjectIntro
          heroImg="/images/Basics-ui2.jpg"
          services="Design Systems · UI Design · Accessibility · Developer Experience"
          date="June 2024"
          agency="Self-Initiated Project"
          outcomeTitle="Designing a lightweight UI system to improve speed, consistency, and developer handoff."
          outcomeSubtitle="Basics UI is a minimal design system built to help designers and developers prototype faster while maintaining accessibility, visual consistency, and implementation clarity."
          impact={[
            "Created a reusable foundation for faster MVP design and product exploration.",
            "Improved consistency across interface patterns through a lean token-based system.",
            "Reduced design-to-development friction with clearer component logic and documentation.",
          ]}
          client={{
            title: "Basics UI",
            image: "/images/Basics-ui3.jpg",
          }}
          targetAudience="Freelance designers, frontend developers, and lean product teams working on MVPs, internal tools, and early-stage products that need speed, flexibility, and consistency."
          problem="Many UI kits are either too opinionated, visually heavy, or difficult to adapt as product needs evolve. For teams trying to move quickly, this creates unnecessary friction: systems become bloated, customization slows momentum, and accessibility is often treated as an afterthought instead of a core design principle."
          role="This was a self-initiated end-to-end systems design project. I defined the design system strategy, planned the component architecture, created the token structure, designed and tested reusable patterns, and refined the system through feedback from designers and developers."
          goals={{
            business:
              "Create a lightweight and adaptable UI foundation that helps teams prototype faster and scale more consistently across product ideas.",
            design:
              "Build a clean, minimal, and accessible system that supports visual consistency without forcing a rigid visual style.",
            tech:
              "Establish reusable tokens, component behavior, and documentation that make implementation faster and easier for developers.",
          }}
          techStack={[
            "Figma",
            "Design Tokens",
            "Auto Layout",
            "Variants",
            "Component Documentation",
            "Responsive States",
          ]}
          accessibility={[
            "Built accessible color contrast and interaction states into the system from the start.",
            "Considered focus visibility and keyboard interaction across foundational components.",
            "Used clear spacing, typography, and hierarchy to improve readability and scanability.",
            "Designed the system to support both light and dark themes without compromising usability.",
          ]}
          processSteps={[
            {
              title: "Research & Opportunity Mapping",
              description:
                "I reviewed systems such as Tailwind UI, Radix Primitives, and Chakra UI to understand where current tools were effective and where they introduced friction. While many were powerful, they often required heavy setup or imposed stylistic defaults that reduced flexibility. I also spoke with freelance designers and frontend developers to understand what slows them down when moving from concept to usable interface.",
            },
            {
              title: "System Planning & Token Architecture",
              description:
                "I defined a lean component system focused on high-utility building blocks including buttons, inputs, dropdowns, tabs, modals, and foundational primitives. I paired these components with a token structure covering spacing, typography, color, radius, and state behavior so the system could remain minimal while still supporting scale and adaptability.",
            },
            {
              title: "UI Design & Validation",
              description:
                "I designed the component set in Figma using Auto Layout, variants, and reusable patterns to support flexibility and speed. Components were tested across light and dark themes, with close attention to interaction states, spacing rhythm, and readability. I shared early versions with developer peers to evaluate naming clarity, implementation logic, and handoff efficiency.",
            },
            {
              title: "Iteration Through Feedback",
              description:
                "After sharing the system with a small group of freelance designers and React developers, I refined spacing helpers, responsive behavior, and documentation clarity. This helped improve usability and adoption without unnecessarily expanding scope, resulting in a more focused system that supported both product exploration and smoother implementation.",
              image: "/images/Basics-ui5.jpg",
            },
          ]}
          finalImages={[
            "/images/Basics-ui5.jpg",
            "/images/Basics-ui4.jpg",
            "/images/Basics-ui1.jpg",
          ]}
          takeaways={[
            "Design tokens created a scalable foundation that made it easier to maintain consistency and support future expansion.",
            "Accessibility was more effective when treated as a system-level design decision instead of a final QA checklist.",
            "Feedback from both designers and developers helped keep the system practical, lean, and implementation-friendly.",
            "This project reinforced how strong systems thinking can improve both user experience quality and team efficiency.",
          ]}
        />
      </main>

      <ConnectSection />
      <Footer />
    </>
  );
}
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

          outcomeTitle="Designing a minimal UI system for faster prototyping, stronger consistency, and better developer handoff."
          outcomeSubtitle="Basics UI is a lightweight design system created to help designers and developers move quickly without sacrificing accessibility, flexibility, or visual clarity."

          impact={[
            "Created a scalable foundation for rapid product exploration and MVP design.",
            "Improved consistency across components through a lean token-based system.",
            "Reduced friction between design and development with clearer patterns and reusable logic."
          ]}

          client={{
            title: "Basics UI",
            image: "/images/Basics-ui3.jpg",
          }}

          targetAudience="Freelance designers, frontend developers, and lean product teams working on MVPs, internal tools, and early-stage digital products that need speed, consistency, and room for customization."

          problem="Many existing UI kits are either too opinionated, visually heavy, or difficult to adapt to evolving product needs. For teams trying to move quickly, this creates friction: design systems can feel bloated, customization becomes harder than expected, and accessibility is often treated as an afterthought rather than a built-in foundation."

          role="This was a self-initiated end-to-end systems design project. I defined the system strategy, designed the component library, built the token structure, tested the patterns with real users, and refined the system based on feedback from designers and developers."

          goals={{
            business:
              "Create a lightweight and adaptable UI foundation that helps teams prototype faster and scale more consistently across product ideas.",
            design:
              "Design a clean, minimal, and accessible system that supports visual consistency without forcing a rigid aesthetic.",
            tech:
              "Establish reusable tokens, component logic, and interaction patterns that make handoff and implementation faster for developers."
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
            "Planned accessible color contrast and interaction states from the beginning.",
            "Considered keyboard accessibility and focus visibility across core components.",
            "Used clear spacing, typography, and visual hierarchy to improve scanability.",
            "Designed for both light and dark themes without compromising readability."
          ]}

          processSteps={[
            {
              title: "Competitive Research & Opportunity Mapping",
              description:
                "I started by reviewing systems such as Tailwind UI, Radix Primitives, and Chakra UI to understand where current tools were strong and where they introduced friction. While many were powerful, they often required heavy setup or imposed stylistic defaults that limited flexibility. I also spoke with freelance designers and developers to understand what slows them down when moving from idea to usable interface."
            },
            {
              title: "System Planning & Token Architecture",
              description:
                "I defined a lean system focused on high-utility building blocks: buttons, inputs, dropdowns, tabs, modals, and foundational primitives. I paired these with a token structure covering color, spacing, typography, radius, and state behavior. The goal was to create a system that felt intentionally minimal while still supporting consistency, scalability, and adaptation across different product contexts."
            },
            {
              title: "UI Design & Prototype Validation",
              description:
                "I designed the component set in Figma using Auto Layout, variants, and reusable patterns to ensure flexibility. Components were tested in both light and dark modes, with special attention to spacing rhythm, interactive states, and readability. I shared early versions with developer peers to evaluate integration speed and identify pain points in naming, structure, and behavior."
            },
            {
              title: "Iteration Through Real Feedback",
              description:
                "After sharing the system with a small group of freelance designers and React developers, I refined spacing helpers, responsive behavior, and documentation clarity. This feedback helped improve adoption without expanding the system unnecessarily. The result was a more focused design system that supported both product exploration and smoother developer handoff.",
              image: "/images/Basics-ui5.jpg",
            },
          ]}

          finalImages={[
            "/images/Basics-ui5.jpg",
            "/images/Basics-ui4.jpg",
            "/images/Basics-ui1.jpg",
          ]}

          takeaways={[
            "Design tokens created a strong foundation for scale, making it easier to support themes, consistency, and future expansion.",
            "Accessibility became more effective when treated as a system-level decision rather than a final checklist.",
            "Early feedback from designers and developers helped keep the system lean, practical, and implementation-friendly.",
            "This project reinforced how strong systems thinking can improve both user experience and team efficiency."
          ]}
        />
      </main>

      <ConnectSection />
      <Footer />
    </>
  );
}
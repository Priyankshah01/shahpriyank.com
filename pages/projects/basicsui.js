// pages/projects/basicsui.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ConnectSection from "../../components/ConnectSection";
import ProjectIntro from "../../components/ProjectIntro";

export default function BasicsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectIntro
          heroImg="/images/Basics-ui2.jpg"
          services="Design Systems, UI Design, Developer Experience"
          date="June 2024"
          agency="Self-Initiated Project"
          outcomeTitle="Basics UI: A Minimal UI System for Fast, Accessible Prototyping"
          outcomeSubtitle="A lightweight, unopinionated UI foundation built for rapid product exploration and scalability."

          client={{
            title: "Internal / Personal Project",
            image: "/images/Basics-ui3.jpg",
          }}

          targetAudience="Freelance designers, frontend developers, and lean startup teams working on MVPs or early-stage ideas."

          problem="Most UI kits available today are either overly opinionated, visually heavy, or difficult to customize—especially when you want to experiment quickly without sacrificing consistency or accessibility."

          role="This was a solo effort. I conceptualized, designed, and documented the entire system—from component planning and Figma design to building out tokens and receiving feedback from real users."

          processSteps={[
            {
              title: "Competitive Research & Analysis",
              description:
                "I began by analyzing existing design systems like Tailwind UI, Radix Primitives, and Chakra UI. While powerful, many of them required deep setup or imposed visual styles that made branding feel generic. My goal: simplicity + flexibility, out of the box. I also interviewed 5 freelancers about what they struggle with during MVP design. Their insights guided the early scope.",
            },
            {
              title: "System Planning & Token Setup",
              description:
                "I mapped out a lean component library that focused on high-utility elements: buttons, inputs, dropdowns, modals, and tabs. Each component was supported by a token system (colors, spacing, typography, radii) designed to be platform-agnostic. Accessibility was a first-class citizen — every component met WCAG 2.1 standards from the start.",
            },
            {
              title: "UI Prototyping & Testing",
              description:
                "I built all components in Figma using auto layout, variants, and tokens. Each design was also tested in light and dark modes. I shared early versions with developer peers to test integration speed. Their feedback helped me tweak spacing logic, token structure, and interactive states like hover/focus. One key goal was to make handoff to devs seamless.",
            },
            {
              title: "Iteration Based on Real Feedback",
              description:
                "I released the system to a small Slack group of freelance designers and React devs. They loved the clarity and minimalism. Based on their feedback, I added spacing helpers, responsive states, and refined the documentation. This led to better adoption and satisfaction without bloating the system.",
              image: "/images/Basics-ui5.jpg",
            },
          ]}

          finalImages={[
            "/images/Basics-ui5.jpg",
            "/images/Basics-ui4.jpg",
            "/images/Basics-ui1.jpg"  ,
          ]}

          takeaways={[
            "🎯 Design Tokens Create Scale: Using tokens allowed me to easily update themes, support dark mode, and scale across platforms with zero visual drift.",
            "♿ Accessibility From Day 1: Planning for keyboard navigation and color contrast early on saved time and improved usability dramatically.",
            "🧪 Feedback = Focus: Real feedback from freelancers and devs helped me avoid scope creep and improve developer experience (DX) from the start.",
          ]}
        />
      </main>
      <ConnectSection />
      <Footer />
    </>
  );
}

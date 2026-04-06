import Footer from "../../components/Footer";
import ConnectSection from "../../components/ConnectSection";
import ProjectIntro from "../../components/ProjectIntro";

export default function LegoStepFinderPage() {
  return (
    <>
      <main>
        <ProjectIntro
          heroImg="/images/lego-step-finder-hero.jpg"
          services="Interaction Design · UI Design · Frontend Development · UX Writing"
          date="2025"
          agency="Personal Project"

          outcomeTitle="Designing a playful interaction-led web experience around a universally relatable pain point."
          outcomeSubtitle="LEGO Step Finder is a micro-interaction-driven web app that turns the familiar experience of stepping on LEGO into a humorous, highly engaging digital interaction."

          impact={[
            "Used playful interaction design and microcopy to create a memorable, high-engagement user experience.",
            "Demonstrated how motion, feedback, and tone of voice can strengthen a simple product concept.",
            "Combined UX writing, animation, and frontend execution into a compact but polished interactive build."
          ]}

          client={{
            title: "LEGO Step Finder",
            image: "/images/lego-step-finder-style.jpg",
          }}

          targetAudience="Casual web users, LEGO fans, meme audiences, and users who enjoy playful digital experiences with strong humor and interaction feedback."

          problem="Many novelty websites are entertaining for a moment but lack strong interaction design, visual polish, or a cohesive experience. I wanted to explore how humor, micro-interactions, and frontend craft could turn a simple joke into a more memorable and shareable product experience."

          role="This was a solo design and development project. I handled concept creation, UX writing, interface design, interaction design, prototyping, animation direction, and frontend implementation."

          goals={{
            business:
              "Create a memorable and shareable interactive experience that holds attention and encourages repeat engagement.",
            design:
              "Use humor, motion, and feedback to create a lightweight but polished interface that feels intentionally crafted rather than randomly playful.",
            tech:
              "Build a responsive frontend experience with interactive controls, animation, and fast feedback loops."
          }}

          techStack={[
            "Figma",
            "HTML",
            "CSS",
            "JavaScript",
            "Lottie",
            "GitHub Pages",
          ]}

          accessibility={[
            "Maintained readable contrast and clear hierarchy across the interface.",
            "Used simple controls and visible feedback states to support usability.",
            "Designed lightweight layouts that remain understandable across screen sizes.",
            "Balanced humor with clarity so interactions stayed intuitive."
          ]}

          processSteps={[
            {
              title: "Concept & Research",
              description:
                "I explored the cultural familiarity of the “stepping on LEGO” joke and reviewed meme formats, pain-scale humor, and novelty website patterns to understand what makes a playful concept feel engaging rather than disposable. The goal was to identify a tone and interaction model that could turn a joke into a cohesive digital experience."
            },
            {
              title: "Interaction Design & Prototyping",
              description:
                "I mapped the core flow around user input, humorous calculation, and immediate feedback. In Figma, I prototyped the interaction pattern using sliders, playful copy, and response states to test pacing and emotional payoff. This phase focused on making the experience feel fast, entertaining, and easy to understand."
            },
            {
              title: "Motion & Feedback Exploration",
              description:
                "I tested multiple approaches for the central foot-stomp moment, exploring timing, exaggerated movement, and sound-driven feedback. The aim was to make the interaction feel expressive without becoming visually noisy or distracting."
            },
            {
              title: "UI Design & Frontend Build",
              description:
                "I translated the concept into a lightweight frontend build using HTML, CSS, and JavaScript. I focused on responsive behavior, animation timing, and microcopy polish so that the interface felt intentionally designed despite the playful concept."
            },
          ]}

          finalImages={[
            "/images/lego-step-finder-wifreframe.jpg",
            "/images/lego-step-finder-design.jpg",
            "/images/lego-step-finder-hero.jpg",
          ]}

          takeaways={[
            "Strong microcopy and interaction feedback can make even a simple concept feel distinctive and memorable.",
            "Playful products still benefit from clear structure, visual hierarchy, and intentional pacing.",
            "Micro-interactions are most effective when they reinforce the tone of the experience rather than acting as decoration.",
            "This project reinforced my interest in combining humor, UX writing, and frontend craft to create engaging digital moments."
          ]}

          liveDemoUrl="https://priyankshah01.github.io/LEGO-Step-Finder/"
          viewCodeUrl="https://github.com/Priyankshah01/LEGO-Step-Finder"
        />
      </main>

      <ConnectSection />
      <Footer />
    </>
  );
}
// pages/projects/giftelle.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ConnectSection from "../../components/ConnectSection";
import ProjectIntro from "../../components/ProjectIntro";

export default function GiftellePage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectIntro
          heroImg="/images/Giftelle-ui1.jpg"
          outcomeTitle="Giftelle: Personalized Gifting. Simplified."
          outcomeSubtitle="An intuitive platform for discovering meaningful gifts without the stress."
                    client={{
            title: "HRXConnect",
            image: "/images/Giftelle-ui2.jpg",
          }}
          targetAudience="Busy individuals looking for curated and thoughtful gift options."
          problem="People often struggle to find unique, thoughtful gifts quickly due to time constraints and overwhelming choices."
          role="I led the full UX process—from research to UI design to visual branding and handoff."
          processSteps={[
            {
              title: "Research",
              description:
                "Conducted surveys and interviews to uncover user frustrations in gift shopping. Competitor audit and persona creation informed direction.",
            },
            {
              title: "Planning",
              description:
                "Mapped out key user flows and defined core features that supported a personalized gift discovery experience.",
            },
            {
              title: "Prototyping",
              description:
                "Designed high-fidelity wireframes and interactive prototypes in Figma, incorporating user feedback after usability tests.",
            },
            {
              title: "Refinement",
              description:
                "Iterated visual design, typography, and interaction based on peer and mentor feedback, then prepared developer handoff assets.",
            },
          ]}
          finalImages={[
            "/images/Giftelle-ui1.jpg",
            "/images/Giftelle-ui2.jpg",
            "/images/Giftelle-ui3.jpg",
          ]}
          takeaways={[
            "Personalization is key—users prefer fewer but more relevant options.",
            "Clear visual hierarchy dramatically improves engagement.",
            "Early testing helped me avoid major usability pitfalls.",
          ]}
        />
      </main>
      <ConnectSection />
      <Footer />
    </>
  );
}

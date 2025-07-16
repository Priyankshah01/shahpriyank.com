import ProjectIntro from '../../components/ProjectIntro';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ConnectSection from "../../components/ConnectSection";

export default function GiftelleProject() {
  return (

<>
      <Navbar />
    <main>
      <ProjectIntro
        title="Giftelle"
        subtitle="Curated Gifting Platform"
        overview="Giftelle is a curated online gifting platform..."
        services="UX/UI Design, Responsive Design"
        agency="Independent / Capstone"
        toolsUsed={["Figma", "Framer", "Photoshop"]}
        whatwasmyrole="I led the full UX process and UI design."
        images={[
          "/images/Giftelle-ui1.jpg",
          "/images/Giftelle-ui2.jpg",
          "/images/Giftelle-ui3.jpg"
        ]}
        problem="People often struggle to find meaningful gifts quickly..."
        designProcess="I started with competitive research and interviews..."
        solution="A guided product experience that filters gift options..."
        conclusion="This was one of my proudest projects because..."
      />
    </main>

          <ConnectSection />

      <Footer />
    </>
  );
}

import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";

export default function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects | Priyank Shah, Product Designer"
        description="Case studies by Priyank Shah: product work from Walmart and AlayaCare, plus the BASICS shopping app, the Giftelle gifting marketplace and the FreelanceFlow freelance platform, with research and usability results."
        image="/og/projects.jpg"
      />
      <Projects />
      <Footer />
    </>
  );
}

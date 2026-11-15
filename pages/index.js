import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import HowIWork from "../components/HowIWork";
import Playground from "../components/Playground";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

// Navbar is rendered once in pages/_app.js.
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <HowIWork />
      <Playground />
      <Experience />
      <Footer />
    </>
  );
}

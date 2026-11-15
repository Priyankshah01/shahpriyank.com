import { useRouter } from "next/router";
import Hero from "../components/Hero";
import HeroWork from "../components/heroes/HeroWork";
import HeroEditorial from "../components/heroes/HeroEditorial";
import HeroPortrait from "../components/heroes/HeroPortrait";

// TEMP: preview hero options with ?hero=b|c|d
const heroes = { b: HeroWork, c: HeroEditorial, d: HeroPortrait };
import FeaturedWork from "../components/FeaturedWork";
import HowIWork from "../components/HowIWork";
import Playground from "../components/Playground";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

// Navbar is rendered once in pages/_app.js.
export default function HomePage() {
  const { query } = useRouter();
  const ActiveHero = heroes[query.hero] || Hero;
  return (
    <>
      <ActiveHero />
      <FeaturedWork />
      <HowIWork />
      <Playground />
      <Experience />
      <Footer />
    </>
  );
}

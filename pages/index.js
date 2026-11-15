import { useRouter } from "next/router";
import Hero from "../components/Hero";
import HeroWork from "../components/heroes/HeroWork";
import HeroEditorial from "../components/heroes/HeroEditorial";
import HeroPortrait from "../components/heroes/HeroPortrait";
import HeroBento from "../components/heroes/HeroBento";
import HeroSplit from "../components/heroes/HeroSplit";
import HeroRotating from "../components/heroes/HeroRotating";

// TEMP: preview hero options with ?hero=b|c|d|e|f|g
const heroes = {
  b: HeroWork,
  c: HeroEditorial,
  d: HeroPortrait,
  e: HeroBento,
  f: HeroSplit,
  g: HeroRotating,
};
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

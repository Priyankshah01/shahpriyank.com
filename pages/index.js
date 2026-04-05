import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About'
import Projects from '../components/Projects'
import ConnectSection from "../components/ConnectSection";
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function HomePage() {
  return (
    <main>
      <Navbar />
       <Hero />
      <Reveal delay={0.05}>
        <Projects />
      </Reveal>
      <Reveal delay={0.08}>
        <About />
      </Reveal>
      <Reveal delay={0.1}>
        <ConnectSection />
      </Reveal>
      <Footer />
    </main>
  )
}

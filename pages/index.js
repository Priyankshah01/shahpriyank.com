import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About'
import Projects from '../components/Projects'
import ConnectSection from "../components/ConnectSection";
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <ConnectSection />
      <Footer />
    </main>
  )
}

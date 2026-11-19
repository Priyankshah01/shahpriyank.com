import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import HowIWork from "../components/HowIWork";
import Playground from "../components/Playground";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Seo, { SITE_URL } from "../components/Seo";

// Structured data that tells search engines who this site belongs to and
// links it to the same person's profiles elsewhere.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Priyank Shah",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/images/Me.jpg`,
  jobTitle: "Product Designer & Design Engineer",
  worksFor: { "@type": "Organization", name: "Walmart" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  knowsAbout: ["Product design", "UX research", "Usability testing", "Design systems", "React", "Next.js"],
  sameAs: [
    "https://www.linkedin.com/in/shah-priyank/",
    "https://www.behance.net/priyankshah0101",
    "https://dribbble.com/Priyank7",
  ],
};

// Navbar is rendered once in pages/_app.js.
export default function HomePage() {
  return (
    <>
      <Seo imageAlt="Priyank Shah, product designer and design engineer in Toronto">
        <script
          key="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </Seo>
      <Hero />
      <FeaturedWork />
      <HowIWork />
      <Playground />
      <Experience />
      <Footer />
    </>
  );
}

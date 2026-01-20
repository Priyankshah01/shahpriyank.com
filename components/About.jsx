import Image from "next/image";
import skills from "../data/skills";
// import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.wrapper} id="about">
      {/* LEFT IMAGE */}
      <div className={styles.left}>
        <Image
          src="/priyank.jpg"
          alt="Priyank portrait"
          fill
          priority
          className={styles.image}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className={styles.right}>
        <span className={styles.label}>[ABOUT]</span>

        {/* BIG HEADLINE */}
        <h1 className={styles.title}>
          Hi, I’m Priyank — with a developer’s logic and a designer’s heart.
          I craft digital experiences that feel intuitive, look beautiful,
          and perform effortlessly.
        </h1>

        {/* TWO-COLUMN INFO (matches image) */}
        <div className={styles.columns}>
          {/* LEFT COLUMN */}
          <div>
            <h3 className={styles.columnTitle}>MY LIFE</h3>
            <p>
              My journey includes freelancing, co-op roles, and academic
              recognition in Design and Development. I enjoy solving complex
              problems through thoughtful interfaces and clean systems.
            </p>

            <div className={styles.skillCloud}>
              {skills.map((skill, index) => (
                <span key={index} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <h3 className={styles.columnTitle}>BUSINESS</h3>
            <p>
              I’ve worked with startups and organizations like HRX Connect,
              CanSTEM, and WebClues Infotech — redesigning dashboards,
              marketing websites, and digital products that support growth
              and usability.
            </p>

            <ul className={styles.experience}>
              <li><strong>HRX Connect</strong> — Internal dashboards & marketing</li>
              <li><strong>CanSTEM</strong> — Website & student portal redesign</li>
              <li><strong>WebClues</strong> — Client web & mobile products</li>
            </ul>
          </div>
        </div>

        {/* FOOTER (matches image placement) */}
        <div className={styles.footer}>
          <div className={styles.socials}>
            <span>IG</span>
            <span>TT</span>
            <span>IN</span>
            <span>X</span>
          </div>

          <button className={styles.cta} disabled>
            Unavailable →
          </button>
        </div>
      </div>
    </section>
  );
}

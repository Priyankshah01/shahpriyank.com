import React from 'react';
// import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-top">
        <div className="hero-left">
          <div className="symbol">🍁</div>
          <h1>
            I'm Priyank Shah, a Toronto-based UI/UX Developer, <br />
            focused on building user-centered web apps using  <br />
            Figma, React, and HTML/CSS.
          </h1>
          <div className="experience-showcase">
            <div className="logo-carousel">
              <img src="/logos/jvs_logo.jpeg" alt="Humber" />
              <img src="/logos/codezeros_logo.jpeg" alt="Figma" />
              <img src="/logos/webclues_infotech_logo.jpeg" alt="Capco" />
              <img src="/logos/canstem_logo.svg" alt="Lululemon" />
              <img src="/logos/humber_logo.webp" alt="Unity" />
            </div>
            <div className="experience-tagline">
              <p>
                4+ years designing in eCommerce<br />
                Gaming, Finance, Telecom
              </p>
            </div>
          </div>

        </div>

        <div className="hero-right">
          <img src="/images/Me.jpg" alt="Professional" className="profile-img" />
        </div>
      </div>

      <div className="hero-bottom">
        <div>
          <p>Freelance</p>
          <p>Digital Designer/Developer</p>
        </div>
        <div>
          <p>Based in</p>
          <p>Toronto</p>
        </div>
        <div>
          <p>Get in touch</p>
          <p><strong><a href="mailto:priyankshah0101@gmail.com">priyankshah0101@gmail.com</a></strong></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

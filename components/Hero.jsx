import React from 'react';
import TiltedCard from './TiltedCard';



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
              <div className="logo-tooltip" data-tooltip="JVS Technologies">
                <img src="/logos/jvs_logo.jpg" alt="JVS" />
              </div>
              <div className="logo-tooltip" data-tooltip="Codezeros">
                <img src="/logos/codezeros_logo.jpg" alt="Codezeros" />
              </div>
              <div className="logo-tooltip" data-tooltip="Webclues Infotech">
                <img src="/logos/webclues_infotech_logo.jpg" alt="webclues" />
              </div>
              <div className="logo-tooltip" data-tooltip="Humber">
                <img src="/logos/humber_logo.jpg" alt="humber" />
              </div>
              <div className="logo-tooltip" data-tooltip="Canstem">
                <img src="/logos/canstem_logo.jpg" alt="canstem" />
              </div>
            </div>
            <div className="experience-tagline">
              <p>
                4+ years in eCommerce · Gaming ·<br /> Finance · Telecom

              </p>
            </div>
          </div>

        </div>

        <div className="hero-right">
          <TiltedCard
            imageSrc="/images/Me.jpg"
            altText="Priyank Shah - UI/UX Developer"
            captionText="Priyank Shah - UI/UX Developer"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
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


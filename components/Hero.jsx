import React from 'react';
// import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-top">
        <div className="hero-left">
          <div className="symbol">🍁</div>
          <h1>
            Toronto based digital designer and developer crafting, <br />
            human-focused digital experiences for a range <br />
            of forward–thinking brands.
          </h1>
          <div>
            <a href="/files/Priyank_Resume.pdf" download className="button-resume">
              Download Resume
            </a>
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
          <p><strong>hello@priyankshah.design</strong></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from "react";
import { motion } from "motion/react";
import TiltedCard from "./TiltedCard";
import DarkVeil from "./DarkVeil";
import ConnectModal from "./ConnectModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-80">
          <DarkVeil />
        </div>

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-[140px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-10 pt-32 md:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-full mb-6 text-sm uppercase tracking-[0.25em] text-white/55"
              >
                UI/UX Designer · Web Designer · Frontend Developer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-5xl font-semibold leading-[0.92] tracking-tight md:text-7xl xl:text-[5.5rem]"
              >
                Designer's eye.{" "}
                <span className="bg-gradient-to-t from-black-00 to-purple-700 bg-clip-text text-transparent">Developer's logic.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
              >
                I’m Priyank Shah, a Toronto-based UI/UX Designer and Frontend
                Developer crafting modern interfaces, scalable product workflows,
                and immersive web experiences with Figma, React, and thoughtful
                interaction design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <a
                  href="/projects"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  View Projects
                </a>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  Let’s Connect
                </button>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-12 flex flex-wrap gap-3"
              >
                {["Figma", "React", "Next.js", "Design Systems", "SaaS UX"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  )
                )}
              </motion.div> */}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-6 rounded-[2rem] bg-white/10 blur-3xl" />

                <div className="relative">
                  <TiltedCard
                    imageSrc="/images/Me.jpg"
                    altText="Priyank Shah"
                    captionText="Priyank Shah"
                    containerHeight="380px"
                    containerWidth="320px"
                    imageHeight="380px"
                    imageWidth="320px"
                    rotateAmplitude={10}
                    scaleOnHover={1.08}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.85 }}
                    className="absolute -left-6 top-6 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md"
                  >
                    Toronto, Canada
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.95 }}
                    className="absolute -right-6 top-20 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md"
                  >
                    4+ Years Experience
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.05 }}
                    className="absolute -left-8 bottom-16 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md"
                  >
                    Product + Visual Design
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.15 }}
                    className="absolute right-0 -bottom-6 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md"
                  >
                    Frontend Craft
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-20 grid gap-6 border-t border-white/10 pt-8 text-sm md:grid-cols-4"
          >
            <div>
              <p className="mb-2 text-white/40">Experience</p>
              <p className="font-medium text-white/90">
                4+ years across digital products
              </p>
            </div>

            <div>
              <p className="mb-2 text-white/40">Industries</p>
              <p className="font-medium text-white/90">
                eCommerce · Gaming · Finance · Telecom
              </p>
            </div>

            <div>
              <p className="mb-2 text-white/40">Based in</p>
              <p className="font-medium text-white/90">Toronto, ON</p>
            </div>

            <div>
              <p className="mb-2 text-white/40">Email</p>
              <a
                href="mailto:priyankshah0101@gmail.com"
                className="font-medium text-white/90 underline-offset-4 hover:underline"
              >
                priyankshah0101@gmail.com
              </a>
            </div>
          </motion.div> */}
        </div>
      </section>

      <ConnectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Hero;
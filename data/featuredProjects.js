const featuredProjects = [
  {
    slug: "freelanceflow",
    title: "FreelanceFlow",
    category: "Product Design",
    date: "2025-01-01",
    status: "Capstone Project",
    image1: "freelanceflowhero.jpg",
    shortDescription:
      "A two-sided freelance marketplace covering the full hire-to-pay loop, from posting a job to secure payment, designed and built end to end.",
    tags: ["Marketplace", "UX Research", "React"],
    stat: "84% task success · SUS 76",
    previewBg: "#F4F5FA",
    previews: [
      { src: "freelanceflowhero.jpg" },
      { src: "freelanceflow/post-job.webp" },
      { src: "freelanceflow/browse.webp" },
      { src: "freelanceflow/dashboard.webp" },
    ],
  },
  {
    slug: "giftelle",
    title: "Giftelle",
    category: "UX/UI Design",
    date: "2024-09-01",
    status: "Case Study",
    image1: "giftelle/hero.webp",
    shortDescription:
      "Reduced decision fatigue through guided gift discovery and personalized recommendations.",
    tags: ["Research", "UI Design", "Personalization"],
    stat: "Confidence 2.8 → 4.3 out of 5",
    previewBg: "#EADBD3",
    previews: [
      { src: "giftelle/hero.webp" },
      { src: "giftelle/quiz-interests.webp", fit: "contain" },
      { src: "giftelle/results.webp", fit: "contain" },
      { src: "giftelle/vendor-order.webp" },
    ],
  }, 
    {
    slug: "basicsui",
    title: "BASICS",
    category: "Mobile App · E-commerce",
    date: "2024-06-01",
    status: "Client Project",
    image1: "Basics-ui2.jpg",
    shortDescription:
      "A mobile shopping app for an essentials clothing brand: 55 screens, a token-based design system and usability testing that fixed checkout.",
    tags: ["Mobile UX", "Design System", "Usability Testing"],
    stat: "87% task success · SUS 74",
    previewBg: "#EDEDED",
    previews: [
      { src: "Basics-ui2.jpg" },
      { src: "basics/home.webp", fit: "contain" },
      { src: "basics/after-checkout.webp", fit: "contain" },
      { src: "basics/after-pdp.webp", fit: "contain" },
    ],
  },
  {
  slug: "lego",
  title: "LEGO Step Finder",
  category: "Interaction Design",
  date: "2025-01-01",
  status: "Frontend Experiment",
  image1: "lego-step-finder-hero.jpg",
  shortDescription:
    "Turned a simple joke concept into a polished interaction-led web experience using motion, microcopy, and playful frontend feedback.",
  tags: ["Interaction Design", "Frontend", "Microcopy", "Motion"],
  previews: [
    { src: "lego-step-finder-hero.jpg" },
    { src: "lego-step-finder-wifreframe.jpg" },
    { src: "lego-step-finder-design.jpg" },
    { src: "lego-step-finder-style.jpg" },
  ],
},
  // {
  //   title: "Portfolio Admin CMS",
  //   slug: "portfolio-cms",
  //   image1: "portfolio-cms-cover.jpg",
  //   date: "2025-04-01",
  //   status: "Admin CMS",
  // },
 
  // {
  //   slug: "portfolio-cms",
  //   title: "Portfolio CMS",
  //   image1: "portfolio-cms/cover.jpg",
  //   createdAt: "2025-08-10",
  //   status: "Design + Development",
  //   shortDescription:
  //     "A custom CMS-driven portfolio system built to manage project content, case studies, and frontend presentation efficiently.",
  //   tags: ["CMS", "UI Design", "Express", "MongoDB"],
  // },
];

export default featuredProjects;

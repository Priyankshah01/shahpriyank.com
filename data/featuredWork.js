// Professional work shown as the lead case studies on the home page.
//
// `result` and `decision` are optional: leave them null and the row is hidden.
// Fill them in with real content once you have it. A todo("...") value renders
// as a visible dashed-amber placeholder, for drafting only (don't publish one).

export const todo = (hint) => ({ todo: hint });

const featuredWork = [
  {
    id: "walmart",
    company: "Walmart",
    period: "Feb 2025 — Present",
    role: "UI/UX Designer & Frontend Developer",
    title: "Redesigning the commerce journey, from listing to checkout",
    summary:
      "Redesigned product listing, cart, checkout and account flows across a multi-category e-commerce platform, then built them as responsive React components. Created the shared design system that keeps 40+ screens consistent in Figma and in code.",
    highlights: [
      "Worked from wireframes through to production React on listing, cart and checkout",
      "One design system across 40+ screens, in Figma and as reusable React components",
      "Reviewed builds against the design with backend and QA teams to close the gaps",
    ],
    // e.g. "Checkout completion up X%" or "Design system adopted by N teams"
    result: null,
    // e.g. "Cut checkout from 4 steps to 2 because…"
    decision: null,
    scope: [
      "Product listing",
      "Cart & checkout",
      "Design system · 40+ screens",
      "React implementation",
    ],
    href: null, // set to "/projects/walmart" once the case-study page exists
  },
  {
    id: "alayacare",
    company: "AlayaCare",
    period: "Dec 2023 — Feb 2025",
    role: "UI/UX Designer",
    title: "Making appointment booking work for patients and clinic staff",
    summary:
      "Redesigned doctor search and appointment booking for patients and clinic staff. Grounded it in user interviews, personas and journey maps, then iterated through usability testing, with accessibility built in for elderly and first-time users.",
    highlights: [
      "User interviews, personas and journey maps before any screens",
      "Booking flows iterated on usability-testing feedback",
      "Designed for elderly and first-time users: readable type, contrast, simple patterns, custom icons",
    ],
    // e.g. "Testers went from X% to Y% task completion"
    result: null,
    // e.g. how you balanced what patients vs. clinic staff needed
    decision: null,
    scope: [
      "User interviews",
      "Usability testing",
      "Accessibility",
      "Developer handoff",
    ],
    href: null, // set to "/projects/alayacare" once the case-study page exists
  },
];

export default featuredWork;

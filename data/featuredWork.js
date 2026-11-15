// Professional work shown as the lead case studies on the home page.
//
// Any field wrapped in todo("...") is a PLACEHOLDER. It renders with a dashed
// amber outline so it's impossible to miss. Replace each one with real
// content (a plain string) before publishing.

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
    result: todo(
      "Your strongest outcome, e.g. “Checkout completion up X%” or “Design system adopted by N teams”"
    ),
    decision: todo(
      "One hard decision and why, e.g. “Cut checkout from 4 steps to 2 because…”"
    ),
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
    result: todo(
      "Your strongest outcome, e.g. “Testers went from X% to Y% task completion”"
    ),
    decision: todo(
      "One hard decision and why, e.g. how you balanced what patients vs. staff needed"
    ),
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

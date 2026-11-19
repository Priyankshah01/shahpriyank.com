import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import ProjectIntro from "../../components/ProjectIntro";
import {
  BeforeAfter,
  FindingsExplorer,
  FlowExplorer,
} from "../../components/case-study/Interactive";

// Content sourced from the FreelanceFlow UX case study file in Figma
// (Context, Requirements Doc, User Flows & Stories, Wireframes, Usability
// Testing, Design System and Hi-Fi pages). The usability results are real
// session results, confirmed by Priyank (the "SAMPLE DATA" labels in the
// Figma file are out of date).

const img = (name) => `/images/freelanceflow/${name}.webp`;

const Label = ({ children }) => (
  <p className="mb-6 font-mono text-xs uppercase tracking-[0.14em] text-white/45">{children}</p>
);

// The 9 usability findings and the design change each one led to.
const findings = [
  {
    finding: "Budget type (fixed vs hourly) unclear in Post a Job",
    evidence: "3 of 5 hesitated; 2 abandoned at step 4",
    severity: "High",
    change: "Segmented control with helper copy and example totals",
  },
  {
    finding: "Role choice at sign-up easy to miss",
    evidence: "2 of 5 signed up with the default role",
    severity: "High",
    change: "Role cards required with no default; selected state uses a brand tint and check",
  },
  {
    finding: "Proposal status not visible after submitting",
    evidence: "“Did it send?” (participant 2)",
    severity: "Medium",
    change: "Success alert, then redirect to My Proposals on the Pending tab",
  },
  {
    finding: "Escrow and payment safety not explained",
    evidence: "Clients asked when money is released",
    severity: "Medium",
    change: "Info alert on the payment screen: “Funds held in escrow until you approve”",
  },
  {
    finding: "Job filters reset on back navigation",
    evidence: "Repeated filtering during T2",
    severity: "Medium",
    change: "Filters persisted in the URL query parameters",
  },
  {
    finding: "Low-contrast placeholder text in inputs",
    evidence: "Raised by a low-vision participant",
    severity: "Medium",
    change: "Placeholder uses the muted text colour; labels always visible above fields",
  },
  {
    finding: "Icon-only actions in the dashboard",
    evidence: "Meaning unclear to 2 participants",
    severity: "Low",
    change: "Text labels and aria-labels added",
  },
  {
    finding: "Skill tags look clickable on job cards",
    evidence: "Participants tapped tags expecting a filter",
    severity: "Low",
    change: "Tags on the job detail page now filter Browse Jobs",
  },
  {
    finding: "“Hours worked” card ambiguous",
    evidence: "This week or all time?",
    severity: "Low",
    change: "Delta line states the period: “this month”",
  },
  ];

// Wireframe → hi-fi pairs exported from the Figma file (pages 04 and 07).
const comparisons = [
  {
  before: img("wire-signup"),
  after: img("signup"),
  alt: "Sign up",
  ratio: "1440 / 1180",
  caption: "Sign up: the role choice moved from two plain boxes to selectable cards with an icon and a one-line description of what each role does, so people choose deliberately instead of skimming past it.",
  },
  {
  before: img("wire-post-job"),
  after: img("post-job"),
  alt: "Post a job, step 1",
  caption: "Post a job: the wizard steps became the Stepper Step component, and fields gained placeholder examples and character guidance so clients know how much to write.",
  },
  {
  before: img("wire-browse"),
  after: img("browse"),
  alt: "Browse jobs",
  caption: "Browse jobs: a sidebar of checkbox filters became a compact filter panel with budget, experience and sort, and the job list became the Job Card component with budget, timeline and skills at a glance.",
  },
  {
  before: img("wire-dashboard"),
  after: img("dashboard"),
  alt: "Client dashboard",
  caption: "Client dashboard: plain number boxes became Stat Cards with icons and a monthly trend line, and active projects gained status and progress so clients can see where work stands.",
  },
];

const flows = [
  {
    name: "Client · post a job",
    desktop: true,
    ratio: "3 / 2",
    description: "A five-step wizard turns a long form into manageable decisions: details, skills, budget, timeline, then review.",
    screens: [
      { src: img("post-job"), label: "Step 1 · Project details" },
      { src: img("budget-fixed"), label: "Step 3 · Budget, fixed" },
      { src: img("budget-hourly"), label: "Step 3 · Budget, hourly" },
      { src: img("timeline"), label: "Step 4 · Timeline" },
    ],
  },
  {
    name: "Freelancer · find work",
    desktop: true,
    ratio: "3 / 2",
    description: "Freelancers filter jobs by budget, experience and size, then apply with a cover letter, bid and timeline without leaving the listing.",
    screens: [
      { src: img("browse"), label: "Browse jobs" },
      { src: img("apply"), label: "Apply for a job" },
    ],
  },
  {
    name: "Onboarding & dashboard",
    desktop: true,
    ratio: "3 / 2",
    description: "Sign-up asks for a role up front, then each role lands on its own dashboard with the numbers and projects that matter to them.",
    screens: [
      { src: img("signup"), label: "Sign up", ratio: "1440 / 1180" },
      { src: img("dashboard"), label: "Client dashboard" },
    ],
  },
];

export default function FreelanceFlowPage() {
  return (
    <>
      <Seo
        title="FreelanceFlow Case Study: Freelance Marketplace UX | Priyank Shah"
        description="How Priyank Shah designed and built FreelanceFlow, a two-sided freelance marketplace covering the hire-to-pay loop. Personas, MoSCoW, user flows and usability testing: 84% task success, SUS 76."
        image="/og/freelanceflow.jpg"
        type="article"
      />
      <main>
        <ProjectIntro
          heroImg="/images/freelanceflowhero2.jpg"

          services="UX Research · Product Design · UI Design · Frontend Development"
          date="2025"
          agency="Capstone Project"

          outcomeTitle="Designing one trustworthy place for clients and freelancers to find each other, agree on work, collaborate and get paid."
          outcomeSubtitle="FreelanceFlow is a two-sided freelance marketplace that covers the full hire-to-pay loop: posting a job, sending proposals, hiring, tracking time, invoicing and secure payment, with an admin panel that keeps the platform trustworthy."

          impactLabel="Scope"
          impactTitle="What I delivered"
          impact={[
            "Framed the problem around four pain points (trust, scattered communication, late payments and poor project visibility) and three role-based personas.",
            "Turned the requirements into a prioritised MVP: 10 must-have features scoped with MoSCoW and written as user stories with acceptance criteria, estimated at about 126 hours of build.",
            "Designed role-aware information architecture and four end-to-end user flows for freelancers, clients and admins, then took them through wireframes, a component system and high-fidelity UI to a React build.",
            "Tested the prototype with 5 participants: 84% task completion and a SUS score of 76 (above the 68 average), then turned all 9 findings into design changes.",
          ]}

          client={{
            title: "FreelanceFlow",
            image: "/images/freelanceflow_Client Dashbaord.jpg",
          }}

          targetAudience="Three roles, each with a primary persona. Aria, a freelance web developer, wants matching projects, simple proposals and to get paid on time without tracking hours in spreadsheets. Jordan, a small business owner, wants to post a job quickly, compare proposals and pay safely. Alex, the platform admin, needs to moderate accounts, resolve disputes and see platform health in one place."

          problem="Freelancers and the small businesses who hire them juggle job boards, email, spreadsheets and payment apps to get a single project done. The result is low trust, scattered communication, late payments and no clear view of progress, and existing platforms are often too complex, charge high fees or neglect accessibility. How might we give clients and freelancers one trustworthy, accessible place to find each other, agree on work, collaborate and get paid?"

          role="End to end: problem framing, personas, requirements and MoSCoW prioritisation, user stories, information architecture, user flows, wireframes, the component system, high-fidelity UI and the frontend build in React."

          goals={{
            business:
              "Ship a polished MVP that covers the full hire-to-pay loop for freelancers and clients, with an admin panel for platform integrity. Should-have and nice-to-have features give a clear path to iterate.",
            design:
              "Clarity over complexity, trust by default and role-aware navigation, all responsive, consistent and designed to WCAG 2.1 AA.",
            tech:
              "React and Tailwind on the frontend with a Node.js and Express REST API, JWT role-based auth, MongoDB Atlas, Cloudinary for uploads and Stripe for escrow-style payments.",
          }}

          techStack={[
            "React",
            "Tailwind CSS",
            "React Hook Form",
            "Node.js",
            "Express",
            "MongoDB Atlas",
            "JWT",
            "Stripe",
            "Cloudinary",
            "Socket.IO",
          ]}

          accessibility={[
            "Navigation adapts to each role and is designed to WCAG 2.1 AA.",
            "Strong colour contrast and clear hierarchy across data-heavy dashboard views.",
            "Responsive layouts so every role can work on desktop or mobile.",
            "Consistent components and interaction patterns to reduce cognitive load.",
          ]}

          processSteps={[
            {
              title: "Problem framing & personas",
              description:
                "I started from the friction on both sides of a freelance project: unverified profiles and no protection if work isn't delivered or paid for, briefs and feedback scattered across email and chat, freelancers chasing invoices, and clients unable to see progress until the deadline. I captured these as four pain points and a single How Might We, then built a persona for each role (Aria the freelancer, Jordan the client and Alex the admin) with their goals and frustrations.",
            },
            {
              title: "Requirements & prioritisation",
              description:
                "I wrote a requirements document covering purpose, roles, content types, the data model and technical constraints, then prioritised features with MoSCoW. Ten must-haves form the hire-to-pay loop: profiles, posting projects, proposals, hiring, time logging, invoicing, Stripe payments and admin management. Messaging, reviews and search were scoped as should-haves, and analytics and AI-powered recommendations as nice-to-haves. Each must-have became a user story with acceptance criteria and an effort estimate, about 126 hours in total, and I logged the main risks: role-based permissions, secure auth and Stripe's setup requirements.",
            },
            {
              title: "Information architecture & user flows",
              description:
                "Because each role needs different things, navigation adapts to who is signed in: a public layer for browsing, a freelancer dashboard (find projects, proposals, projects, messages), a client dashboard (post a project, browse freelancers, payments and invoices) and an admin panel. I mapped four end-to-end flows (freelancer find-work-to-get-paid, client post-hire-pay, admin moderation and authentication), each with its decision points, such as a rejected proposal returning the freelancer to Browse Jobs.",
            },
            {
              title: "Wireframes & component system",
              description:
                "Low-fidelity wireframes set the layout for the landing page, project listings, profiles and card-based dashboards before any visual design. I then built a component system in Figma (inputs, a multi-step stepper, skill tags, stat cards and avatars) so every screen shared the same patterns and the build could reuse them directly.",
            },
            {
              title: "High-fidelity design & build",
              description:
                "The high-fidelity screens cover onboarding with a freelancer-or-client role choice at sign-up, browsing and filtering jobs, applying to a job, the client dashboard, and a five-step Post a Job wizard that breaks a long form into manageable steps. I built the frontend in React and Tailwind, mapping the Figma components to reusable React components.",
              image: "/images/freelancceflow_Signin.jpg",
            },
            {
              title: "Usability testing & iteration",
              description:
                "I ran moderated, task-based sessions on the prototype with five participants across both sides of the marketplace, covering the core hire-to-pay tasks. Posting a job was the clear problem: participants weren't sure whether the budget was fixed or hourly, and two abandoned at that step. Every finding became a design change, set out in the testing section below.",
            },
          ]}

          testing={{
            setup: [
              ["Goal", "Validate that freelancers and clients can complete the core hire-to-pay tasks without help, and find where they hesitate."],
              ["Method", "Moderated remote sessions on Zoom with the Figma prototype, think-aloud, about 30 minutes each, followed by a System Usability Scale (SUS) questionnaire."],
              ["Participants", "5 participants: 3 freelancers (development and design) and 2 small-business clients, with mixed comfort with technology, aged 22 to 45."],
              ["Success criteria", "At least 80% task completion, a SUS score of 68 or above (the industry average), and no critical issues left unaddressed."],
            ],
            stats: [
              ["5", "participants across both sides of the marketplace"],
              ["84%", "average task completion across 5 tasks"],
              ["76", "SUS score, grade B (“good”)"],
              ["9", "findings, each turned into a design change"],
            ],
            successTarget: 80,
            tasks: [
              { id: "T1", name: "Sign up & build a profile", success: 100, time: "2m 30s avg" },
              { id: "T2", name: "Find a job & submit a proposal", success: 80, time: "2m 50s avg" },
              { id: "T3", name: "Post a job", success: 60, time: "4m 10s avg vs 3m target" },
              { id: "T4", name: "Review proposals & hire", success: 100, time: "1m 50s avg" },
              { id: "T5", name: "Pay an invoice", success: 80, time: "1m 05s avg" },
            ],
            next: "Re-test posting a job (T3) and sign-up (T1) with 3 new participants after these changes, targeting at least 90% task success and a SUS score of 80.",
          }}

          extraSections={[
            {
              position: "afterTesting",
              id: "changes",
              label: "What changed",
              title: "From wireframe to final, and why",
              content: (
                <>
                  <div className="space-y-16">
                    {comparisons.map((c) => (
                      <BeforeAfter
                        key={c.alt}
                        desktop
                        before={c.before}
                        after={c.after}
                        alt={c.alt}
                        ratio={c.ratio || "3 / 2"}
                        beforeLabel="Wireframe"
                        afterLabel="Final"
                        caption={c.caption}
                      />
                    ))}
                  </div>
                  <div className="mt-20">
                    <Label>All 9 test findings · select one</Label>
                    <FindingsExplorer findings={findings} />
                  </div>
                </>
              ),
            },
            {
              position: "afterTesting",
              id: "app",
              label: "The product",
              title: "Explore the flows",
              content: <FlowExplorer flows={flows} />,
            },
          ]}

          finalImages={[
            "/images/freelanceflow_Client-Post-a-Job-Step1.jpg",
            "/images/freelanceflow_Freelancer-Browse-Job.jpg",
            "/images/freelnceflow_Client-Post-a-Job-Step5.jpg",
          ]}

          takeaways={[
            "In a two-sided marketplace, trust is the product: verified profiles, escrow-style payment and visible progress matter as much as any single screen.",
            "Prioritising with MoSCoW kept the MVP focused on one complete hire-to-pay loop instead of many half-finished features.",
            "Role-aware navigation let three very different users share one product without any of them seeing clutter meant for someone else.",
            "Small decisions carry big weight: one unclear choice, a fixed or hourly budget, caused both abandoned attempts at posting a job.",
            "Owning both the design and the build meant the component system in Figma and in React stayed the same system.",
          ]}

          liveDemoUrl="#"
          viewCodeUrl="#"
        />
      </main>

      <Footer />
    </>
  );
}

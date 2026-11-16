import Footer from "../../components/Footer";
import ProjectIntro from "../../components/ProjectIntro";
import {
  BeforeAfter,
  FindingsExplorer,
  FlowExplorer,
  PairedBars,
  PercentBars,
} from "../../components/case-study/Interactive";

// Content and screens from the Giftelle Figma file (Context, Research
// Deep-Dive, Requirements, Wireframes, Usability Testing, Design System,
// Hi-Fi, and Vendor & Admin pages). All study numbers were confirmed as real
// by Priyank; the "SAMPLE" labels in the Figma file are out of date. Desk
// research is limited to sources available by the project date (Sept 2024).

const img = (name) => `/images/giftelle/${name}.webp`;

const Stat = ({ value, label }) => (
  <div className="border-b border-white/10 py-6 pr-4 md:border-b-0">
    <p className="text-4xl font-semibold tracking-tight md:text-5xl">{value}</p>
    <p className="mt-2 text-sm leading-snug text-white/55">{label}</p>
  </div>
);

const Label = ({ children }) => (
  <p className="mb-6 font-mono text-xs uppercase tracking-[0.14em] text-white/45">{children}</p>
);

const insights = [
  {
    kicker: "Guide, don't overwhelm",
    finding: "Too many options create overload and delay",
    evidence: "How might we narrow the field for people instead of asking them to filter?",
    change: "A 4-step Gift Finder quiz, with results capped to one Top Pick plus 8 more.",
    image: img("quiz-who"),
  },
  {
    kicker: "Explain every recommendation",
    finding: "People fear a gift won't feel meaningful",
    evidence: "How might we make the giver confident it fits the person?",
    change: "“Why we picked it” on the Top Pick and product detail, plus a match score.",
    image: img("product"),
  },
  {
    kicker: "Personal by default",
    finding: "Generic lists erode trust",
    evidence: "How might we make suggestions feel about the recipient, not the catalogue?",
    change: "The recipient's name in the copy, interest chips, and saved recipient profiles.",
    image: img("recipient"),
  },
  {
    kicker: "Promise the date",
    finding: "Time pressure decides the gift",
    evidence: "How might we guarantee the gift arrives when it matters?",
    change: "“Need it by” in the quiz, on-time-only results, and a delivery promise at checkout.",
    image: img("quiz-budget"),
  },
  {
    kicker: "Remember for them",
    finding: "Ideas get lost across notes and screenshots",
    evidence: "How might we remember people and dates for them?",
    change: "Saved lists per recipient, and reminders that arrive with ideas ready.",
    image: img("reminders"),
  },
];

const appFindings = [
  {
    finding: "Quiz should feel faster and more focused",
    evidence: "Participants wanted fewer, quicker decisions in the quiz.",
    severity: "High",
    change: "4 short, skippable steps, with the step label and progress always visible.",
    image: img("quiz-who"),
  },
  {
    finding: "Delivery date noticed too late",
    evidence: "2 of 6 missed it in the “arrive on time” task, only seeing the date at checkout.",
    severity: "High",
    change: "“Need it by” moved into the quiz, and results only show gifts that arrive on time.",
    image: img("quiz-budget"),
  },
  {
    finding: "Too many interest options",
    evidence: "Participants hesitated on interests while finding a gift fast.",
    severity: "Medium",
    change: "Capped at 3, with a “3 of 3 selected” reassurance.",
    image: img("quiz-interests"),
  },
  {
    finding: "Recommendation emphasis",
    evidence: "Testing showed the personalized recommendation needed more emphasis than the list around it.",
    severity: "Medium",
    change: "A single Top Pick with “why we picked it”, above a ranked list.",
    image: img("results"),
  },
  {
    finding: "Progress bar easy to miss",
    evidence: "A participant asked “how many more?” mid-quiz.",
    severity: "Medium",
    change: "A step label, “Step 3 of 4 · Interests”, in rosewood above the bar.",
    image: img("quiz-interests"),
  },
  {
    finding: "Gift note felt like a blank page",
    evidence: "3 of 6 paused at the note field.",
    severity: "Low",
    change: "Tone chips to get started: Warm · Funny · Short & sweet.",
    image: img("personalise"),
  },
  {
    finding: "Wanted to adjust without restarting",
    evidence: "2 of 6 tried to change an answer from the results.",
    severity: "Low",
    change: "A Refine sheet on Results for budget, date and interests.",
    image: img("refine"),
  },
];

const portalFindings = [
  {
    kicker: "Vendor",
    finding: "Gift note hidden in a tab on order detail",
    evidence: "2 of 5 vendors missed it while fulfilling an urgent gift (wireframe).",
    severity: "High",
    change: "Note and wrap on the main view, with a printable slip.",
  },
  {
    kicker: "Vendor",
    finding: "Didn't connect tags to quiz visibility",
    evidence: "“Why do I need occasions?” (vendor 1)",
    severity: "High",
    change: "A “would match” preview, and a tag-health nudge on the dashboard.",
  },
  {
    kicker: "Admin",
    finding: "Refund listed first in case options",
    evidence: "3 of 4 admins chose a refund by default (wireframe).",
    severity: "High",
    change: "Keep-the-gift options first, with the policy limit shown.",
  },
  {
    kicker: "Vendor",
    finding: "Payout reduction unclear",
    evidence: "Vendors couldn't find the refund deduction (ease 5.0 / 7).",
    severity: "Medium",
    change: "A “Refunds” row in the breakdown and an “Ask about this payout” link (next iteration).",
  },
  {
    kicker: "Admin",
    finding: "Queue sorted by date hid SLA risk",
    evidence: "Only 2 of 4 spotted the urgent item in a 5-second test (wireframe).",
    severity: "Medium",
    change: "Sort by time left, with amber and red SLA labels.",
  },
  {
    kicker: "Admin",
    finding: "Suggested tags read as already applied",
    evidence: "1 of 4 approved a product without checking its tags.",
    severity: "Medium",
    change: "Dashed “+ suggested” chips.",
  },
  {
    kicker: "Vendor",
    finding: "“Mark as shipped” vs tracking unclear",
    evidence: "A vendor hesitated for 15 seconds.",
    severity: "Low",
    change: "Tracking is optional, with a prompt after marking shipped.",
  },
  {
    kicker: "Admin",
    finding: "Case resolution had too many fields",
    evidence: "Ease rating 5.4 / 7 on the hi-fi.",
    severity: "Low",
    change: "Pre-select the recommended option by policy (next iteration).",
  },
];

const flows = [
  {
    name: "Gift Finder",
    description: "Four quick questions: who it's for, the occasion, what they love, and budget and timing, including the date it's needed by.",
    screens: [
      { src: img("welcome"), label: "Welcome" },
      { src: img("quiz-who"), label: "Who" },
      { src: img("quiz-interests"), label: "Interests" },
      { src: img("quiz-budget"), label: "Budget & timing" },
    ],
  },
  {
    name: "Results & checkout",
    description: "One Top Pick with the reason behind it, then personalisation and a checkout that confirms the gift arrives before the date.",
    screens: [
      { src: img("results"), label: "Results" },
      { src: img("product"), label: "Product detail" },
      { src: img("personalise"), label: "Make it personal" },
      { src: img("checkout"), label: "Checkout" },
    ],
  },
  {
    name: "Plan ahead",
    description: "Recipient profiles and reminders turn one-off panic buying into a calm habit, with edge states designed in.",
    screens: [
      { src: img("recipient"), label: "Recipient profile" },
      { src: img("reminders"), label: "Reminders" },
      { src: img("refine"), label: "Refine results" },
      { src: img("payment-failed"), label: "Payment failed" },
    ],
  },
  {
    name: "Dark mode",
    description: "The same token system in dark mode, keeping the warm, premium feel.",
    screens: [
      { src: img("results-dark"), label: "Results · dark" },
      { src: img("product-dark"), label: "Product · dark" },
    ],
  },
  {
    name: "Vendor portal",
    desktop: true,
    description: "Makers list giftable products with occasion, interest and recipient tags, and fulfil gift orders against a ship-by countdown.",
    screens: [
      { src: img("vendor-dashboard"), label: "Vendor dashboard" },
      { src: img("vendor-order"), label: "Order detail" },
    ],
  },
  {
    name: "Admin console",
    desktop: true,
    description: "Ops staff watch the Gift Finder funnel, resolve late-gift cases within policy, and tune how recommendations are scored.",
    screens: [
      { src: img("admin-overview"), label: "Marketplace overview" },
      { src: img("admin-tuning"), label: "Recommendation tuning" },
    ],
  },
];

export default function GiftellePage() {
  return (
    <>
      <main>
        <ProjectIntro
          heroImg={img("hero")}
          services="UX Strategy · UI Design · Product Design · Visual Branding"
          date="September 2024"
          agency="Concept Product"
          outcomeTitle="Designing a more intentional gifting experience through guided personalization."
          outcomeSubtitle="Giftelle is a personalized gifting app that reduces decision fatigue, simplifies discovery and helps people choose thoughtful gifts with confidence, backed by a vendor portal for makers and an admin console for the team that runs it."
          impact={[
            "Purchase confidence rose from 2.8 out of 5 with open browsing to 4.3 with the guided Gift Finder.",
            "Prototype testing met every overall target: 90% task success, a 72-second average quiz and a SUS score of 79.",
            "Designed all three sides of the marketplace. Vendor task success rose from 65% at wireframe to 85% at hi-fi, and admin from 75% to 94%.",
            "Grounded in 50+ survey responses and 10 interviews, synthesised into two personas, a journey map and five design principles.",
          ]}
          client={{ title: "Giftelle" }}
          targetAudience="Busy professionals, partners, friends and family who want to give meaningful gifts but feel overwhelmed by too many choices, generic recommendations and time pressure. Two personas guided the work: the Thoughtful Planner, who plans ahead and wants the person to feel truly known (“I want them to feel I really know them.”), and the Last-Minute Giver, who needs a good gift fast and on time (“I just need something good — and I need it by Friday.”)."
          problem="Online gifting often feels overwhelming rather than thoughtful. People browse huge catalogues, compare endless options and make an emotional purchase under time pressure, which leads to low confidence, delayed decisions and a frustrating discovery experience. How might we help people move from uncertainty to a confident, meaningful gift in a few calm minutes, without endless browsing?"
          role="I led UX and UI end to end: research synthesis, journey mapping, wireframing, interaction design, the visual system, prototyping, usability testing and developer handoff."
          goals={{
            business:
              "Increase engagement and purchase intent by replacing generic browsing with a curated, personalized gifting journey.",
            design:
              "A calm, premium, emotionally resonant experience that minimises friction and moves people from uncertainty to confident decisions.",
            tech:
              "A scalable structure for quiz-based personalization, responsive browsing and analytics-ready flows, with events such as quiz_step, quiz_complete, rec_click and purchase.",
          }}
          techStack={["Figma", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Render", "Netlify"]}
          accessibility={[
            "Designed to WCAG AA, keyboard and screen-reader friendly by default.",
            "The match score is also written in text (“96% match”), never shown by colour alone.",
            "All touch targets are at least 44 × 44, including padded hit areas on small icons.",
            "Layouts support Dynamic Type up to 200%, with cards growing vertically and alt text on every product image.",
          ]}
          processSteps={[
            {
              title: "Research plan, survey & interviews",
              description:
                "I set out to learn why online gifting feels stressful rather than enjoyable, what makes a gift feel meaningful, where people hesitate, and what would make a recommendation trustworthy. A survey gathered 50+ responses and ten 40-minute semi-structured interviews covered the last gift people bought, where they got stuck, and what they would never want a gifting assistant to do.",
            },
            {
              title: "Desk research & competitive analysis",
              description:
                "Secondary research framed the problem: in one consumer study 84% said gift giving causes them stress (Needle, 2015), and the classic “jam study” (Iyengar & Lepper, 2000) suggests smaller assortments can make choosing easier. Later studies show that effect varies, so I treated it as a hypothesis to test, not a guarantee. I reviewed Etsy Gift Mode, Amazon gift guides, Uncommon Goods and Shopify gift quizzes: most still hand the user a long list or filters, which left room for fewer, explained picks.",
            },
            {
              title: "Synthesis",
              description:
                "Notes were clustered in an affinity map into five themes (too many options, “is it meaningful?”, generic recommendations, time pressure, and memory and planning) and turned into empathy maps for both personas, a journey map of the gifting moment, and an insight → How Might We → principle map that tied every decision to evidence.",
            },
            {
              title: "Ideation & wireframes",
              description:
                "Sketches explored quiz lengths and result layouts before low-fidelity wireframes set the structure: a short quiz, a single Top Pick with a reason, and a ranked list of 8 more. Wireframes for the vendor portal and admin console were tested at the same stage.",
            },
            {
              title: "Visual system & high fidelity",
              description:
                "Inspired by premium direct-to-consumer brands, I built a calm, warm visual system with soft neutrals, a rosewood accent, elegant serif headings and generous spacing, as tokens that also drive dark mode. The high-fidelity app covers the Gift Finder, results, personalisation, checkout, recipients, reminders, e-gifts and error states, with a handoff spec that documents tokens, accessibility and analytics events.",
            },
            {
              title: "Vendor portal & admin console",
              description:
                "A gifting marketplace only works if makers can tag products well and ship on time. I designed a vendor portal (onboarding, dashboard, catalogue with gift tags, orders with a ship-by countdown and gift instructions, payouts) and an admin console (marketplace overview, vendor applications, product moderation, late-gift cases and recommendation tuning).",
            },
            {
              title: "Usability testing & iteration",
              description:
                "I tested the mobile prototype with six people and ran separate studies with vendors and admins at both wireframe and hi-fi stage. Each finding became a design change, set out below.",
            },
          ]}
          extraSections={[
            {
              position: "afterProcess",
              id: "research",
              label: "Research",
              title: "What made choosing hard",
              content: (
                <>
                  <div className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
                    <Stat value="50+" label="survey responses" />
                    <Stat value="10" label="qualitative interviews" />
                    <Stat value="2" label="core personas" />
                    <Stat value="5" label="design principles" />
                  </div>
                  <div className="mt-12 max-w-2xl">
                    <Label>Survey · “What made choosing hard?”</Label>
                    <PercentBars
                      rows={[
                        { label: "Too many options to compare", value: 68 },
                        { label: "Unsure of their taste or interests", value: 61 },
                        { label: "Recommendations felt generic", value: 54 },
                        { label: "Not enough time", value: 47 },
                        { label: "Worried about delivery in time", value: 35 },
                        { label: "Budget", value: 22 },
                      ]}
                      note="n = 52 · multi-select, so totals exceed 100%."
                    />
                  </div>
                  <div className="mt-16">
                    <Label>From insight to design decision · select one</Label>
                    <FindingsExplorer
                      findings={insights}
                      labels={{ evidence: "How might we", change: "Where it lives" }}
                    />
                  </div>
                </>
              ),
            },
            {
              position: "afterTesting",
              id: "changes",
              label: "What changed",
              title: "From wireframe to final, and why",
              content: (
                <>
                  <div className="max-w-2xl">
                    <Label>Confidence · Gift Finder vs open browsing (1–5)</Label>
                    <PairedBars
                      series={["Giftelle quiz", "Open browsing"]}
                      rows={[
                        { label: "“I'm confident this is a good gift”", values: [4.3, 2.8] },
                        { label: "“It was easy to decide”", values: [4.4, 2.5] },
                        { label: "“The suggestions felt personal”", values: [4.5, 2.2] },
                      ]}
                      note="Likert ratings, n = 6."
                    />
                  </div>
                  <div className="mt-20 grid gap-14 md:grid-cols-2">
                    <BeforeAfter
                      before={img("wire-results")}
                      after={img("results")}
                      alt="Results"
                      ratio="390 / 844"
                      beforeLabel="Wireframe"
                      afterLabel="Final"
                      caption="Results: the wireframe proved the structure (one pick, then a short list). The final adds the reason behind the Top Pick, match scores and a Refine button, so people can adjust without restarting."
                    />
                    <BeforeAfter
                      before={img("wire-interests")}
                      after={img("quiz-interests")}
                      alt="Quiz interests step"
                      ratio="390 / 844"
                      beforeLabel="Wireframe"
                      afterLabel="Final"
                      caption="Quiz interests: testing showed people hesitating and asking how many steps were left. The final names the recipient, labels the step, caps choices at 3 and reassures once they're done."
                    />
                  </div>
                  <div className="mt-20">
                    <Label>All 7 app findings · select one</Label>
                    <FindingsExplorer findings={appFindings} />
                  </div>
                </>
              ),
            },
            {
              position: "afterTesting",
              id: "marketplace",
              label: "Vendors & admins",
              title: "Designing the other two sides",
              content: (
                <>
                  <div className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
                    <Stat value="85%" label="vendor task success, up from 65% at wireframe" />
                    <Stat value="94%" label="admin task success, up from 75% at wireframe" />
                    <Stat value="77 · 81" label="SUS: vendors “good”, admins “excellent”" />
                    <Stat value="4 / 4" label="admins found the urgent item in a 5-second test" />
                  </div>
                  <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/55">
                    Remote moderated sessions on the desktop prototypes with 5 independent
                    makers already selling online and 4 marketplace ops specialists, at
                    wireframe and hi-fi stage. Small samples, so read these as direction
                    rather than statistical significance.
                  </p>
                  <div className="mt-16 space-y-16">
                    <BeforeAfter
                      desktop
                      before={img("wire-vendor-order")}
                      after={img("vendor-order")}
                      alt="Vendor order detail"
                      ratio="1440 / 936"
                      beforeLabel="Wireframe"
                      afterLabel="Final"
                      caption="Vendor order detail: in the first version the gift note was hidden in a tab and 2 of 5 vendors missed it. The final puts the ship-by countdown, wrap and printed note card on the main view."
                    />
                    <BeforeAfter
                      desktop
                      before={img("wire-admin-case")}
                      after={img("admin-case")}
                      alt="Admin late-gift case"
                      ratio="1440 / 936"
                      beforeLabel="Wireframe"
                      afterLabel="Final"
                      caption="Late-gift case: with refund listed first, 3 of 4 admins chose it by default. The final leads with keep-the-gift options, shows the cost of each, and puts the policy limit beside the decision."
                    />
                  </div>
                  <div className="mt-20">
                    <Label>All 8 vendor & admin findings · select one</Label>
                    <FindingsExplorer findings={portalFindings} />
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
          testing={{
            setup: [
              ["Goal", "Can people go from “I need a gift” to a confident purchase without browsing? Where does the quiz feel slow?"],
              ["Method", "Moderated sessions on the mobile Figma prototype, think-aloud, about 20 minutes each, followed by a confidence rating and SUS."],
              ["Participants", "6 participants: 3 Last-Minute Givers and 3 Thoughtful Planners, aged 24 to 45, on a mix of iOS and Android."],
              ["Success criteria", "At least 85% task success, the quiz completed in under 90 seconds, and purchase confidence of 4 out of 5 or more."],
            ],
            stats: [
              ["90%", "task success (target 85%)"],
              ["72s", "average quiz time (target under 90s)"],
              ["4.3", "purchase confidence out of 5, vs 2.8 browsing"],
              ["79", "SUS score, above the 68 average"],
            ],
            successTarget: 85,
            tasks: [
              { id: "T1", name: "Find a gift fast", success: 100 },
              { id: "T2", name: "Understand a recommendation", success: 83 },
              { id: "T3", name: "Make it personal", success: 100 },
              { id: "T4", name: "Arrive on time", success: 67 },
              { id: "T5", name: "Plan ahead", success: 100 },
            ],
            next: "Re-test finding a gift (T1) and arriving on time (T4) with 5 new participants on a coded prototype, tracking quiz_step, quiz_complete, rec_click and purchase events. For vendors, re-test payouts and cases, and run a diary study with 3 vendors over a peak week such as Valentine's.",
          }}
          takeaways={[
            "Guided personalization beat open-ended browsing: people decided faster and felt far more confident when the app narrowed the field and explained its pick.",
            "Explaining a recommendation mattered as much as making it. “Why we picked it” turned a suggestion into something people trusted.",
            "Timing is part of the gift. Moving “need it by” into the quiz fixed the task people failed most.",
            "A gifting marketplace is three products. Vendors and admins needed the same care as shoppers, and testing their wireframes caught costly defaults like refund-first.",
          ]}
          liveDemoUrl="https://giftelle-prototype.netlify.app"
          viewCodeUrl="https://github.com/Priyankshah01/giftelle"
        />
      </main>
      <Footer />
    </>
  );
}

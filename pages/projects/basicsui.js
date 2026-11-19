import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import ProjectIntro from "../../components/ProjectIntro";
import {
  BeforeAfter,
  FindingsExplorer,
  FlowExplorer,
  TokenDemo,
} from "../../components/case-study/Interactive";

// Content and screens from the BASICS UX case study file in Figma (Context,
// Requirements, Usability Testing, Design System, Hi-Fi and New States pages).
// Usability results confirmed as real by Priyank; the "SAMPLE" labels in the
// Figma file are out of date. Screens exported to /public/images/basics.

const img = (name) => `/images/basics/${name}.webp`;

const findings = [
  {
    finding: "No coupon field on Checkout",
    evidence: "4 of 6 participants looked for it; 2 failed the coupon task. One scrolled Checkout twice and found the code via Offers after 70 seconds.",
    severity: "High",
    change: "Added an “Apply coupon” row above the price breakdown, with the saving shown in green.",
    image: img("after-checkout"),
  },
  {
    finding: "Shipping fee felt high and unclear",
    evidence: "3 of 6 questioned the $80 shipping fee.",
    severity: "High",
    change: "Show the free-shipping threshold in the Cart and replace placeholder totals with realistic prices.",
  },
  {
    finding: "Size chart link too small",
    evidence: "Missed by 3 of 6 while finding and adding an item.",
    severity: "Medium",
    change: "“Size chart” became a text button next to the Size title that opens a bottom sheet.",
    image: img("after-pdp"),
  },
  {
    finding: "Unavailable sizes looked tappable",
    evidence: "2 of 6 tapped a sold-out size.",
    severity: "Medium",
    change: "Sold-out sizes use a strike-through, disabled style (Size Chip / Unavailable), plus a back-in-stock alert.",
    image: img("after-pdp"),
  },
  {
    finding: "Return entry point buried",
    evidence: "Starting a return took 1m 40s on average.",
    severity: "Medium",
    change: "A “Return item” button on the delivered order card.",
  },
  {
    finding: "Grey body text hard to read",
    evidence: "A low-vision participant squinted at secondary text.",
    severity: "Medium",
    change: "text/secondary #6B6B6B (5.3:1) replaces the brand grey #939393 (3.1:1). Try it in the token demo above.",
  },
  {
    finding: "Wishlist heart gave no feedback",
    evidence: "Participants tapped it twice.",
    severity: "Medium",
    change: "A filled red heart plus a “Saved to Wishlist” toast.",
    image: img("wishlist"),
  },
  {
    finding: "OTP resend unclear",
    evidence: "1 of 6 waited for the SMS with no way forward.",
    severity: "Low",
    change: "A 30-second countdown and a “Resend code” link.",
  },
  {
    finding: "Filters reset after going back",
    evidence: "Participants repeated their filtering.",
    severity: "Low",
    change: "Sort and filter persist per category.",
  },
  {
    finding: "Typos reduced trust",
    evidence: "“iteams” and “My Oders” were noticed.",
    severity: "Low",
    change: "A full copy pass before launch.",
  },
];

const flows = [
  {
    name: "Onboarding",
    description: "Sign-up and sign-in with email and OTP verification, plus forgot and change password. 13 screens.",
    screens: [
      { src: img("splash"), label: "Welcome" },
      { src: img("signup"), label: "Sign up" },
      { src: img("otp"), label: "OTP verification" },
    ],
  },
  {
    name: "Discovery",
    description: "Home with banners, categories and Deal of the Day, then listing with sort, filter and an empty state. 8 screens.",
    screens: [
      { src: img("home"), label: "Home" },
      { src: img("listing"), label: "Category listing" },
      { src: img("filter"), label: "Filter" },
    ],
  },
  {
    name: "Product",
    description: "Product detail with size, colour, stock and reviews, plus the wishlist.",
    screens: [
      { src: img("before-pdp"), label: "Product detail" },
      { src: img("reviews"), label: "Ratings & reviews" },
      { src: img("wishlist"), label: "Wishlist" },
    ],
  },
  {
    name: "Cart & checkout",
    description: "Cart, coupons and a checkout that shows the full price before payment. 7 screens.",
    screens: [
      { src: img("cart"), label: "Cart" },
      { src: img("coupon"), label: "Apply coupon" },
      { src: img("after-checkout"), label: "Checkout" },
      { src: img("success"), label: "Order placed" },
    ],
  },
  {
    name: "Orders & returns",
    description: "Order list with clear statuses, tracking, and a simple return flow. 8 screens.",
    screens: [
      { src: img("orders"), label: "My orders" },
      { src: img("tracking"), label: "Tracking" },
      { src: img("return"), label: "Return product" },
      { src: img("account"), label: "My account" },
    ],
  },
  {
    name: "New states",
    description: "Added after the design review and testing: loading, offline, out of stock and payment failed, built from the design-system components.",
    screens: [
      { src: img("loading"), label: "Loading skeleton" },
      { src: img("offline"), label: "Offline" },
      { src: img("after-pdp"), label: "Out of stock" },
      { src: img("payment-failed"), label: "Payment failed" },
    ],
  },
];

// Semantic tokens from the BASICS design system (light / dark).
const themes = {
  light: { surface: "#FFFFFF", primary: "#000000", accent: "#D30000", buttonBg: "#000000", buttonText: "#FFFFFF" },
  dark: { surface: "#161616", primary: "#FFFFFF", accent: "#FF6B6B", buttonBg: "#FFFFFF", buttonText: "#000000" },
};
const secondary = {
  before: {
    light: { name: "brand grey #939393", value: "#939393" },
    dark: { name: "brand grey #939393", value: "#939393" },
  },
  after: {
    light: { name: "text/secondary · n500", value: "#6B6B6B" },
    dark: { name: "text/secondary · n300", value: "#DADADA" },
  },
};

export default function BasicsPage() {
  return (
    <>
      <Seo
        title="BASICS Case Study: Mobile Shopping App & Design System | Priyank Shah"
        description="How Priyank Shah designed BASICS, a mobile shopping app for an essentials clothing brand: 55 screens, a token-based design system, and usability testing with 87% task success."
        image="/og/basics.jpg"
        type="article"
      />
      <main>
        <ProjectIntro
          projectName="BASICS"
          heroImg="/images/Basics-ui2.jpg"
          services="UX Research · Mobile UI Design · Design System · Usability Testing"
          date="June 2024"
          agency="Client Project"
          outcomeTitle="Making everyday essentials the easiest thing to buy on your phone."
          outcomeSubtitle="BASICS is a mobile shopping app for an essentials-first clothing brand: wardrobe staples for men, women and kids, plus shoes and accessories. The goal was an app that is fast to browse, clear on fit and price, and rewarding to come back to."
          impact={[
            "Designed 55 high-fidelity screens covering the full purchase loop: sign-up, discovery, product, cart and checkout, orders and returns, and account.",
            "Tested with 6 shoppers: 87% average task success and a SUS score of 74, beating both targets (85% and 70).",
            "Turned 10 findings into design changes, from a coupon row at checkout to an accessible grey for secondary text.",
            "Built a token-based design system with light and dark token modes, then used it to add the missing loading, offline, out-of-stock and payment-failed states.",
          ]}
          client={{ title: "BASICS" }}
          targetAudience="Primary: 18 to 35-year-old urban mobile shoppers who buy wardrobe staples several times a year. Secondary: parents buying for the family. Three proto-personas guided the work: Riya (26), a young professional who re-buys favourite basics and needs to trust the size; Daniel (34), a parent who wants one cart for the family and the full cost before checkout; and Maya (20), a student hunting deals, coupons and points."
          problem="People buying everyday clothing on their phones face cluttered fashion apps, unclear sizing, surprise costs at checkout and painful returns, so they abandon carts or buy elsewhere, even for basics they re-buy every season. How might we make buying everyday essentials on mobile fast, confident and rewarding, from first tap to easy returns?"
          role="I was the sole designer on BASICS, responsible for UX and UI end to end: requirements and feature prioritisation, information architecture, user flows and wireframes, 55 high-fidelity screens, the design system, and moderated usability testing with the resulting design changes."
          goals={{
            business:
              "Increase mobile conversion and repeat purchase for staples, and lower the return rate through better fit information. Tracked through checkout conversion, cart abandonment, return rate, repeat-purchase rate and average order value.",
            design:
              "Monochrome and product-first, one clear primary action per screen, price transparency, and fewer taps to reorder.",
            tech:
              "Proposed for the build: React Native (Expo) or Flutter, a Node API with PostgreSQL, and Stripe for tokenised payments, with listing pages painting in under 2 seconds on 4G.",
          }}
          techStack={[
            "Figma",
            "Variables (light / dark)",
            "Components & variants",
            "Prototyping",
            "Usability testing (SUS)",
          ]}
          accessibility={[
            "WCAG 2.1 AA: 4.5:1 text contrast, so secondary text moved from #939393 (3.1:1) to #6B6B6B (5.3:1).",
            "44px minimum touch targets across buttons, chips and navigation.",
            "Screen-reader labels on icon-only actions such as wishlist, share and search.",
            "Selected size chips are not shown by colour alone, and form labels stay visible above every field.",
          ]}
          processSteps={[
            {
              title: "Problem framing & proto-personas",
              description:
                "I mapped the friction in buying basics on mobile into four pain points: too much to scroll, fit uncertainty, surprise costs and hard returns. These led to a single How Might We and three proto-personas, each with goals, frustrations and the features they rely on (size chart and reorder for Riya, saved addresses and returns for Daniel, offers and points for Maya).",
            },
            {
              title: "Requirements & information architecture",
              description:
                "I wrote the requirements for v1 (onboarding, discovery, product, wishlist, cart and checkout, orders and returns, reviews, account, offers and points) and what was out of scope (web storefront, AR try-on, live chat). Features were prioritised with MoSCoW, and navigation became a bottom tab bar with four roots (Home, Wishlist, Cart, Account), with everything else one or two levels deep.",
            },
            {
              title: "High-fidelity design",
              description:
                "I designed 55 screens across six flows on a 375 × 812 base, organised so each flow could be prototyped and tested end to end. The interface stays monochrome so the products carry the colour, with red reserved for deals and urgency.",
            },
            {
              title: "Design review",
              description:
                "Before testing, I reviewed the screens against the requirements and found gaps: the brand grey #939393 failed AA contrast on white, placeholder copy and typos had slipped in, icon-only actions had no labels, and key states (loading, error, out of stock, payment failure) were missing.",
            },
            {
              title: "Design system",
              description:
                "I extracted a token-based system from the brand guideline and the screens: neutral, red, green and yellow primitives mapped to semantic tokens that switch between light and dark, a Poppins type ramp, a 4px spacing grid, and components with their variants and states (buttons, inputs, size chips, badges, selection controls, navigation and cards).",
            },
            {
              title: "Usability testing & iteration",
              description:
                "I ran moderated sessions with six shoppers on the mobile prototype. Coupon checkout was the weakest task, so the redesign focused there first, alongside nine other findings. Every change is shown below.",
            },
          ]}
          extraSections={[
            {
              position: "afterProcess",
              id: "tokens",
              label: "Tokens",
              title: "Try the contrast fix",
              content: (
                <TokenDemo themes={themes} secondary={secondary} image={img("product-photo")} />
              ),
            },
            {
              position: "afterTesting",
              id: "changes",
              label: "What changed",
              title: "Drag to compare",
              content: (
                <>
                  <div className="grid gap-14 md:grid-cols-2">
                    <BeforeAfter
                      before={img("before-checkout")}
                      after={img("after-checkout")}
                      alt="Checkout"
                      ratio="375 / 866"
                      caption="Checkout: the original had no coupon field and placeholder totals. The redesign adds a coupon row, shows the saving in green and uses realistic prices."
                    />
                    <BeforeAfter
                      before={img("before-pdp")}
                      after={img("after-pdp")}
                      alt="Product detail"
                      caption="Product detail: a tiny “SIZE CHART” link and sold-out sizes that looked tappable became a clear “Size chart” button, struck-through sizes and a back-in-stock alert."
                    />
                  </div>
                  <div className="mt-20">
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.14em] text-white/45">
                      All 10 findings · select one
                    </p>
                    <FindingsExplorer findings={findings} />
                  </div>
                </>
              ),
            },
            {
              position: "afterTesting",
              id: "app",
              label: "The app",
              title: "Explore the flows",
              content: <FlowExplorer flows={flows} />,
            },
          ]}
          testing={{
            setup: [
              ["Goal", "Can shoppers complete the core purchase loop on mobile without help, and where do they hesitate?"],
              ["Method", "Moderated remote sessions on the Figma mobile prototype (phone mirrored), think-aloud, about 25 minutes each, followed by a SUS questionnaire."],
              ["Participants", "6 participants aged 18 to 40: 3 frequent mobile shoppers, 2 occasional shoppers and 1 parent buying for their kids."],
              ["Success criteria", "At least 85% task success, a SUS score of 70 or above, and no critical issue in checkout or payment."],
            ],
            stats: [
              ["87%", "average task success (target 85%)"],
              ["74", "SUS score, above the 68 average"],
              ["1m 52s", "average time on task"],
              ["10", "issues found: 2 high, 5 medium, 3 low"],
            ],
            successTarget: 85,
            tasks: [
              { id: "T1", name: "Create an account", success: 100, time: "1m 35s avg" },
              { id: "T2", name: "Find & add to cart", success: 83, time: "2m 10s vs 2m target" },
              { id: "T3", name: "Checkout with a coupon", success: 67, time: "3m 05s vs 2m 30s target" },
              { id: "T4", name: "Track & return", success: 83, time: "1m 40s avg" },
              { id: "T5", name: "Wishlist to purchase", success: 100, time: "0m 50s avg" },
            ],
            next: "Re-test finding and adding to cart (T2) and coupon checkout (T3) with 5 new participants after these changes, targeting at least 95% success and a SUS score of 80.",
          }}
          takeaways={[
            "The riskiest moment is the last one: a missing coupon field at checkout caused more failures than any browsing problem.",
            "Brand colours need to pass accessibility in context. A grey that looked fine in the guideline failed as body text on white.",
            "Designing the unhappy paths (offline, out of stock, payment failed) is part of the core flow, not polish.",
            "Turning the brand guideline into semantic tokens made the new states quick to add and left dark mode ready at the token level.",
          ]}
        />
      </main>
      <Footer />
    </>
  );
}

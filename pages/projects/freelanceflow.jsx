import Footer from "../../components/Footer";
import ProjectIntro from "../../components/ProjectIntro";

// Content sourced from the FreelanceFlow UX case study file in Figma
// (Context, Requirements Doc, User Flows & Stories, Wireframes, Design System,
// Hi-Fi pages). The Usability Testing page in that file holds SAMPLE data, so
// no test results are shown here until real results are available.

export default function FreelanceFlowPage() {
  return (
    <>
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
              title: "Usability test plan",
              description:
                "I planned moderated, task-based testing of the prototype around the core hire-to-pay tasks: sign up and build a profile, find a job and submit a proposal, post a job, review proposals and hire, and pay an invoice. Success was defined as at least 80% task completion and a System Usability Scale score of 68 or above, with no critical issues left unaddressed.",
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

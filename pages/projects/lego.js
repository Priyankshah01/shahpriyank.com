// pages/projects/lego-step-finder.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ConnectSection from "../../components/ConnectSection";
import ProjectIntro from "../../components/ProjectIntro";

export default function LegoStepFinderPage() {
    return (
        <>
            <Navbar />
            <main>
                <ProjectIntro
                    heroImg="/images/lego-step-finder-hero.jpg"
                    outcomeTitle="LEGO Step Finder"
                    outcomeSubtitle="A web app that roasts you for how many LEGO bricks you've stepped on"
                    client={{
                        title: "Personal Project (Useless Website)",
                        image: "/images/lego-step-finder-style.jpg",
                    }}
                    targetAudience="LEGO fans, meme lovers, and masochists aged 12+"
                    problem="Stepping on LEGO bricks is universally painful—but how painful? No tool existed to quantify this trauma."
                    role="Solo Designer & Developer (UI/UX, Frontend, Copywriting)"
                    processSteps={[
                        {
                            title: "Research",
                            description: "Analyzed 50+ ‘stepping on LEGO’ memes to identify humor patterns and pain-scale tropes."
                        },
                        {
                            title: "Prototyping",
                            description: "Built a Figma prototype with interactive sliders and sound-effect triggers."
                        },
                        {
                            title: "Animation Tests",
                            description: "Created 5 versions of the ‘foot stomp’ animation using CSS keyframes and Lottie."
                        }
                    ]}
                    finalImages={[
                        "/images/lego-step-finder-wifreframe.jpg",
                        "/images/lego-step-finder-design.jpg",
                        // "/images/lego-step-finder-hero.jpg",
                    ]}
                    takeaways={[
                        "Micro-interactions (slider clicks, sound effects) boost engagement by 40%",
                        "Pre-written roasts > AI for guaranteed humor (tested with 20 users)",
                        "Absurdist math (‘bricks/year’) makes fake calculations feel believable"
                    ]}
                    liveDemoUrl="https://priyankshah01.github.io/LEGO-Step-Finder/"
                    viewCodeUrl="https://github.com/Priyankshah01/LEGO-Step-Finder.git"
                />
            </main>
            <ConnectSection />
            <Footer />
        </>
    );
}
// TEMP: font pairings for preview with ?font=1|2|3|4. Remove the unused
// pairings once one is chosen.
import {
  Geist,
  Geist_Mono,
  Inter,
  Inter_Tight,
  Space_Grotesk,
  Instrument_Serif,
} from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--f-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--f-geist-mono" });
const inter = Inter({ subsets: ["latin"], variable: "--f-inter" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--f-inter-tight" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--f-space" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--f-instrument",
});

const mono = "var(--f-geist-mono), ui-monospace, monospace";

export const fontPairings = {
  1: { name: "Geist + Geist Mono", heading: "var(--f-geist)", body: "var(--f-geist)", mono },
  2: { name: "Inter Tight + Inter", heading: "var(--f-inter-tight)", body: "var(--f-inter)", mono },
  3: { name: "Space Grotesk + Inter", heading: "var(--f-space)", body: "var(--f-inter)", mono },
  4: {
    name: "Instrument Serif + Inter",
    heading: "var(--f-instrument)",
    body: "var(--f-inter)",
    mono,
    serifHeadings: true,
  },
};

export const fontVariables = [
  geist,
  geistMono,
  inter,
  interTight,
  spaceGrotesk,
  instrumentSerif,
]
  .map((f) => f.variable)
  .join(" ");

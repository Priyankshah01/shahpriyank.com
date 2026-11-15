import { Geist, Geist_Mono } from "next/font/google";

// Site typefaces, self-hosted by next/font. The CSS variables are mapped to
// Tailwind's font-sans / font-mono in styles/globals.css.
export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

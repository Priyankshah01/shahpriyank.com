import "@/styles/globals.css";
import "../styles/ProfileCard.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { geistSans, geistMono } from "../lib/fonts";

export default function App({ Component, pageProps, router }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Me.jpg" />
      </Head>
      {/* Site-wide defaults; each page overrides these with its own <Seo>. */}
      <Seo />

      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />

      <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        <motion.main
          key={router.asPath}
          className={router.pathname === "/" ? "" : "pt-20"}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
      </MotionConfig>
    </div>
  );
}
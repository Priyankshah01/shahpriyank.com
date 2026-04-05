import "@/styles/globals.css";
import "../styles/TiltedCard.css";
import "../styles/DarkVeil.css";
import "../styles/ProfileCard.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "motion/react";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Priyank Shah | UI/UX Designer & Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Priyank Shah — UI/UX Designer and Frontend Developer crafting thoughtful digital experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Me.jpg" />
      </Head>

      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={router.asPath}
          className="pt-20"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </>
  );
}
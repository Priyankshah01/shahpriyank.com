import "@/styles/globals.css";
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
        <title>Priyank Shah | Product Designer & Design Engineer</title>
        <meta
          name="description"
          content="Priyank Shah — product designer who designs and ships. Commerce at Walmart, healthcare at AlayaCare, Toronto-based."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Me.jpg" />
      </Head>

      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />

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
    </>
  );
}
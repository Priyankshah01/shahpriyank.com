import "@/styles/globals.css";
import '../styles/Navbar.css';
import '../styles/About.css';
import '../styles/Hero.css';
import '../styles/Project.css';
import '../styles/ProjectIntro.css';
import '../styles/ConnectSection.css'
import '../styles/Footer.css';
import "../styles/Connect.css";
import "../styles/TiltedCard.css";
import { Toaster } from 'react-hot-toast';
import "../styles/DarkVeil.css";
import "../styles/ProfileCard.css";
import Head from 'next/head';




export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Priyank Shah | Designer | Developer</title>
        <link rel="icon" href="../images/Me.jpg" />
      </Head>
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  )
}
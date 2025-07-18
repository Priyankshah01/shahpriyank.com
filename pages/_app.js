import "@/styles/globals.css";
import '../styles/Navbar.css';
import '../styles/About.css';
import '../styles/Hero.css';
import '../styles/Project.css';
import '../styles/ProjectIntro.css';
import '../styles/ConnectSection.css'
import '../styles/Footer.css';
import "../styles/Connect.css";
import { Toaster } from 'react-hot-toast';


export default function App({ Component, pageProps }) {
 return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  )
}
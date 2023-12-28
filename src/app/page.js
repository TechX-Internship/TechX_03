// import Image from "next/image";
import styles from "./styles/home.module.css";
import Header from "./componants/Header";
import MinBenner from "./componants/MinBenner";
import AboutUS from "./componants/AboutUs";
import Services from "./componants/Services";
import LeadingWay from "./componants/LeadingWay";
import Gallery from "./componants/Gallery";
import Blog from "./componants/Blog";
import Experts from "./componants/Experts";
import Reviews from "./componants/Reviews";
import Footer from "./componants/Footer";

export default function Home() {
  return (
    <main className={styles.Main}>
      <Header />
      <MinBenner />
      <AboutUS />
      <Services />
      <LeadingWay />
      <Gallery />
      <Blog />
      <Experts />
      <Reviews />
      <Footer />
    </main>
  );
}

import styles from "./styles/home.module.css";
import MainBenner from "./componants/MainBenner";
import AboutUS from "./componants/AboutUs";
import Services from "./componants/Services";
import LeadingWay from "./componants/LeadingWay";
import Gallery from "./componants/Gallery";
import Blog from "./componants/blog/Blog";
import Experts from "./componants/Experts";
import Reviews from "./componants/Reviews";
import Footer from "./componants/Footer";

export default function Home() {
  return (
    <main className={styles.Main}>
      <MainBenner />
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

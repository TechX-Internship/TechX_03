// import Image from "next/image";
import styles from "./styles/home.module.css";
import Header from "./componants/Header";
import MinBenner from "./componants/MinBenner";
import AboutUS from "./componants/AboutUs";

export default function Home() {
  return (
    <main className={styles.Main}>
      <Header />
      <MinBenner />
      <AboutUS />
    </main>
  );
}

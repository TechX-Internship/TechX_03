import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import LogoImage from "../../../public/images/logo.png";
import NavBAr from "./NavBAr";

const Header = () => {
  return (
    <div className={styles.Container}>
      <header className={styles.Header}>
        <Image src={LogoImage} alt="The Logo Of Hospital" />
        <NavBAr />
        <button className={styles.FreeBtn}>Free Cansultation</button>
      </header>
    </div>
  );
};

export default Header;

import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import LogoImage from "../../../public/logo.png";
import NavBAr from "./NavBAr";
import Button from "./Button";

const Header = () => {
  return (
    <div className={"Container"}>
      <header className={styles.Header}>
        <Image src={LogoImage} alt="The Logo Of Hospital" />
        <NavBAr />
        <Button BtnName="Free Cansultation" />
      </header>
    </div>
  );
};

export default Header;

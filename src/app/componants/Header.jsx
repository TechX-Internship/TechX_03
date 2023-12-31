import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import LogoImage from "../../../public/logo.png";
import Frame from "../../../public/Frame.svg";

import NavBAr from "./NavBAr";
import { HeaderButton } from "./Button";

const Header = () => {
  return (
    <div className={"Container"}>
      <header className={styles.Header}>
        <Image src={LogoImage} alt="The Logo Of Hospital" />
        <Image src={Frame} className="d-lg-none me-2" alt="" />
        <NavBAr />
        <HeaderButton BtnName="Free Consultation" />
      </header>
    </div>
  );
};

export default Header;

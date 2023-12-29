import React from "react";
import Styles from "../styles/Footer.module.css";

import FooterBlue from "./FooterBlue";

const Footer = () => {
  return (
    <>
      <div className={Styles.FooterRed}>
        <div className="Container">
          <div className={Styles.Inner}>
            <div className={Styles.RedLeft}>
              <h4 className={Styles.Title}>Subscribe Newsletter</h4>
              <p className={Styles.SubTitle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has took a galley of type and
                scrambled book.
              </p>
            </div>
            <div className={Styles.RedRight}>
              <input className={Styles.InputEmail} type="email" placeholder="Your Email Address....." />
              <button className={Styles.Btn}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <FooterBlue />
    </>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";
import Styles from "../styles/AboutPage.module.css";
import Img1 from "../../../public/Rectangle 72.png";
import Img2 from "../../../public/Rectangle 73.png";

import Header from "../componants/Header";
import SubPageMainBenner from "../componants/SubPageMainBenner";
import AboutUs from "../componants/AboutUs";
import FooterBlue from "../componants/FooterBlue";

const page = () => {
  return (
    <div>
      <SubPageMainBenner Name="About Us" />

      <AboutUs />
      <div className="Container">
        <div className={Styles.AboutVision}>
          <h2 className={Styles.SubTitle}>
            Professionalism And Commitment Is <br /> Our Dedication
          </h2>
          <div className={Styles.Card}>
            <Image src={Img1} alt="" />
            <div className={Styles.TextDiv}>
              <span className={Styles.TitleSpan1}>Our</span>
              <span className={Styles.TitleSpan2}>Vision</span>
              <p className={Styles.Text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod see tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                reprehenderit in voluptate.
              </p>
              <p className={Styles.Text}>
                That ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor to be incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate.
              </p>
            </div>
          </div>
          <div className={Styles.Card}>
            <div className={Styles.TextDiv}>
              <span className={Styles.TitleSpan1}>Our</span>
              <span className={Styles.TitleSpan2}>Mission</span>
              <p className={Styles.Text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod see tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                reprehenderit in voluptate.
              </p>
              <p className={Styles.Text}>
                That ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor to be incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate.
              </p>
            </div>
            <Image src={Img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

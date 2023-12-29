import React from "react";
import Styles from "../styles/GalleryPage.module.css";

import GalleryPhotos from "../componants/GalleryPhotos";

import Header from "../componants/Header";
import SubPageMainBenner from "../componants/SubPageMainBenner";
import FooterBlue from "../componants/FooterBlue";

const page = () => {
  return (
    <div>
      <Header />
      <SubPageMainBenner Name="Gallery" />

      <div className="Container">
        <div className={Styles.Gallery}>
          <div className={Styles.Titles}>
            <h2 className={Styles.SubTitle}>Our Gallery</h2>
            <p className={Styles.Text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit magna at dui commodo facilisis. Vestibulum viverra
              risus id diam hendrerit vehicula.
            </p>
          </div>
          <GalleryPhotos />
        </div>
      </div>

      <FooterBlue />
    </div>
  );
};

export default page;

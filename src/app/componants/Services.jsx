import React from "react";

import Styles from "../styles/Services.module.css";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="Container">
      <div className={Styles.Services}>
        <div className={Styles.ServicesTitles}>
          <span className={Styles.ServicesTitle}>Our Services</span>
          <h3 className={Styles.ServicesSubTitle}>
            Provide The Best Treatment For your <br /> Child’s Health
          </h3>
          <p className={Styles.ServicesText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy
            text ever since the 1500s, when an unknown printe.
          </p>
        </div>
        <div className={Styles.CardsOuter}>
          <ServicesCard title="Immunizations" />
          <ServicesCard title="Pathology" />
          <ServicesCard title="Precise Diagnosis" />
        </div>
        <h3></h3>
      </div>
    </div>
  );
};

export default Services;

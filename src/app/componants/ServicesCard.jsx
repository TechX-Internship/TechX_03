import React from "react";
import Styles from "../styles/ServicesCard.module.css";

import ServicesSvg from "./ServicesSvg";

const ServicesCard = ({ title }) => {
  return (
    <div className={Styles.W3}>
      <div className={Styles.SCard}>
        <ServicesSvg title={title} />
        <div className={Styles.SCardBody}>
          <p className={Styles.SCardText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
          </p>
          <button className={Styles.SCardBtn}> Read More</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

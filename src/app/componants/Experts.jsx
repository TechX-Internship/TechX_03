import React from "react";
import Styles from "../styles/Experts.module.css";
import ExpertsCard from "./ExpertsCard";

const Experts = () => {
  return (
    <div className="Container">
      <div className="text-center">
        <div className={Styles.Titles}>
          <h4 className={Styles.Title}>Team Membar</h4>
          <h2 className={Styles.SubTitle}>Our Experts</h2>
          <p className={Styles.Text}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don t look even slightly believable.
          </p>
        </div>
        <div className="row">
          <ExpertsCard />
          <ExpertsCard />
          <ExpertsCard />
          <ExpertsCard />
        </div>
        <button className={Styles.Btn}>View More</button>
      </div>
    </div>
  );
};

export default Experts;

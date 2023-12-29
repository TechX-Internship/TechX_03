import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ BtnName }) => {
  return (
    <div>
      <button className={styles.Btn}>{BtnName}</button>
    </div>
  );
};

export default Button;

import React from "react";
import styles from "../styles/Header.module.css";

const NavBAr = () => {
  return (
    <nav>
      <ul className={styles.Navbar}>
        <li class={styles.PageLink} onClick={"/"}>
          Home
        </li>
        <li class={styles.PageLink}>About Us</li>
        <li class={styles.PageLink}>Services</li>
        <li class={styles.PageLink}>Gallery</li>
        <li class={styles.PageLink}>Blog</li>
        <li class={styles.PageLink}>Team</li>
        <li class={styles.PageLink}>Contacts Us</li>
      </ul>
    </nav>
  );
};

export default NavBAr;

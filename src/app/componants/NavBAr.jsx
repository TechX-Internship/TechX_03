import React from "react";
import styles from "../styles/Header.module.css";

const NavBAr = () => {
  return (
    <nav className="d-none d-lg-block">
      <ul className={styles.Navbar}>
        <li class={styles.PageLink} onClick={"/"}>
          <a href={`/`}>Home</a>
        </li>
        <li class={styles.PageLink}>
          <a href={`/about`}>About Us</a>
        </li>
        <li class={styles.PageLink}>
          <a href={`/services`}>Services</a>
        </li>
        <li class={styles.PageLink}>
          <a href={`/gallery`}>Gallery</a>
        </li>
        <li class={styles.PageLink}>
          <a href={`/blog`}>Blog</a>
        </li>
        <li class={styles.PageLink}>
          <a href={`/team`}>Team</a>
        </li>
        <li class={styles.PageLink}>
          <a href={`/contactUs`}>Contacts Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBAr;

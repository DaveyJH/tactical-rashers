import React from "react";

import Navbar from "react-bootstrap/Navbar";

import styles from "../assets/css/NavBarLogo.module.css";
import Logo from "../assets/images/logo512.png";

const NavBarLogo = () => (
  <Navbar.Brand to="/" className={styles.Title}>
    <img src={Logo} alt="logo" height="45" className={styles.Logo} />
    <div className={styles.SplitLevel}>
      <span>TACTICAL</span>
      <span>RASHERS</span>
    </div>
  </Navbar.Brand>
);

export default NavBarLogo;

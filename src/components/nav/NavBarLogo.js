import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import { useNavBarCollapse } from "../../contexts/NavBarCollapseContext";

import Navbar from "react-bootstrap/Navbar";

import Logo from "../../assets/images/logo512.png";
import styles from "../../assets/css/nav/NavBarLogo.module.css";

const NavBarLogo = () => {
  const { logoRef } = useNavBarCollapse();

  return (
    <Navbar.Brand ref={logoRef} as={NavLink} to="/" className={styles.Title}>
      <img src={Logo} alt="logo" height="45" className={styles.Logo} />
      <h1 className={styles.SplitLevel}>
        <span>TACTICAL</span>
        <span>RASHERS</span>
      </h1>
    </Navbar.Brand>
  );
};

export default NavBarLogo;

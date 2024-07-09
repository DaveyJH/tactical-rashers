import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import NavBarLogo from "./NavBarLogo";
import NavBarNavigation from "./NavBarNavigation";

import styles from "../assets/css/NavBar.module.css";

const NavBar = () => {

  return (
    <Navbar expand="md" fixed="top" bg="secondary" className={styles.NavBar}>
      <Container>
        <NavBarLogo />
        <NavBarNavigation />
      </Container>
    </Navbar>
  );
};

export default NavBar;

import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import NavBarLogo from "./NavBarLogo";
import NavBarNavigation from "./NavBarNavigation";
import { useNavBarCollapse } from "../../contexts/NavBarCollapseContext";

const NavBar = () => {
  const { mainRef, expanded } = useNavBarCollapse();

  return (
    <Navbar ref={mainRef} expanded={expanded} expand="md" fixed="top" bg="secondary">
      <Container>
        <NavBarLogo />
        <NavBarNavigation />
      </Container>
    </Navbar>
  );
};

export default NavBar;

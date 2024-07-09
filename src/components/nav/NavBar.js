import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import NavBarLogo from "./NavBarLogo";
import NavBarNavigation from "./NavBarNavigation";

const NavBar = () => {

  return (
    <Navbar expand="md" fixed="top" bg="secondary">
      <Container>
        <NavBarLogo />
        <NavBarNavigation />
      </Container>
    </Navbar>
  );
};

export default NavBar;

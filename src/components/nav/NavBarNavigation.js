import React from "react";

import { useCurrentUser } from "../../contexts/CurrentUserContext";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import GamesDropdown from "./GamesDropdown";
import NavBarLink from "./NavBarLink";

import styles from "../../assets/css/nav/NavBarNavigation.module.css";

const NavBarNavigation = () => {
  const currentUser = useCurrentUser();

  return (
    <>
      <div className={`${styles.ToggleContainer} d-flex justify-content-end`}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.Toggle} />
      </div>
      <Container className="justify-content-end">
        <Row>
          <Col>
            <Navbar.Collapse id="basic-navbar-nav" className="text-right">
              <Nav className="me-auto align-items-md-center">
                <NavBarLink exact to="/" textContent="Game feed" active border />
                {currentUser && <GamesDropdown />}
                <NavBarLink to="/profile" textContent="Profile" active border />
                <NavBarLink to="/rules" textContent="Rules" active border />
                {currentUser ? (
                  <NavBarLink to="/" textContent="Sign out" border signOut />
                ) : (
                  <>
                    <NavBarLink to="/sign-in" textContent="Sign in" active border />
                    <NavBarLink to="/sign-up" textContent="Sign up" active />
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavBarNavigation;

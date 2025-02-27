import React from "react";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useNavBarCollapse, useSetNavBarCollapse } from "../../contexts/NavBarCollapseContext";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import GamesDropdown from "./GamesDropdown";
import NavBarLink from "./NavBarLink";

import styles from "../../assets/css/nav/NavBarNavigation.module.css";

/**
 * @returns {React.Component} navigation bar with context for expanded state
 */
const NavBarNavigation = () => {
  const currentUser = useCurrentUser();

  const { expanded } = useNavBarCollapse();
  const { setExpanded } = useSetNavBarCollapse();

  return (
    <>
      <div className={`${styles.ToggleContainer} d-flex justify-content-end`}>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
          className={styles.Toggle}
        />
      </div>
      <Container className="justify-content-end">
        <Row>
          <Col>
            <Navbar.Collapse id="basic-navbar-nav" className="text-right">
              <Nav className="me-auto align-items-md-center">
                <NavBarLink exact to="/" textContent="Game feed" active border />
                {/* only display for logged in users */}
                {currentUser && (
                  <>
                    <GamesDropdown />
                    <NavBarLink exact to={`/profiles/${currentUser.profile_id}`} textContent="Profile" active border />
                  </>
                )}
                <NavBarLink to="/rules" textContent="Rules" active border />
                {/* show relevant sign in/up/out links depending on user state */}
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

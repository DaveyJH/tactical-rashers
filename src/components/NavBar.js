import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Logo from "../assets/images/logo512.png";
import styles from "../assets/css/NavBar.module.css";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import { removeTokenTimestamp } from "../utils/utils";
import GamesDropdown from "./GamesDropdown";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // todo comment out clg
      console.log(err);
    }
  };

  return (
    <Navbar expand="md" fixed="top" bg="secondary" className={styles.NavBar}>
      <Container>
        <Navbar.Brand to="/" className={styles.Title}>
          <img src={Logo} alt="logo" height="45" className={styles.Logo} />
          <div className={styles.SplitLevel}>
            <span>TACTICAL</span>
            <span>RASHERS</span>
          </div>
        </Navbar.Brand>
        <div className={`${styles.ToggleContainer} d-flex justify-content-end`}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.Toggle} />
        </div>
        <Container className="justify-content-end">
          <Row>
            <Col>
              <Navbar.Collapse id="basic-navbar-nav" className="text-right">
                <Nav className="me-auto align-items-md-center">
                  <NavLink
                    exact
                    to="/"
                    className={`${styles.NavLink} ${styles.NavBorder} font-weight-bold text-md-center`}
                    activeClassName={styles.Active}>
                    Game feed
                  </NavLink>
                  {currentUser && <GamesDropdown />}
                  <NavLink
                    to="/profile"
                    className={`${styles.NavLink} ${styles.NavBorder} font-weight-bold text-md-center`}
                    activeClassName={styles.Active}>
                    Profile
                  </NavLink>
                  <NavLink
                    to="/rules"
                    className={`${styles.NavLink} ${styles.NavBorder} font-weight-bold text-md-center`}
                    activeClassName={styles.Active}>
                    Rules
                  </NavLink>
                  <NavLink
                    to="/"
                    className={`${styles.NavLink} ${styles.NavBorder} font-weight-bold text-md-center`}
                    onClick={handleSignOut}>
                    Sign out
                  </NavLink>
                  <NavLink
                    to="/sign-in"
                    className={`${styles.NavLink} ${styles.NavBorder} font-weight-bold text-md-center`}
                    activeClassName={styles.Active}>
                    Sign in
                  </NavLink>
                  <NavLink
                    to="/sign-up"
                    className={`${styles.NavLink} font-weight-bold text-md-center`}
                    activeClassName={styles.Active}>
                    Sign up
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Container>
    </Navbar>
  );
};

export default NavBar;

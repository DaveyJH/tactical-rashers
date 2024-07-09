import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Col, Row } from "react-bootstrap";

import Logo from "../assets/images/logo512.png";
import styles from "../assets/css/NavBar.module.css";

const NavBar = () => {
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
                <Nav className="me-auto">
                  <NavLink
                    exact
                    to="/"
                    className={`${styles.NavLink} font-weight-bold`}
                    activeClassName={styles.Active}>
                    Game feed
                  </NavLink>
                  <NavDropdown title="Games" id="games-nav-dropdown" className="font-weight-bold">
                    <NavDropdown.Item
                      as={NavLink}
                      to="/games/create"
                      className={`${styles.NavLink} font-weight-bold text-right`}
                      activeClassName={styles.Active}>
                      Create game
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={NavLink}
                      to="/games/active"
                      className={`${styles.NavLink} text-right`}
                      activeClassName={styles.Active}>
                      Active games
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={NavLink}
                      to="/games/completed"
                      className={`${styles.NavLink} text-right`}
                      activeClassName={styles.Active}>
                      Completed games
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavLink
                    to="/profile"
                    className={`${styles.NavLink} font-weight-bold`}
                    activeClassName={styles.Active}>
                    Profile
                  </NavLink>
                  <NavLink to="/rules" className={`${styles.NavLink} font-weight-bold`} activeClassName={styles.Active}>
                    Rules
                  </NavLink>
                  {/* <NavLink to="/sign-out" className={`${styles.NavLink} font-weight-bold`}>
                    Sign out
                  </NavLink> */}
                  <NavLink
                    to="/sign-in"
                    className={`${styles.NavLink} font-weight-bold`}
                    activeClassName={styles.Active}>
                    Sign in
                  </NavLink>
                  <NavLink
                    to="/sign-up"
                    className={`${styles.NavLink} font-weight-bold`}
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

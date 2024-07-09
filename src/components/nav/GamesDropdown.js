import React from "react";

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import NavDropdown from "react-bootstrap/NavDropdown";

import styles from "../../assets/css/nav/NavBarLink.module.css";

const GamesDropdown = () => {
  return (
    <NavDropdown title="Games" id="games-nav-dropdown" className={`align-middle font-weight-bold ${styles.NavBorder}`}>
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
  );
};

export default GamesDropdown;

import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import { useCurrentUser } from "../../contexts/CurrentUserContext";

import NavDropdown from "react-bootstrap/NavDropdown";

import styles from "../../assets/css/nav/NavBarLink.module.css";

/**
 * @returns {React.Component} a dropdown menu with links to create, active, and completed games
 */
const GamesDropdown = () => {
  const currentUser = useCurrentUser();

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
        to={`/profiles/${currentUser?.profile_id}/active`}
        className={`${styles.NavLink} text-right`}
        activeClassName={styles.Active}>
        Active games
      </NavDropdown.Item>
      <NavDropdown.Item
        as={NavLink}
        to={`/profiles/${currentUser?.profile_id}/completed`}
        className={`${styles.NavLink} text-right`}
        activeClassName={styles.Active}>
        Completed games
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default GamesDropdown;

import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { removeTokenTimestamp } from "../../utils/utils";

import styles from "../../assets/css/nav/NavBarLink.module.css";

/**
 * @param {Props} to **required** the path to navigate to
 * @param {Props} exact whether the path should be exact
 * @param {Props} border whether the link should have a border class applied
 * @param {Props} textContent the text content of the link
 * @param {Props} active whether the link is active
 * @param {Props} signOut whether the link is for signing out
 * @returns {React.Component} a navigation link
 */
const NavBarLink = ({ to, exact, border, textContent, active, signOut }) => {
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.error(err);
    }
  };

  return (
    <NavLink
      exact={!!exact}
      to={to}
      className={`
        ${styles.NavLink}
        ${border ? styles.NavBorder : ""}
        font-weight-bold
        text-md-center
      `}
      activeClassName={active ? styles.Active : ""}
      onClick={signOut && handleSignOut}>
      {textContent}
    </NavLink>
  );
};

export default NavBarLink;

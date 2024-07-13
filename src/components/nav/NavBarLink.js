import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { removeTokenTimestamp } from "../../utils/utils";

import styles from "../../assets/css/nav/NavBarLink.module.css";

const NavBarLink = ({ to, exact, border, textContent, active, signOut }) => {
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // todo comment out clg
      console.error(err);
    }
  };

  return (
    <NavLink
      exact={exact}
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

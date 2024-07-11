import React from "react";

import styles from "../../assets/css/profiles/GamesCount.module.css";

const GamesCount = ({ status, count, underline, notActive }) => {
  return (
    <p>
      <span className={underline ? styles.UnderlinedCount : ""}>{status} games</span>: {count}
    </p>
  );
};

export default GamesCount;

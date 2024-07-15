import React from "react";

import styles from "../../assets/css/profiles/GamesCount.module.css";

const GamesCount = ({ status, count, underline, notActive }) => {
  return (
    <p className="d-flex justify-content-between px-4">
      <span className={(underline && styles.UnderlinedCount) || (notActive && styles.NotActiveCount)}>
        {status} games:
      </span>
      <span> {count}</span>
    </p>
  );
};

export default GamesCount;

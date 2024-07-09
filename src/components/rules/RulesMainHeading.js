import React from "react";

import styles from "../../assets/css/rules/RulesMainHeading.module.css";

const RulesMainHeading = () => (
  <h1 className={`${styles.MainHeading} mt-5 py-3`}>
    <span className="mb-1">Backgammon:</span> A quick guide
  </h1>
);

export default RulesMainHeading;

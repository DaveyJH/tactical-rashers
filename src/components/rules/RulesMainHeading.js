import React from "react";

import styles from "../../assets/css/rules/RulesMainHeading.module.css";

/**
 * @returns {React.Component} the main heading of the rules page
 */
const RulesMainHeading = () => (
  <h1 className={`${styles.MainHeading} my-4 py-3`}>
    <span className="mb-1">Backgammon:</span> A quick guide
  </h1>
);

export default RulesMainHeading;

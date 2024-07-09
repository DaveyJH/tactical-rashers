import React from "react";

import styles from "../../assets/css/rules/RulesPara.module.css";

const RulesPara = ({ content }) => {
  return <p className={`${styles.RulesPara} px-4 px-lg-5`}>{content}</p>;
};

export default RulesPara;

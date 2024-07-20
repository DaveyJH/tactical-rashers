import React from "react";

import styles from "../../assets/css/rules/RulesPara.module.css";

/**
 * @param {Props} content the content of the paragraph
 * @returns a paragraph for the rules page
 */
const RulesPara = ({ content }) => {
  return <p className={`${styles.RulesPara} px-4 px-lg-5`}>{content}</p>;
};

export default RulesPara;

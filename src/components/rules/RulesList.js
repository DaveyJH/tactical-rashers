import React from "react";

import styles from "../../assets/css/rules/RulesList.module.css";

/**
 * @param {Props} ordered whether the list is ordered or not
 * @param {Props} content the content of the list
 * @returns a list for the rules page
 */
const RulesList = ({ ordered, content }) => (
  <>
    {ordered ? (
      <ol className={`${styles.List} text-left`}>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    ) : (
      <ul className={`${styles.List} ${styles.UnorderedList} text-left`}>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </>
);

export default RulesList;

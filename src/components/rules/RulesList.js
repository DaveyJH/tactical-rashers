import React from "react";

import styles from "../../assets/css/rules/RulesList.module.css";

const RulesList = ({ ordered, content, short }) => {
  return (
    <>
      {ordered ? (
        <ol className={`${styles.List} text-left`}>
          {content.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ol>
      ) : (
        <ul className={`${styles.List} ${styles.UnorderedList} text-left`}>
          {content.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default RulesList;

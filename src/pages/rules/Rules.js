import React from "react";

import RulesMainHeading from "../../components/rules/RulesMainHeading";
import RulesSection from "../../components/rules/RulesSection";

import RulesContent from "../../content/RulesContent";

/**
 * @returns the rules page with all the necessary sections
 */
const Rules = () => {
  const sections = Object.entries(RulesContent);

  return (
    <>
      <RulesMainHeading />
      {sections.map(([name, section], i) => (
        <RulesSection key={name} even={i % 2 === 0} name={name} {...section} />
      ))}
      <div className="mb-5" />
    </>
  );
};

export default Rules;

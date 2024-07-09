import React from "react";

import RulesMainHeading from "../../components/rules/RulesMainHeading";
import RulesSection from "../../components/rules/RulesSection";

import RulesContent from "../../content/RulesContent";

const Rules = () => {
  return (
    <>
      <RulesMainHeading />
      {Object.entries(RulesContent).map(([name, { title, type, content, image, alt, ordered, short }], i) => (
        <RulesSection
          key={i}
          even={i % 2 === 0}
          name={name}
          title={title}
          type={type}
          content={content}
          image={image}
          alt={alt}
          ordered={ordered}
          short={short}
        />
      ))}
      <div className="mb-5" />
    </>
  );
};

export default Rules;

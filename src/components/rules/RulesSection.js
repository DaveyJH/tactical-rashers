import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import RulesHeading from "./RulesHeading";
import RulesPara from "./RulesPara";
import RulesList from "./RulesList";
import RulesImage from "./RulesImage";

import styles from "../../assets/css/rules/RulesSection.module.css";

/**
 * A section for the rules page that utilises the RulesContent object which allows a non-technical user to easily add new sections to the rules page.
 * @param {Props} name the descriptive name of the section
 * @param {Props} title the title of the section
 * @param {Props} type the type of content in the section
 * @param {Props} content the content of the section
 * @param {Props} image the image of the section
 * @param {Props} alt the alt text for the image
 * @param {Props} ordered whether a list is ordered or not
 * @param {Props} even whether the section is even in a sequence or not
 * @param {Props} short a value for the width of the content if it is short
 * @returns a section for the rules page
 */
const RulesSection = ({ name, title, type, content, image, alt, ordered, even, short }) => (
  <Container className={styles.RulesSection}>
    <hr />
    <RulesHeading content={title} />
    <Row className={`justify-content-center align-items-center ${(even && "flex-row-reverse") || ""}`}>
      <Col md={short || 8} className="px-0 px-md-2">
        {type === "para" ? <RulesPara content={content} /> : <RulesList content={content} ordered={ordered} />}
      </Col>
      {image && (
        <Col md={4} className={styles.MobileHide}>
          <RulesImage src={image} alt={alt} />
        </Col>
      )}
    </Row>
    {name === "board" && <Image src={image} alt={alt} fluid className="d-md-none" />}
  </Container>
);

export default RulesSection;

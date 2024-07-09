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

const RulesSection = ({ name, title, type, content, image, alt, ordered, even, short }) => {
  return (
    <Container className={styles.RulesSection}>
      <hr />
      <RulesHeading content={title} />
      <Row className="justify-content-center align-items-center">
        {image && even && (
          <Col md={4} className={styles.MobileHide}>
            <RulesImage src={image} alt={alt} />
          </Col>
        )}
        <Col md={short || 8} className="px-0 px-md-2">
          {type === "para" ? <RulesPara content={content} /> : <RulesList content={content} ordered={ordered} />}
        </Col>
        {image && !even && (
          <Col md={4} className={styles.MobileHide}>
            <RulesImage src={image} alt={alt} />
          </Col>
        )}
      </Row>
      {name === "board" && <Image src={image} alt={alt} fluid className="d-md-none" />}
    </Container>
  );
};

export default RulesSection;

import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const RulesHeading = ({ content }) => (
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <h2 className="py-3 mb-3">{content}</h2>
      </Col>
    </Row>
);

export default RulesHeading;

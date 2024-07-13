import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


// todo change to use correct name with context
const MoveCounter = ({number, player}) => {
  return (
    <Row className="space-between">
      <Col className="text-left">{player}</Col>
      <Col className="text-right">{number}</Col>
    </Row>
  );
};

export default MoveCounter;

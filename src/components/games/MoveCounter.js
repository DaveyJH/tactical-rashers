import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// todo change to use correct name with context
const MoveCounter = ({number, player}) => {
  return (
    <Row className="space-between m-0">
      <Col xs={9} className="text-left px-2">{player}</Col>
      <Col className="text-right px-2">{number}</Col>
    </Row>
  );
};

export default MoveCounter;

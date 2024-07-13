import React from "react";

import { Row, Col } from "react-bootstrap";
import { useMoves } from "../../contexts/MovesContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


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

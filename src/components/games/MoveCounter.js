import React from "react";

import { Row, Col } from "react-bootstrap";
import { useMoves } from "../../contexts/MovesContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


// todo change to use correct name with context
const MoveCounter = ({count}) => {
  const moves = useMoves();
  const currentUser = useCurrentUser();

  return (
    <Row className="space-between">
      <Col className="text-left">{currentUser?.username}</Col>
      <Col className="text-right">{count || moves.count + 1}</Col>
    </Row>
  );
};

export default MoveCounter;

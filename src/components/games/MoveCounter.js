import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/**
 * @param {Props} number the sequential number of the move
 * @param {Props} player the owner of the move
 * @returns {React.JSX.Element} a row with the move owner and move number
 */
const MoveCounter = ({ number, player }) => {
  return (
    <Row className="space-between m-0">
      <Col xs={9} className="text-left px-2">
        {player}
      </Col>
      <Col className="text-right px-2">{number}</Col>
    </Row>
  );
};

export default MoveCounter;

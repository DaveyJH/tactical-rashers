import React from "react";

import Container from "react-bootstrap/Container";
import MoveCounter from "./MoveCounter";

// todo update to avoid using count prop drill
const Move = ({ content, count }) => {
  console.log(count)
  return (
    <Container>
      <MoveCounter key={count} count={count}/>
      <p>{content}</p>
    </Container>
  );
};

export default Move;

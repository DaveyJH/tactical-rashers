import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import styles from "../../assets/css/games/GameHeader.module.css";

const GameHeader = ({ player1, player2, game }) => {
  return (
    <Container className={`${styles.GameHeader} mt-2`}>
      <h1>
        <Row noGutters className="align-items-center">
          <Col xs={5} className="text-truncate text-right">
            {player1.owner}
            <Image height={25} src={player1.image} alt="player 1 avatar" rounded />
          </Col>
          <Col>vs.</Col>
          <Col xs={5} className="text-truncate text-left">
            <Image height={25} src={player2.image} alt="player 2 avatar" rounded />
            {player2.owner}
          </Col>
        </Row>
      </h1>
      <hr className="my-1" />
      <Row>
        <Col>
          <p className="mb-1">
            {!game.active && (game.winner === player1.id ? `${player1.owner} wins: ` : `${player2.owner} wins: `)}
            {game.all_moves.length} moves
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default GameHeader;

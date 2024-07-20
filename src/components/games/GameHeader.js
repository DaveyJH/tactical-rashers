import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import styles from "../../assets/css/games/GameHeader.module.css";

/**
 * @param {Props} player1 the first player data
 * @param {Props} player2 the second player data
 * @param {Props} game the game data
 * @param {Props} movesCount the number of moves in the game
 * @returns {React.JSX.Element} a header with player names and number of moves
 */
const GameHeader = ({ player1, player2, game, movesCount }) => {
  return (
    <Container className={`${styles.GameHeader} mt-2`}>
      <h1>
        <Row noGutters className="align-items-center">
          <Col xs={5} className="text-truncate text-right">
            <Link to={`/profiles/${player1?.id}`}>
              {player1?.owner}
              <Image height={25} src={player1?.image} alt="player 1 avatar" rounded />
            </Link>
          </Col>
          <Col>vs.</Col>
          <Col xs={5} className="text-truncate text-left">
            <Link to={`/profiles/${player2?.id}`}>
              <Image height={25} src={player2?.image} alt="player 2 avatar" rounded />
              {player2.owner}
            </Link>
          </Col>
        </Row>
      </h1>
      <hr className="my-1" />
      <Row>
        <Col>
          <p className="mb-1">
            {/* display game winner in a lazy way - can be "tricked" by admin setting game to inactive through back end */}
            {!game?.active && (game?.winner === player1?.id ? `${player1?.owner} wins: ` : `${player2?.owner} wins: `)}
            {movesCount} moves
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default GameHeader;

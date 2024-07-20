import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { useAllProfileData } from "../../contexts/AllProfileDataContext";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import FontAwesome from "../FontAwesome";

import styles from "../../assets/css/games/GameBrief.module.css";
import profileStyles from "../../assets/css/profiles/ProfileHeadline.module.css";

/**
 *
 * @param {*} game the game data
 * @returns a card with players, number of moves, and a button to view details
 */
const GameBrief = ({ id, all_moves, player1, player2, winner }) => {
  const numberOfMoves = all_moves.length;
  const allProfileData = useAllProfileData();

  const player1Data = allProfileData?.results?.find((profile) => profile.id === player1);
  const player2Data = allProfileData?.results?.find((profile) => profile.id === player2);

  return (
    <Card className={`mt-4 ${styles.GameCard}`}>
      <Container className="text-center text-break">
        <Row>
          <Col className="px-0">
            <Card.Body className="my-0 p-2">
              <Row className="justify-content-center align-items-center m-auto" noGutters>
                <Col xs={5} lg={2}>
                  <Image
                    role="presentation"
                    src={player1Data?.image}
                    className={profileStyles.ProfileImage}
                    alt="player 1 avatar"
                    fluid
                  />
                </Col>
                <Col className={styles.BiggerText}>
                  <Link to={`/profiles/${player1Data?.id}`}>
                    {player1Data?.owner}{" "}
                    {winner === player1 && <FontAwesome className="ml-2" iconName="fas fa-trophy" />}
                  </Link>
                </Col>
              </Row>
              <Row className="justify-content-center align-items-center m-auto" noGutters>
                vs.
              </Row>
              <Row className="justify-content-center align-items-center m-auto" noGutters>
                <Col className={styles.BiggerText}>
                  <Link to={`/profiles/${player2Data?.id}`}>
                    {winner === player2 && <FontAwesome className="mr-2" iconName="fas fa-trophy" />}{" "}
                    {player2Data?.owner}
                  </Link>
                </Col>
                <Col xs={5} lg={2}>
                  <Image
                    role="presentation"
                    src={player2Data?.image}
                    className={profileStyles.ProfileImage}
                    alt="player 2 avatar"
                    fluid
                  />
                </Col>
              </Row>
            </Card.Body>
          </Col>
          <Col className="px-0 d-flex align-items-center" xs={4}>
            <Card.Body className={`px-1 ${styles.numberOfMoves}`}>
              <Row className="flex-column" noGutters>
                <Col>No. of moves</Col>
                <Col className={styles.BiggerText}>{numberOfMoves}</Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
        <hr />
        <Button as={Link} to={`/games/${id}`} className="mb-3">
          View details
        </Button>
      </Container>
    </Card>
  );
};

export default GameBrief;

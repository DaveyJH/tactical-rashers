import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { useSetDice } from "../../contexts/DiceContext";

import styles from "../../assets/css/games/Dice.module.css";

const Dice = ({ value1, value2 }) => {
  const { handleNewDiceRoll } = useSetDice();
  const numberString = (value) => {
    switch (value) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
      default:
        return "question";
    }
  };
  return (
    <Container className="d-flex justify-content-center mb-3" fluid>
      {value1 ? (
        <Row className={`justify-content-between ${styles.Dice}`}>
          <Col className="px-2">
            <i className={`fas fa-dice-${numberString(value1)}`}></i>
            <span className="sr-only">numberString(value1)</span>
          </Col>
          <Col className="px-2">
            <i className={`fas fa-dice-${numberString(value2)}`}></i>
            <span className="sr-only">numberString(value1)</span>
          </Col>
        </Row>
      ) : (
        <Button onClick={handleNewDiceRoll}>
          Roll dice <i className="fas fa-dice"></i>
        </Button>
      )}
    </Container>
  );
};

export default Dice;

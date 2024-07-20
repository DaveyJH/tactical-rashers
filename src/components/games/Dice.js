import React from "react";

import { useSetDice } from "../../contexts/DiceContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

import styles from "../../assets/css/games/Dice.module.css";

/**
 * @param {Number} value the value of the dice
 * @returns the string value of the number
 */
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
      return "d6"; // default to 6-sided die but should never happen
  }
};

/**
 * @param {Object} `value1` and `value2`: the values of the dice
 * @returns {React.Component} a dice component with FA icons for values
 */
const Dice = ({ value1, value2 }) => {
  const { handleNewDiceRoll } = useSetDice();

  return (
    <Container className="d-flex justify-content-center mb-3" fluid>
      {/* if value1 exists, both values should exist */}
      {value1 ? (
        <Row className={`justify-content-between ${styles.Dice}`}>
          <Col className="px-2">
            <i className={`fas fa-dice-${numberString(value1)}`}></i>
            <span className="sr-only">{numberString(value1)}</span>
          </Col>
          <Col className="px-2">
            <i className={`fas fa-dice-${numberString(value2)}`}></i>
            <span className="sr-only">{numberString(value1)}</span>
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

import React from "react";

import Button from "react-bootstrap/Button";

import { useSetDice } from "../../contexts/DiceContext";

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
    <>
      {value1 ? (
        <>
          <i className={`fas fa-dice-${numberString(value1)}`}></i>
          <i className={`fas fa-dice-${numberString(value2)}`}></i>
        </>
      ) : (
        <Button onClick={handleNewDiceRoll}>
          Roll dice <i className="fas fa-dice"></i>
        </Button>
      )}
    </>
  );
};

export default Dice;

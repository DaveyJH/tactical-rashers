import React from "react";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useDice } from "../../contexts/DiceContext";
import { useMoves } from "../../contexts/MovesContext";
import { useCurrentGameData } from "../../contexts/CurrentGameDataContext";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Dice from "./Dice";
import MoveCounter from "./MoveCounter";
import CreateMove from "./CreateMove";

const DiceAndMoves = () => {
  const currentUser = useCurrentUser();
  const game = useCurrentGameData();
  const dice = useDice();
  const moves = useMoves();

  const isPlayer = () => game?.player1 === currentUser?.profile_id || game?.player2 === currentUser?.profile_id;
  const isAllowedToRoll = () =>
    isPlayer()
    && dice?.count === moves?.count
    && dice.results[0]?.owner !== currentUser?.profile_id;
  const isAllowedToMove = () => isPlayer() && dice?.count > moves?.count;

  return (
    <>
    {/* todo extract into component? */}
      {isAllowedToRoll() ? (
        <Card className="mb-2">
          <Card.Title className="px-1">
            <MoveCounter player={moves?.results[1]?.owner} number={moves.count + 1} />
          </Card.Title>
          <Card.Body className="p-1">
            <Button variant="primary">Declare opponent win</Button>
          </Card.Body>
          <hr />
          <Dice />
        </Card>
      ) : isAllowedToMove() && (
        <Card className="mb-2">
          <Card.Title className="px-1">
            <MoveCounter player={moves?.results[1]?.owner} number={moves.count + 1} />
          </Card.Title>
          <Card.Body className="p-1">
            <CreateMove />
          </Card.Body>
          <hr />
          <Dice {...dice.results[0]} />
        </Card>
      )}
      {moves?.results?.map((move, i) => (
        <Card className="mb-2" key={move.id}>
          <Card.Title className="px-1">
            <MoveCounter player={moves?.results[i]?.owner} number={moves.count - i} />
          </Card.Title>
          <Card.Body className="p-1">
            <p>{move.content}</p>
          </Card.Body>
          <hr />
          <Dice {...dice.results[i + isAllowedToMove()]} />
        </Card>
      ))}
    </>
  );
};

export default DiceAndMoves;

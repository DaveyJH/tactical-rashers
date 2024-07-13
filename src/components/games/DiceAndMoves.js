import React from "react";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useDice } from "../../contexts/DiceContext";
import { useMoves, useSetMoves } from "../../contexts/MovesContext";
import { useCurrentGameData } from "../../contexts/CurrentGameDataContext";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

import Dice from "./Dice";
import MoveCounter from "./MoveCounter";
import CreateMove from "./CreateMove";

import styles from "../../assets/css/games/DiceAndMoves.module.css";

const DiceAndMoves = () => {
  const currentUser = useCurrentUser();
  const game = useCurrentGameData();
  const dice = useDice();
  const { moves, error } = useMoves();
  const { handleDeleteMove } = useSetMoves();

  const isPlayer = () => game?.player1 === currentUser?.profile_id || game?.player2 === currentUser?.profile_id;
  const evenCounts = () => dice?.count === moves?.count;
  const isAllowedToRoll = () =>
    isPlayer() && evenCounts() && game?.active && dice.results[0]?.owner !== currentUser?.profile_id;
  const isAllowedToMove = () => isPlayer() && game?.active && dice?.count > moves?.count;
  const isAllowedToDelete = () =>
    isPlayer() && evenCounts() && game?.active && moves?.results[0]?.owner === currentUser.username;

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
      ) : (
        isAllowedToMove() && (
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
        )
      )}
      {moves?.results?.map((move, i) => (
        <Card className="mb-2" key={move.id}>
          <Card.Title className="px-1">
            <MoveCounter player={moves?.results[i]?.owner} number={moves.count - i} />
          </Card.Title>
          <Card.Body className="p-1">
            <p className="mb-1">{move.content}</p>
          </Card.Body>
          {i === 0 && isAllowedToDelete() && (
            <>
              <hr className="mt-2" />
              <Card.Body className={`${styles.Warning} p-1`}>
                <p className="mb-0">Made a mistake?</p>
                <Button className="my-2" onClick={() => handleDeleteMove(move.id)}>
                  Delete move!
                </Button>
              </Card.Body>
            </>
          )}
          {i === 0 && error && (
            <div>
              <Alert className={`${styles.Alert} mt-2`} variant="warning" key={i}>
                {error.message}
              </Alert>
            </div>
          )}
          <hr className="mt-2" />
          <Dice {...dice.results[i + isAllowedToMove()]} />
        </Card>
      ))}
    </>
  );
};

export default DiceAndMoves;

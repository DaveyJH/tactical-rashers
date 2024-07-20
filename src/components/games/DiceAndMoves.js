import React from "react";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useCurrentGameData } from "../../contexts/CurrentGameDataContext";
import { useDice, useSetDice } from "../../contexts/DiceContext";
import { useMoves, useSetMoves } from "../../contexts/MovesContext";
import { fetchMultipleMoreData } from "../../utils/utils";

import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

import Dice from "./Dice";
import MoveCounter from "./MoveCounter";
import CreateMove from "./CreateMove";
import DeleteMove from "./DeleteMove";
import DeclareWin from "./DeclareWin";

import styles from "../../assets/css/games/DiceAndMoves.module.css";

/**
 * Displays dice and moves components with logic to determine if user can roll/move/delete
 * @returns {React.JSX.Element} a card with dice and moves components
 */
const DiceAndMoves = () => {
  const currentUser = useCurrentUser();
  const game = useCurrentGameData();
  const dice = useDice();
  const { setDice } = useSetDice();
  const { moves, error } = useMoves();
  const { setMoves } = useSetMoves();

  // move/dice logic checks
  const isPlayer = () => game?.player1 === currentUser?.profile_id || game?.player2 === currentUser?.profile_id;
  const isPlayerOne = () => isPlayer() && game?.player1 === currentUser?.profile_id;
  const equalCounts = () => dice?.count === moves?.count;
  const isAllowedToRoll = () =>
    isPlayer() && equalCounts() && game?.active && dice.results[0]?.owner !== currentUser?.profile_id;
  const isAllowedToMove = () =>
    isPlayer() && game?.active && dice?.count > moves?.count && dice.results[0]?.owner === currentUser?.profile_id;
  const isAllowedToDelete = () =>
    isPlayer() && equalCounts() && game?.active && moves?.results[0]?.owner === currentUser.username;

  return (
    <>
      {/* new dice/moves */}
      {isAllowedToRoll() ? (
        <Card className="mb-2">
          <Card.Title>
            <MoveCounter player={currentUser.username} number={moves.count + 1} />
          </Card.Title>
          <Card.Body className="p-1">
            <DeclareWin
              winner={isPlayerOne() ? game.player2 : game.player1}
              player1={game.player1}
              player2={game.player2}
            />
          </Card.Body>
          <hr />
          <Dice />
        </Card>
      ) : (
        isAllowedToMove() && (
          <Card className="mb-2">
            <Card.Title>
              <MoveCounter player={currentUser.username} number={moves.count + 1} />
            </Card.Title>
            <Card.Body className="p-1">
              <CreateMove />
            </Card.Body>
            <hr />
            <Dice {...dice.results[0]} />
          </Card>
        )
      )}
      {/* existing dice/moves */}
      {moves.results.length ? (
        <InfiniteScroll
          children={moves?.results?.map((move, i) => (
            <Card className="mb-2" key={move.id}>
              <Card.Title>
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
                    <DeleteMove moveId={move.id} />
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
          dataLength={moves.results.length}
          loader={<Spinner />}
          hasMore={!!moves.next}
          next={() =>
            fetchMultipleMoreData([
              [dice, setDice],
              [moves, setMoves],
            ])
          }
        />
      ) : (
        <Card className="mb-2">
          <Card.Title>
            <MoveCounter number="😕" />
          </Card.Title>
          <Card.Body className="p-1">
            <p>Oh...looks like this game doesn't have any moves!</p>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default DiceAndMoves;

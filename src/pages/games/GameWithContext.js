import React, { useEffect, useReducer } from "react";

import { useAllProfileData } from "../../contexts/AllProfileDataContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useMoves } from "../../contexts/MovesContext";
import { useCurrentGameData } from "../../contexts/CurrentGameDataContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";

import GameHeader from "../../components/games/GameHeader";
import EditGameImageControl from "../../components/games/EditGameImageControl";
import DiceAndMoves from "../../components/games/DiceAndMoves";

/**
 *
 * @param {*} state the current game and player data
 * @param {*} action SET_GAME_DATA to update game and retrieve player data from allProfileData
 * @returns
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_GAME_DATA":
      return {
        ...state,
        game: action.payload.game,
        player1: action.payload.profiles?.results?.find((profile) => profile.id === action.payload.game.player1),
        player2: action.payload.profiles?.results?.find((profile) => profile.id === action.payload.game.player2),
        hasLoaded: state.player1?.id && state.player2?.id && true,
        currentUser: action.payload.currentUser,
      };
    default:
      return state;
  }
};

/**
 * A page for displaying a game
 */
const GameWithContext = () => {
  const allProfileData = useAllProfileData();
  const currentUser = useCurrentUser();
  const { moves } = useMoves();
  const game = useCurrentGameData();

  const [state, dispatch] = useReducer(reducer, { game: {}, player1: {}, player2: {}, hasLoaded: false });

  const isPlayer = () =>
    state.currentUser?.profile_id === state.player1?.id || state.currentUser?.profile_id === state.player2?.id;

  /**
   * @returns true if both players have been loaded (`id` cannot be `0` in API)
   */
  const hasLoaded = () => state.player1?.id && state.player2?.id && true;

  useEffect(() => {
    const handleMount = async () => {
      try {
        dispatch({
          type: "SET_GAME_DATA",
          payload: {
            game,
            profiles: allProfileData,
            currentUser: currentUser,
          },
        });
      } catch (err) {
        // console.error(err);
      }
    };
    handleMount();
  }, [allProfileData, currentUser, game]);

  return (
    <>
      {hasLoaded() ? (
        <div>
          <GameHeader player1={state.player1} player2={state.player2} game={state.game} movesCount={moves.count} />
          <Container className="mb-2">
            <Row className="justify-content-center">
              <Col lg={{ span: 8 }}>
                <Image fluid src={state.game.image} alt="most recent game status uploaded" rounded />
              </Col>
            </Row>
            {state.game.active && isPlayer() && <EditGameImageControl />}
          </Container>
          <DiceAndMoves />
        </div>
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
};

export default GameWithContext;

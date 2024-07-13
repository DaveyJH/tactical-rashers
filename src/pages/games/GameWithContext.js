import React, { useState, useEffect, useReducer } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useAllProfileData } from "../../contexts/ProfileDataContext";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Col, Container, Image, Row } from "react-bootstrap";

import Spinner from "react-bootstrap/Spinner";
import Dice from "../../components/games/Dice";
import Move from "../../components/games/Move";
import { useDice } from "../../contexts/DiceContext";
import { useMoves } from "../../contexts/MovesContext";
import GameHeader from "../../components/games/GameHeader";
import EditGameImageControl from "../../components/games/EditGameImageControl";
import CreateMove from "../../components/games/CreateMove";
import { useCurrentGameData } from "../../contexts/CurrentGameDataContext";

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
        player1: action.payload.profiles.data?.results.find((profile) => profile.id === action.payload.game.player1),
        player2: action.payload.profiles.data?.results.find((profile) => profile.id === action.payload.game.player2),
        hasLoaded: state.player1?.id && state.player2?.id && true,
        currentUser: action.payload.currentUser,
      };
    default:
      return state;
  }
};

const GameWithContext = () => {
  // todo update to use context
  // const { id } = useParams();
  const allProfileData = useAllProfileData();
  const currentUser = useCurrentUser();
  const dice = useDice();
  const moves = useMoves();
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
        // todo clg
        console.error(err);
      }
    };
    handleMount();
  }, [allProfileData, currentUser, game]);

  return (
    <>
      {hasLoaded() ? (
        <div>
          <GameHeader player1={state.player1} player2={state.player2} game={state.game} />
          <Container>
            <Image fluid src={state.game.image} rounded />
            {state.game.active && isPlayer() && <EditGameImageControl game={state.game} />}
          </Container>
          <Container>
            {state.game.active && isPlayer() && <p>new move</p>}
          </Container>
          {/* logic for move/dice length to render new roll/move options */}
          {dice?.results?.map((die, i) => (
            <div key={`move-dice-${die.id}`}>
              {moves?.results[i] && (
                <Move
                  content={moves.results[i].content}
                  count={moves.count - i}
                />
              )}
              <Dice value1={die.value1} value2={die.value2}/>
              <hr/>
            </div>
          ))}
          <Dice key="9"/>
          <CreateMove />
        </div>
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
};

export default GameWithContext;

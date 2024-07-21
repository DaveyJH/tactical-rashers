import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";
import { useCurrentGameData, useSetCurrentGameData } from "./CurrentGameDataContext";

const DiceContext = createContext();
const SetDiceContext = createContext();

export const useDice = () => useContext(DiceContext);
export const useSetDice = () => useContext(SetDiceContext);

/**
 * Provides the dice data
 */
export const DiceProvider = ({ children }) => {
  const currentUser = useCurrentUser();
  const [dice, setDice] = useState({});
  const [error, setError] = useState(null);
  const { setCurrentGameData } = useSetCurrentGameData();
  const currentGameData = useCurrentGameData();
  const { id: gameId } = useParams();

  /**
   * Create a new dice roll
   */
  const handleNewDiceRoll = async () => {
    try {
      const { count: diceCount } = await axiosReq.get(`/dice/?game=${gameId}`);
      const { count: movesCount } = await axiosReq.get(`/moves/?game=${gameId}`);
      if (diceCount !== movesCount) {
        throw Error ("Cannot roll dice with outstanding move - previous move was deleted.");
      }
      const { data } = await axiosRes.post("/dice/", { game: gameId, owner: currentUser?.profile_id });
      setDice((prevState) => ({
        ...prevState,
        count: prevState.count + 1,
        results: [data, ...prevState.results],
      }));
      setCurrentGameData((prevState) => ({
        ...prevState,
        dice_rolls: [data.id, ...currentGameData.dice_rolls],
      }));
      setError(null);
    } catch (err) {
      setError({ message: "Cannot roll dice, please refresh to see the latest game state." });
      // console.error(err);
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/dice/?game=${gameId}`);
        setDice((prevState) => ({
          ...prevState,
          ...data,
        }));
      } catch (err) {
        // console.error(err);
      }
    };
    handleMount();
  }, [gameId]);

  return (
    <DiceContext.Provider value={{ dice, error }}>
      <SetDiceContext.Provider value={{ setDice, handleNewDiceRoll }}>{children}</SetDiceContext.Provider>
    </DiceContext.Provider>
  );
};

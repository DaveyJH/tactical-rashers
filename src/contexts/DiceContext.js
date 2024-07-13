import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

const DiceContext = createContext();
const SetDiceContext = createContext();

export const useDice = () => useContext(DiceContext);
export const useSetDice = () => useContext(SetDiceContext);

export const DiceProvider = ({ children }) => {
  const currentUser = useCurrentUser();
  const [dice, setDice] = useState({});
  const gameId = useParams().id;

  const handleNewDiceRoll = async () => {
    try {
      const { data } = await axiosRes.post("/dice/", { game: gameId, owner: currentUser.profile_id });
      setDice((prevState) => ({
        ...prevState,
        count: prevState.count + 1,
        results: [data, ...prevState.results],
      }));
    } catch (err) {
      console.log("Dice context: handleNewDiceRoll", err);
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
        // todo clg
        console.log("Dice context: handleMount", err);
      }
    };
    handleMount();
  }, [gameId]);

  return (
    <DiceContext.Provider value={dice}>
      <SetDiceContext.Provider value={{ setDice, handleNewDiceRoll }}>{children}</SetDiceContext.Provider>
    </DiceContext.Provider>
  );
};

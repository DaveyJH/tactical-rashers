import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";
import { useCurrentGameData, useSetCurrentGameData } from "./CurrentGameDataContext";

const MovesContext = createContext();
const SetMovesContext = createContext();

export const useMoves = () => useContext(MovesContext);
export const useSetMoves = () => useContext(SetMovesContext);

export const MovesProvider = ({ children }) => {
  const currentUser = useCurrentUser();
  const [moves, setMoves] = useState({});
  const setCurrentGameData = useSetCurrentGameData();
  const currentGameData = useCurrentGameData();
  const { id: gameId } = useParams();

  const handleNewMove = async (content) => {
    try {
      const { data } = await axiosRes.post("/moves/", { game: gameId, owner: currentUser.profile_id, content });
      setMoves((prevState) => ({
        ...prevState,
        count: prevState.count + 1,
        results: [data, ...prevState.results],
      }));
      setCurrentGameData((prevState) => ({
        ...prevState,
        all_moves: [data, ...currentGameData.all_moves],
        latest_move_id: data.id,
      }));
    } catch (err) {
      console.log("Moves context: handleNewMove", err);
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/moves/?game=${gameId}`);
        setMoves((prevState) => ({
          ...prevState,
          ...data,
        }));
      } catch (err) {
        // todo clg
        console.error(err);
      }
    };
    handleMount();
  }, [gameId]);

  return (
    <MovesContext.Provider value={moves}>
      <SetMovesContext.Provider value={{ setMoves, handleNewMove }}>{children}</SetMovesContext.Provider>
    </MovesContext.Provider>
  );
};

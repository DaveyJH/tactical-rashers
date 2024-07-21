import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import { axiosReq } from "../api/axiosDefaults";

const CurrentGameDataContext = createContext();
const SetCurrentGameDataContext = createContext();

export const useCurrentGameData = () => useContext(CurrentGameDataContext);
export const useSetCurrentGameData = () => useContext(SetCurrentGameDataContext);

/**
 * Provides the current game data
 */
export const CurrentGameDataProvider = ({ children }) => {
  const { id } = useParams();
  const [currentGameData, setCurrentGameData] = useState({});

  /**
   * Update the winner of a game so it shows in the UI of a game
   * @param {Number} winner The winning player's id
   * @param {Number} player1 Player 1's id
   * @param {Number} player2 Player 2's id
   */
  const handleWinner = async (winner, player1, player2) => {
    try {
      const formData = new FormData();
      formData.append("game", id);
      formData.append("owner", winner);
      const { data } = await axiosReq.post("/winners/", formData);
      await axiosReq.put(`/games/${id}/`, { active: false, player1: player1, player2: player2 });
      setCurrentGameData((prevState) => ({
        ...prevState,
        winner: data.owner,
        active: false,
      }));
    } catch (err) {
      // console.error(err);
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/games/${id}`);
        setCurrentGameData(() => ({
          ...data,
        }));
      } catch (err) {
        // console.error(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <CurrentGameDataContext.Provider value={currentGameData}>
      <SetCurrentGameDataContext.Provider value={{ setCurrentGameData, handleWinner }}>
        {children}
      </SetCurrentGameDataContext.Provider>
    </CurrentGameDataContext.Provider>
  );
};

import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const CurrentGameDataContext = createContext();
const SetCurrentGameDataContext = createContext();

export const useCurrentGameData = () => useContext(CurrentGameDataContext);
export const useSetCurrentGameData = () => useContext(SetCurrentGameDataContext);

export const CurrentGameDataProvider = ({ children }) => {
  const { id } = useParams();
  const [currentGameData, setCurrentGameData] = useState({});

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
      console.error(err);
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
        // todo clg
        console.error(err);
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

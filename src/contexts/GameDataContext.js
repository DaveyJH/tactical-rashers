import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";

const GameDataContext = createContext();
const SetGameDataContext = createContext();

export const useAllGameData = () => useContext(GameDataContext);
export const useSetAllGameData = () => useContext(SetGameDataContext);

export const GameDataProvider = ({ children }) => {
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get("/games/");
        setGameData((prevState) => ({
          ...prevState,
          ...data,
        }));
      } catch (err) {
        // todo clg
        console.error(err);
      }
    };
    handleMount();
  }, []);

  return (
    <GameDataContext.Provider value={gameData}>
      <SetGameDataContext.Provider value={{ setGameData }}>{children}</SetGameDataContext.Provider>
    </GameDataContext.Provider>
  );
};

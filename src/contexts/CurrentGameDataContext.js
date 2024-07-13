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

  // todo add update logic?

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/games/${id}`);
        setCurrentGameData((prevState) => ({
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
      <SetCurrentGameDataContext.Provider value={{ setCurrentGameData }}>{children}</SetCurrentGameDataContext.Provider>
    </CurrentGameDataContext.Provider>
  );
};

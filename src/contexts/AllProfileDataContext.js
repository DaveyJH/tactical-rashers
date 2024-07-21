import { createContext, useContext, useEffect, useState } from "react";

import { axiosReq } from "../api/axiosDefaults";

const AllProfileDataContext = createContext();
const SetAllProfileDataContext = createContext();

export const useAllProfileData = () => useContext(AllProfileDataContext);
export const useSetAllProfileData = () => useContext(SetAllProfileDataContext);

/**
 * Provides all profiles with a top three list of profiles with the most wins
 */
export const AllProfileDataProvider = ({ children }) => {
  const [allProfileData, setAllProfileData] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get("/profiles/");
        // sort profiles by total wins count and get top 3
        data.topThree = [...data.results].sort((a, b) => b.total_wins_count - a.total_wins_count).slice(0, 3);
        setAllProfileData((prevState) => ({
          ...prevState,
          ...data,
        }));
      } catch (err) {
        // console.error(err);
      }
    };
    handleMount();
  }, []);

  return (
    <AllProfileDataContext.Provider value={allProfileData}>
      <SetAllProfileDataContext.Provider value={{ setAllProfileData }}>{children}</SetAllProfileDataContext.Provider>
    </AllProfileDataContext.Provider>
  );
};

import { createContext, useContext, useEffect, useState } from "react";

import { axiosReq } from "../api/axiosDefaults";

const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

export const useAllProfileData = () => useContext(ProfileDataContext);
export const useSetAllProfileData = () => useContext(SetProfileDataContext);

export const AllProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get("/profiles/");
        // sort profiles by total wins count and get top 3
        data.topThree = [...data.results].sort((a, b) => b.total_wins_count - a.total_wins_count).slice(0, 3);
        setProfileData((prevState) => ({
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
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider value={{ setProfileData }}>{children}</SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};

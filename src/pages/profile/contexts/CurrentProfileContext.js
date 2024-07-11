import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import { axiosReq } from "../../../api/axiosDefaults";

const CurrentProfileDataContext = createContext();
const SetCurrentProfileDataContext = createContext();

export const useCurrentProfileData = () => useContext(CurrentProfileDataContext);
export const useSetCurrentProfileData = () => useContext(SetCurrentProfileDataContext);

export const CurrentProfileDataProvider = ({ children }) => {
  const [currentProfileData, setCurrentProfileData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${id}`);
        setCurrentProfileData((prevState) => ({
          ...prevState,
          ...data,
        }));
      } catch (err) {
        // todo clg
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <CurrentProfileDataContext.Provider value={currentProfileData}>
      <SetCurrentProfileDataContext.Provider value={{ setCurrentProfileData }}>
        {children}
      </SetCurrentProfileDataContext.Provider>
    </CurrentProfileDataContext.Provider>
  );
};

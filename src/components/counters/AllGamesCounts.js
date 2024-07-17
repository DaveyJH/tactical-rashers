import React, { useState, useEffect } from "react";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useCurrentProfileData } from "../../contexts/CurrentProfileContext";

import GamesCount from "./GamesCount";

const AllGamesCounts = () => {
  const currentProfileData = useCurrentProfileData();
  const currentUser = useCurrentUser();
  const [profileData, setProfileData] = useState({});
  const [owner, setOwner] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      try {
        setProfileData((prevState) => ({
          ...prevState,
          ...currentProfileData,
        }));
        setOwner(currentUser?.username === profileData?.owner);
      } catch (err) {
        // todo clg
        console.error(err);
      }
    };
    handleMount();
  }, [currentUser, currentProfileData, profileData?.owner]);

  return <div>
    {/* todo owner == link to active/completed games */}
    {/* todo styling */}
    <GamesCount status="Active" count={profileData.active_games_count} />
    <GamesCount status="Completed" count={profileData.finished_games_count} />
  </div>;
};

export default AllGamesCounts;

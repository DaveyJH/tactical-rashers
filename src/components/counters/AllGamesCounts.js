import React, { useState, useEffect } from "react";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useCurrentProfileData } from "../../contexts/CurrentProfileDataContext";

import GamesCount from "./GamesCount";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
        // console.error(err);
      }
    };
    handleMount();
  }, [currentUser, currentProfileData, profileData?.owner]);

  return (
    <div>
      {owner ? (
        <>
          <Link to={`/profiles/${profileData.id}/active`}>
            <GamesCount status="Active" count={profileData.active_games_count} />
          </Link>
          <Link to={`/profiles/${profileData.id}/completed`}>
            <GamesCount status="Completed" count={profileData.finished_games_count} />
          </Link>
        </>
      ) : (
        <>
          <GamesCount status="Active" count={profileData.active_games_count} />
          <GamesCount status="Completed" count={profileData.finished_games_count} />
        </>
      )}
    </div>
  );
};

export default AllGamesCounts;

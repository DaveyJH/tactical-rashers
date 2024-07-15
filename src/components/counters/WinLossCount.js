import React, { useEffect, useReducer } from "react";

import { useCurrentProfileData } from "../../contexts/CurrentProfileContext";

const initialState = {
  profileData: {},
  wins: 0,
  losses: 0,
};

/**
 *
 * @param {*} state the current profile data with wins and losses
 * @param {*} action SET_PROFILE_DATA to update wins and losses without warning in dependency array
 * @returns the updated state with wins and losses
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PROFILE_DATA":
      return {
        ...state,
        profileData: action.payload,
        wins: action.payload.total_wins_count || 0,
        losses: action.payload.finished_games_count - action.payload.total_wins_count || 0,
      };
    default:
      return state;
  }
};

const WinLossCount = () => {
  const currentProfileData = useCurrentProfileData();
  const [profileData, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const handleMount = async () => {
      try {
        dispatch({
          type: "SET_PROFILE_DATA",
          payload: currentProfileData,
        });
      } catch (err) {
        // todo clg
        console.error(err);
      }
    };
    handleMount();
  }, [currentProfileData]);

  return (
    <>
      <p className="d-flex justify-content-between px-4">
        <span>Wins:</span>
        <span> {profileData.wins}</span>
      </p>
      <p className="d-flex justify-content-between px-4">
        <span>Losses:</span>
        <span> {profileData.losses}</span>
      </p>
    </>
  );
};

export default WinLossCount;

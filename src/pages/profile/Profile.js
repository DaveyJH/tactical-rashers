import React from "react";

import { CurrentProfileDataProvider } from "../../contexts/CurrentProfileDataContext";

import ProfileWithContext from "./ProfileWithContext";

const Profile = () => {
  return (
    <CurrentProfileDataProvider>
      <ProfileWithContext />
    </CurrentProfileDataProvider>
  );
};

export default Profile;

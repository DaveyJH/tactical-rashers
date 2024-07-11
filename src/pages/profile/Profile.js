import React from "react";

import { CurrentProfileDataProvider } from "./contexts/CurrentProfileContext";

import ProfileWithContext from "./ProfileWithContext";

const Profile = () => {
  return (
    <CurrentProfileDataProvider>
      <ProfileWithContext />
    </CurrentProfileDataProvider>
  );
};

export default Profile;

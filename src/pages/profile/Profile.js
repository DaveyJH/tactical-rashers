import React from "react";

import { CurrentProfileDataProvider } from "../../contexts/CurrentProfileContext";

import ProfileWithContext from "./ProfileWithContext";

const Profile = () => {
  return (
    // ? is there a better way to do this?
    <CurrentProfileDataProvider>
      <ProfileWithContext />
    </CurrentProfileDataProvider>
  );
};

export default Profile;

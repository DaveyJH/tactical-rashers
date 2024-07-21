import React from "react";

import { CurrentProfileDataProvider } from "../../contexts/CurrentProfileDataContext";

import ProfileWithContext from "./ProfileWithContext";

/**
 * @returns the profile page with all the necessary contexts
 */
const Profile = () => (
  <CurrentProfileDataProvider>
    <ProfileWithContext />
  </CurrentProfileDataProvider>
);

export default Profile;

import React from "react";

import Container from "react-bootstrap/Container";

import ProfileHeadline from "./ProfileHeadline";
import AllGamesCounts from "./AllGamesCounts";
import WinLossCount from "./WinLossCount";

const ProfileWithContext = () => {
  return (
    <Container>
      <ProfileHeadline />
      <AllGamesCounts />
      <WinLossCount />
      {/* games */}
    </Container>
  );
};

export default ProfileWithContext;

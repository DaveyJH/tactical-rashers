import React from "react";

import Container from "react-bootstrap/Container";

import ProfileHeadline from "../../components/profile/ProfileHeadline";
import AllGamesCounts from "../../components/profile/AllGamesCounts";
import WinLossCount from "../../components/profile/WinLossCount";

const ProfileWithContext = () => {
  return (
    <Container>
      <ProfileHeadline />
      <AllGamesCounts />
      <WinLossCount />
      {/* game briefs */}
    </Container>
  );
};

export default ProfileWithContext;

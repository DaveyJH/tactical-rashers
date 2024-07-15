import React from "react";

import Container from "react-bootstrap/Container";

import ProfileHeadline from "../../components/profile/ProfileHeadline";
import AllGamesCounts from "../../components/counters/AllGamesCounts";
import WinLossCount from "../../components/counters/WinLossCount";

import styles from "../../assets/css/profiles/Profile.module.css";
import { Col, Row } from "react-bootstrap";

const ProfileWithContext = () => {
  return (
    <Container className="mt-3">
      <ProfileHeadline />
      <Row>
        <Col md={{ span: 6, offset: 3 }} className={styles.GamesBorder}>
          <AllGamesCounts />
          <hr />
          <WinLossCount />
        </Col>
      </Row>
      {/* game briefs */}
    </Container>
  );
};

export default ProfileWithContext;

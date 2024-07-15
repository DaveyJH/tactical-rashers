import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import FontAwesome from "../FontAwesome";

import styles from "../../assets/css/profiles/ProfileHeadline.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useCurrentProfileData } from "../../contexts/CurrentProfileContext";

const ProfileHeadline = ({ vertical, small }) => {
  const currentProfileData = useCurrentProfileData();
  const currentUser = useCurrentUser();
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      try {
        setProfileData((prevState) => ({
          ...prevState,
          ...currentProfileData,
        }));
      } catch (err) {
        // todo clg
        console.error(err);
      }
    };
    handleMount();
  }, [currentUser, currentProfileData, profileData?.owner]);

  return (
    <Container fluid className="text-left">
      {console.log(profileData)}
      <Row className="align-items-center">
        <Col xs={8} lg={{ span: 6, offset: 1 }} className="text-right text-break pr-0">
          <div>
            <h1>{profileData.owner}</h1>
          </div>
        </Col>
        <Col xs={4} lg={3}>
          <Image src={profileData.image} className={styles.ProfileImage} fluid />
        </Col>
      </Row>
      <Row className="mt-2 mb-4">
        <Col lg={{ offset: 2 }} className={`text-left px-4 ${styles.InfoText}`}>
          {profileData.info}
        </Col>
        {profileData.is_owner ? (
          <Col lg={3} className="mt-2 text-right text-lg-left">
            <DropdownButton
              menuAlign="right"
              id="edit-dropdown"
              title={
                <>
                  <FontAwesome iconName="fas fa-user-edit" />
                  <span className={styles.FontAwesomeFollower}>edit</span>
                </>
              }>
              {/* todo update href into to or use modal? */}
              <Dropdown.Item href="#/action-1">Update image</Dropdown.Item>
              <Dropdown.Item href="#/">Edit info</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Change username</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Change password</Dropdown.Item>
            </DropdownButton>
          </Col>
        ) : (
          <Col lg={1} />
        )}
      </Row>
    </Container>
  );
};

export default ProfileHeadline;

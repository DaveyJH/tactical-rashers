import React, { useEffect, useState } from "react";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useCurrentProfileData } from "../../contexts/CurrentProfileDataContext";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import FontAwesome from "../FontAwesome";
import EditProfileImageControl from "./EditProfileImageControl";
import EditProfileInfoControl from "./EditProfileInfoControl";
import EditPasswordControl from "./EditPasswordControl";

import styles from "../../assets/css/profiles/ProfileHeadline.module.css";

const ProfileHeadline = ({ vertical, small }) => {
  const currentProfileData = useCurrentProfileData();
  const currentUser = useCurrentUser();
  const [profileData, setProfileData] = useState({});

  const [showImageEditor, setShowImageEditor] = useState(false);
  const [showInfoEditor, setShowInfoEditor] = useState(false);
  const [showPasswordEditor, setShowPasswordEditor] = useState(false);

  const handleCloseImageEditor = () => setShowImageEditor(false);
  const handleShowImageEditor = () => setShowImageEditor(true);
  const handleCloseInfoEditor = () => setShowInfoEditor(false);
  const handleShowInfoEditor = () => setShowInfoEditor(true);
  const handleClosePasswordEditor = () => setShowPasswordEditor(false);
  const handleShowPasswordEditor = () => setShowPasswordEditor(true);

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
          <>
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
                <Dropdown.Item onClick={handleShowImageEditor}>Update image</Dropdown.Item>
                <Dropdown.Item onClick={handleShowInfoEditor}>Edit info</Dropdown.Item>
                <Dropdown.Item onClick={handleShowPasswordEditor}>Change password</Dropdown.Item>
              </DropdownButton>
            </Col>
            <EditProfileImageControl show={showImageEditor} handleClose={handleCloseImageEditor} />
            <EditProfileInfoControl show={showInfoEditor} handleClose={handleCloseInfoEditor} />
            <EditPasswordControl show={showPasswordEditor} handleClose={handleClosePasswordEditor} />
          </>
        ) : (
          <Col lg={1} />
        )}
      </Row>
    </Container>
  );
};

export default ProfileHeadline;

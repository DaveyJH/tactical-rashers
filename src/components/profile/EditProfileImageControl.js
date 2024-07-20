import React, { useRef, useState } from "react";

import { useCurrentProfileData, useSetCurrentProfileData } from "../../contexts/CurrentProfileDataContext";
import { useSetAllProfileData } from "../../contexts/AllProfileDataContext";
import { axiosReq } from "../../api/axiosDefaults";

import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import ImageUploader from "../forms/ImageUploader";

/**
 * @param {Props} show the state of the modal
 * @param {Props} handleClose function to close the modal
 * @returns {React.Component} modal for editing the user's profile image
 */
const EditProfileImageControl = ({ show, handleClose }) => {
  const [errors, setErrors] = useState({});
  const profile = useCurrentProfileData();
  const { setCurrentProfileData } = useSetCurrentProfileData();
  const { setAllProfileData } = useSetAllProfileData();
  const [profileImage, setProfileImage] = useState(profile.image);
  const [imageChanged, setImageChanged] = useState(false);

  const imageInput = useRef(null);

  /**
   * Resets the form's image to the original and close the modal
   */
  const resetImageAndClose = () => {
    URL.revokeObjectURL(profileImage);
    setProfileImage(profile.image);
    setImageChanged(false);
    handleClose();
  };

  const handleChangeImage = (e) => {
    if (e.target.files.length) {
      URL.revokeObjectURL(profileImage);
      setProfileImage(URL.createObjectURL(e.target.files[0]));
      setImageChanged(true);
    }
  };

  const handleSubmitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }
    try {
      await axiosReq.put(`/profiles/${profile.id}/`, formData);
      // update the profile image in the current profile for the profile page
      setCurrentProfileData((prevState) => ({ ...prevState, image: profileImage }));
      // update the profile image in the all profiles for the games feeds
      setAllProfileData((prevState) => ({
        ...prevState,
        results: prevState.results.map((prof) => (profile.id === prof.id ? { ...prof, image: profileImage } : prof)),
      }));
      handleClose();
    } catch (err) {
      // console.error(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Modal show={show} onHide={resetImageAndClose}>
      <Modal.Header closeButton>
        <Modal.Title>Profile image</Modal.Title>
      </Modal.Header>
      <Form>
        <ImageUploader image={profileImage} handleChangeImage={handleChangeImage} ref={imageInput} />
      </Form>
      <Modal.Footer className="justify-content-between">
        <Button variant="secondary" onClick={resetImageAndClose}>
          Cancel
        </Button>
        <Button variant="primary" disabled={!imageChanged} onClick={handleSubmitImage}>
          Upload
        </Button>
        {errors?.image?.map((message, i) => (
          <Alert variant="warning" key={i}>
            {message}
          </Alert>
        ))}
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileImageControl;

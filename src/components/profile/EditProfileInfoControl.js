import React, { useState } from "react";

import { useCurrentProfileData, useSetCurrentProfileData } from "../../contexts/CurrentProfileDataContext";
import { axiosRes } from "../../api/axiosDefaults";

import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

/**
 * @param {Props} show the state of the modal
 * @param {Props} handleClose function to close the modal
 * @returns {React.Component} modal for editing the user's profile info
 */
const EditProfileInfoControl = ({ show, handleClose }) => {
  const [errors, setErrors] = useState({});
  const currentProfileData = useCurrentProfileData();
  const { setCurrentProfileData } = useSetCurrentProfileData();
  const [userInfo, setUserInfo] = useState(currentProfileData?.info);
  const [changed, setChanged] = useState(false);

  const handleChange = (e) => {
    setUserInfo(e.target.value);
    setChanged(true);
  };

  /**
   * Resets the form's info to the original and close the modal
   */
  const resetAndClose = () => {
    setUserInfo(currentProfileData?.info);
    setChanged(false);
    handleClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("info", userInfo);
    try {
      await axiosRes.put(`/profiles/${currentProfileData.id}`, formData);
      setCurrentProfileData((prevState) => ({ ...prevState, info: userInfo }));
      resetAndClose();
    } catch (err) {
      // console.error(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Profile image</Modal.Title>
      </Modal.Header>
      <Form className="p-2">
        <Form.Group controlId="info">
          <Form.Label>Update your info</Form.Label>
          <Form.Control
            placeholder="Tell us about yourself"
            as="textarea"
            value={userInfo}
            onChange={handleChange}
            name="info"
            rows={5}
          />
        </Form.Group>
        {errors?.info?.map((message, i) => (
          <Alert key={i} variant="warning">
            {message}
          </Alert>
        ))}
      </Form>
      <Modal.Footer className="justify-content-between">
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          // disable button if no changes are made
          disabled={!changed || userInfo === currentProfileData?.info}
          onClick={handleSubmit}>
          Update
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

export default EditProfileInfoControl;

import React, { useState } from "react";

import { axiosRes } from "../../api/axiosDefaults";

import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditPasswordControl = ({ show, handleClose }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = userData;

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosRes.post("/dj-rest-auth/password/change/", userData);
      handleClose();
    } catch (err) {
      // console.error(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Profile image</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit} className="p-2">
        <Form.Group controlId="new_password1">
          <Form.Label>New password</Form.Label>
          <Form.Control
            placeholder="New password"
            type="password"
            value={new_password1}
            onChange={handleChange}
            name="new_password1"
          />
        </Form.Group>
        {errors?.new_password1?.map((message, i) => (
          <Alert key={i} variant="warning">
            {message}
          </Alert>
        ))}
        <Form.Group controlId="new_password2">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            placeholder="Confirm new password"
            type="password"
            value={new_password2}
            onChange={handleChange}
            name="new_password2"
          />
        </Form.Group>
        {errors?.new_password2?.map((message, i) => (
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
          disabled={!(userData.new_password1 && userData.new_password2)}
          onClick={handleSubmit}>
          Save
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

export default EditPasswordControl;

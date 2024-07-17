import React, { useRef, useState } from "react";

import { useCurrentGameData, useSetCurrentGameData } from "../../contexts/CurrentGameDataContext";
import { axiosReq } from "../../api/axiosDefaults";

import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

const EditGameImageControl = () => {
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const game = useCurrentGameData();
  const { setCurrentGameData } = useSetCurrentGameData();
  const [gameImage, setGameImage] = useState(game.image);

  const imageInput = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeImage = (e) => {
    if (e.target.files.length) {
      URL.revokeObjectURL(gameImage);
      setGameImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (imageInput?.current?.files[0]) {
      formData.append("player1", game.player1);
      formData.append("player2", game.player2);
      formData.append("active", game.active);
      formData.append("image", imageInput.current.files[0]);
    }
    try {
      await axiosReq.put(`/games/${game.id}/`, formData);
      setCurrentGameData((prevState) => ({ ...prevState, image: gameImage }));
      handleClose();
    } catch (err) {
      // console.error(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <>
      <Button variant="primary" className="mt-1" onClick={handleShow}>
        Edit image
      </Button>

      {/* extract into ChangeImageModal for use in profile */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Game image</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group controlId="gameImage" className="mb-3 p-2">
            {gameImage && <Image fluid src={gameImage} rounded />}
            <Form.Label>Upload a new game image.</Form.Label>
            <Form.File accept="image/*" onChange={handleChangeImage} ref={imageInput} />
          </Form.Group>
        </Form>
        <Modal.Footer className="justify-content-between">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmitImage}>
            Upload
          </Button>
          {errors.image?.map((message, i) => (
            <Alert variant="warning" key={i}>
              {message}
            </Alert>
          ))}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditGameImageControl;

import React, { useRef, useState } from "react";

import { useCurrentGameData, useSetCurrentGameData } from "../../contexts/CurrentGameDataContext";
import { axiosReq } from "../../api/axiosDefaults";

import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import ImageUploader from "../forms/ImageUploader";

/**
 * @returns {React.JSX.Element} a button and modal to edit the game image
 */
const EditGameImageControl = () => {
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const game = useCurrentGameData();
  const { setCurrentGameData } = useSetCurrentGameData();
  const [gameImage, setGameImage] = useState(game.image);
  const [imageChanged, setImageChanged] = useState(false);

  const imageInput = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /**
   * Resets the game image in the form and closes the modal
   */
  const resetImageAndClose = () => {
    URL.revokeObjectURL(gameImage);
    setGameImage(game.image);
    setImageChanged(false);
    handleClose();
  };

  const handleChangeImage = (e) => {
    if (e.target.files.length) {
      URL.revokeObjectURL(gameImage);
      setGameImage(URL.createObjectURL(e.target.files[0]));
      setImageChanged(true);
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
      resetImageAndClose();
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
      <Modal show={show} onHide={resetImageAndClose}>
        <Modal.Header closeButton>
          <Modal.Title>Game image</Modal.Title>
        </Modal.Header>
        <Form>
          <ImageUploader image={gameImage} handleChangeImage={handleChangeImage} ref={imageInput} />
        </Form>
        <Modal.Footer className="justify-content-between">
          <Button variant="secondary" onClick={resetImageAndClose}>
            Cancel
          </Button>
          {/* enable button if new image is uploaded */}
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
    </>
  );
};

export default EditGameImageControl;

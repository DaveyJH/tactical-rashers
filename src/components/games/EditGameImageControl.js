import React, { useRef, useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

const EditGameImageControl = ({ game }) => {
  const [show, setShow] = useState(false);
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
          <Button variant="primary" onClick={handleClose}>
            {/* todo add update logic */}
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditGameImageControl;

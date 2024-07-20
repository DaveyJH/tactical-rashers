import React, { useState } from "react";

import { useSetMoves } from "../../contexts/MovesContext";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DeleteMove = ({ moveId }) => {
  const [show, setShow] = useState(false);
  const { handleDeleteMove } = useSetMoves();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="mt-1" onClick={handleShow}>
        Delete move!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>Are you sure?</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Moves can only be deleted if your opponent has not already rolled for the next move.</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleDeleteMove(moveId);
              handleClose();
            }}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteMove;

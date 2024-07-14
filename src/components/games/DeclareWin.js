import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useSetCurrentGameData } from "../../contexts/CurrentGameDataContext";

const DeclareWin = ({ winner, player1, player2 }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { handleWinner } = useSetCurrentGameData();

  return (
    <>
      <Button variant="primary" className="mt-1" onClick={handleShow}>
        Declare opponent win!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>Are you sure?</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This action cannot be undone. Your opponent will be declared the winner.</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleWinner(winner, player1, player2);
              handleClose();
            }}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeclareWin;

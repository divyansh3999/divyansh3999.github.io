import React, { useState } from "react";
import {  Modal, Button } from 'react-bootstrap'


export default function ModalFun() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
    console.log("modal", modal);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
       <Button variant="outline-primary" onClick={openModal}>
        Launch demo modal
      </Button>

      <Modal show={modal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

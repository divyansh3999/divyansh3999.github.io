import React, { useState } from "react";
import {Modal, Button} from "react-bootstrap";
export default function NewModal() {
    // using state
    const [newModal, updateModal] = useState(false);
    const showModal = ()=>{
        updateModal(true);
    }
    const hideModal = ()=>{
        updateModal(false);
    }
  return (
    <>
      <Button variant="primary" onClick={showModal}>
        Launch demo modal
      </Button>

      <Modal show={newModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={hideModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

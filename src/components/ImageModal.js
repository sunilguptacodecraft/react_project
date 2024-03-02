import React, { useState } from "react";
// import { Modal } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";


import { PhotoProvider, PhotoView } from 'react-photo-view';
export const ImageModal = ({ show, onClose, imageUrl }) => {
  return (
    <Modal
      size="lg"
      centered
      show={show}
      onHide={onClose}
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Image Preview
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          height: "80vh",
        }}
      >
           <PhotoProvider>
                        <PhotoView src={imageUrl}>
                      
        <img src={imageUrl} className="w-100" alt="test" />
        </PhotoView>
                          </PhotoProvider>
      </Modal.Body>
    </Modal>
  );
};

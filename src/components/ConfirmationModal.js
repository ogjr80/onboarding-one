import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={customStyles}
  >
    <div className="modal-content">
      <h2>Confirm Submission</h2>
      <p>Are you sure you want to submit this information?</p>
      <div className="modal-buttons">
        <button className="modal-button" onClick={onConfirm}>Yes</button>
        <button className="modal-button cancel-button" onClick={onRequestClose}>No</button>
      </div>
    </div>
  </ReactModal>
);

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px',
    borderRadius: '15px',
    border: 'none',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    width: '80%',
    maxWidth: '500px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

export default ConfirmationModal;

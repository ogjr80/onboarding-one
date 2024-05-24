import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

const CertificateUpload = ({ nextStep, prevStep }) => {
  const [certificate, setCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setCertificate(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Certificate of Membership Upload</h2>
      <label>Upload Certificate</label>
      <input type="file" name="certificate" onChange={handleChange} />
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
      <ConfirmationModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onConfirm={handleConfirm} />
    </form>
  );
};

export default CertificateUpload;

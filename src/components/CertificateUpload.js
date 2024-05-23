import React, { useState } from 'react';

const CertificateUpload = ({ nextStep, prevStep }) => {
  const [certificate, setCertificate] = useState(null);

  const handleChange = (e) => {
    setCertificate(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data and go to next step
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Certificate of Membership Upload</h2>
      <label>Upload Certificate</label>
      <input type="file" name="certificate" onChange={handleChange} />
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default CertificateUpload;

import React from 'react';

const CertificateUpload = ({ nextSubStep, subStep, nextStep, prevStep }) => {
  const handleChange = (e) => {
    // Handle file change if needed
  };

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleNext}>
      <h2>Certificate of Membership Upload</h2>
      <label>Upload Certificate</label>
      <input type="file" name="certificate" onChange={handleChange} />
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default CertificateUpload;

import React, { useState } from 'react';

const AddressInformation = ({ nextSubStep, subStep, nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    residentialAddress: '',
    postalAddress: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (subStep < 2) {
      nextSubStep();
    } else {
      nextStep();
    }
  };

  return (
    <form onSubmit={handleNext}>
      <h2>Address Information</h2>
      {subStep === 1 && (
        <>
          <label>Residential Address</label>
          <input type="text" name="residentialAddress" placeholder="Residential Address" value={formData.residentialAddress} onChange={handleChange} />
        </>
      )}
      {subStep === 2 && (
        <>
          <label>Postal Address</label>
          <input type="text" name="postalAddress" placeholder="Postal Address" value={formData.postalAddress} onChange={handleChange} />
        </>
      )}
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">{subStep === 2 ? 'Next Step' : 'Next'}</button>
    </form>
  );
};

export default AddressInformation;

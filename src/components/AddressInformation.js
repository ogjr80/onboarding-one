import React, { useState } from 'react';

const AddressInformation = ({ nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    residentialAddress: '',
    postalAddress: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data and go to next step
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Address Information</h2>
      <label>Residential Address</label>
      <input type="text" name="residentialAddress" placeholder="Residential Address" value={formData.residentialAddress} onChange={handleChange} />
      <label>Postal Address</label>
      <input type="text" name="postalAddress" placeholder="Postal Address" value={formData.postalAddress} onChange={handleChange} />
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default AddressInformation;

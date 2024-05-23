import React, { useState } from 'react';

const NextOfKin = ({ nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    kinName: '',
    kinRelationship: '',
    kinContact: ''
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
      <h2>Next of Kin</h2>
      <label>Full Name</label>
      <input type="text" name="kinName" placeholder="Full Name" value={formData.kinName} onChange={handleChange} />
      <label>Relationship</label>
      <input type="text" name="kinRelationship" placeholder="Relationship" value={formData.kinRelationship} onChange={handleChange} />
      <label>Contact Number</label>
      <input type="text" name="kinContact" placeholder="Contact Number" value={formData.kinContact} onChange={handleChange} />
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default NextOfKin;

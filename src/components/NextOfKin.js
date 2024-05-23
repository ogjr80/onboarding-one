import React, { useState } from 'react';

const NextOfKin = ({ nextSubStep, subStep, nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    kinName: '',
    kinRelationship: '',
    kinContact: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (subStep < 3) {
      nextSubStep();
    } else {
      nextStep();
    }
  };

  return (
    <form onSubmit={handleNext}>
      <h2>Next of Kin</h2>
      {subStep === 1 && (
        <>
          <label>Full Name</label>
          <input type="text" name="kinName" placeholder="Full Name" value={formData.kinName} onChange={handleChange} />
        </>
      )}
      {subStep === 2 && (
        <>
          <label>Relationship</label>
          <input type="text" name="kinRelationship" placeholder="Relationship" value={formData.kinRelationship} onChange={handleChange} />
        </>
      )}
      {subStep === 3 && (
        <>
          <label>Contact Number</label>
          <input type="text" name="kinContact" placeholder="Contact Number" value={formData.kinContact} onChange={handleChange} />
        </>
      )}
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">{subStep === 3 ? 'Next Step' : 'Next'}</button>
    </form>
  );
};

export default NextOfKin;

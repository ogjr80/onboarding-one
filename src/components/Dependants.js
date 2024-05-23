import React, { useState } from 'react';

const Dependants = ({ nextSubStep, subStep, nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    dependantName: '',
    dependantRelationship: '',
    dependantDob: ''
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
      <h2>Dependants</h2>
      {subStep === 1 && (
        <>
          <label>Full Name</label>
          <input type="text" name="dependantName" placeholder="Full Name" value={formData.dependantName} onChange={handleChange} />
        </>
      )}
      {subStep === 2 && (
        <>
          <label>Relationship</label>
          <input type="text" name="dependantRelationship" placeholder="Relationship" value={formData.dependantRelationship} onChange={handleChange} />
        </>
      )}
      {subStep === 3 && (
        <>
          <label>Date of Birth</label>
          <input type="date" name="dependantDob" placeholder="Date of Birth" value={formData.dependantDob} onChange={handleChange} />
        </>
      )}
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">{subStep === 3 ? 'Next Step' : 'Next'}</button>
    </form>
  );
};

export default Dependants;

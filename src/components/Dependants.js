import React, { useState } from 'react';

const Dependants = ({ nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    dependantName: '',
    dependantRelationship: '',
    dependantDob: ''
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
      <h2>Dependants</h2>
      <label>Full Name</label>
      <input type="text" name="dependantName" placeholder="Full Name" value={formData.dependantName} onChange={handleChange} />
      <label>Relationship</label>
      <input type="text" name="dependantRelationship" placeholder="Relationship" value={formData.dependantRelationship} onChange={handleChange} />
      <label>Date of Birth</label>
      <input type="date" name="dependantDob" placeholder="Date of Birth" value={formData.dependantDob} onChange={handleChange} />
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Dependants;

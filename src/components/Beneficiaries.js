import React, { useState } from 'react';

const Beneficiaries = ({ nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    beneficiaryName: '',
    beneficiaryRelationship: '',
    beneficiaryPercentage: ''
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
      <h2>Beneficiaries</h2>
      <label>Full Name</label>
      <input type="text" name="beneficiaryName" placeholder="Full Name" value={formData.beneficiaryName} onChange={handleChange} />
      <label>Relationship</label>
      <input type="text" name="beneficiaryRelationship" placeholder="Relationship" value={formData.beneficiaryRelationship} onChange={handleChange} />
      <label>Percentage Allocation</label>
      <input type="number" name="beneficiaryPercentage" placeholder="Percentage Allocation" value={formData.beneficiaryPercentage} onChange={handleChange} />
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Beneficiaries;

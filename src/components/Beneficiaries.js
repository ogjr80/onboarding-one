import React, { useState } from 'react';

const Beneficiaries = ({ nextSubStep, subStep, nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    beneficiaryName: '',
    beneficiaryRelationship: '',
    beneficiaryPercentage: ''
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
      <h2>Beneficiaries</h2>
      {subStep === 1 && (
        <>
          <label>Full Name</label>
          <input type="text" name="beneficiaryName" placeholder="Full Name" value={formData.beneficiaryName} onChange={handleChange} />
        </>
      )}
      {subStep === 2 && (
        <>
          <label>Relationship</label>
          <input type="text" name="beneficiaryRelationship" placeholder="Relationship" value={formData.beneficiaryRelationship} onChange={handleChange} />
        </>
      )}
      {subStep === 3 && (
        <>
          <label>Percentage Allocation</label>
          <input type="number" name="beneficiaryPercentage" placeholder="Percentage Allocation" value={formData.beneficiaryPercentage} onChange={handleChange} />
        </>
      )}
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">{subStep === 3 ? 'Next Step' : 'Next'}</button>
    </form>
  );
};

export default Beneficiaries;

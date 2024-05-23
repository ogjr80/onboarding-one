import React from 'react';

const MedicalAidOnboarding = ({ nextStep, prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Medical Aid Onboarding</h2>
      <p>Overview of available medical aid options.</p>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default MedicalAidOnboarding;

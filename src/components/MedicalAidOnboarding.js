import React from 'react';

const MedicalAidOnboarding = ({ nextSubStep, subStep, nextStep, prevStep }) => {
  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleNext}>
      <h2>Medical Aid Onboarding</h2>
      <p>Overview of available medical aid options.</p>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default MedicalAidOnboarding;

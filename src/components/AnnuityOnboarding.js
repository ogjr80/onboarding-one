import React from 'react';

const AnnuityOnboarding = ({ nextSubStep, subStep, nextStep, prevStep }) => {
  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleNext}>
      <h2>Annuity Onboarding</h2>
      <p>Explanation of annuity options and benefits.</p>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default AnnuityOnboarding;

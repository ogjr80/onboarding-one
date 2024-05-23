import React from 'react';

const AnnuityOnboarding = ({ nextStep, prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Annuity Onboarding</h2>
      <p>Explanation of annuity options and benefits.</p>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default AnnuityOnboarding;

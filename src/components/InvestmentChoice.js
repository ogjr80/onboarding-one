import React from 'react';

const InvestmentChoice = ({ nextSubStep, subStep, nextStep, prevStep }) => {
  const handleChange = (e) => {
    // Handle change if needed
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
      <h2>Investment Choice</h2>
      {subStep === 1 && (
        <>
          <label>
            <input type="radio" name="investment" value="Option 1" onChange={handleChange} /> Option 1
          </label>
        </>
      )}
      {subStep === 2 && (
        <>
          <label>
            <input type="radio" name="investment" value="Option 2" onChange={handleChange} /> Option 2
          </label>
        </>
      )}
      {subStep === 3 && (
        <>
          <label>
            <input type="radio" name="investment" value="Option 3" onChange={handleChange} /> Option 3
          </label>
        </>
      )}
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">{subStep === 3 ? 'Next Step' : 'Next'}</button>
    </form>
  );
};

export default InvestmentChoice;

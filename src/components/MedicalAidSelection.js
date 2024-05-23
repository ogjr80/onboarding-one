import React, { useState } from 'react';

const MedicalAidSelection = ({ nextStep, prevStep }) => {
  const [medicalAidOption, setMedicalAidOption] = useState('');

  const handleChange = (e) => {
    setMedicalAidOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data and go to next step
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Medical Aid Selection</h2>
      <label>
        <input type="radio" name="medicalAid" value="Option 1" onChange={handleChange} /> Option 1
      </label>
      <label>
        <input type="radio" name="medicalAid" value="Option 2" onChange={handleChange} /> Option 2
      </label>
      <label>
        <input type="radio" name="medicalAid" value="Option 3" onChange={handleChange} /> Option 3
      </label>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default MedicalAidSelection;

import React, { useState } from 'react';

const MedicalAidSelection = ({ nextStep, prevStep }) => {
  const [medicalAidOption, setMedicalAidOption] = useState('');

  const handleChange = (e) => {
    setMedicalAidOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Medical Aid Selection</h2>
      <label>
        <input type="radio" name="medicalAid" value="Option 1" onChange={handleChange} /> Discovery
      </label>
      <label>
        <input type="radio" name="medicalAid" value="Option 2" onChange={handleChange} /> UMVUZO
      </label>
      <label>
        <input type="radio" name="medicalAid" value="Option 3" onChange={handleChange} /> MEDSHIELD
      </label>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default MedicalAidSelection;

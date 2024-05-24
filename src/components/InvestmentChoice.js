import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

const InvestmentChoice = ({ nextStep, prevStep }) => {
  const [investmentOption, setInvestmentOption] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setInvestmentOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Investment Choice</h2>
      <label>
        <input type="radio" name="investment" value="Option 1" onChange={handleChange} /> Option 1
      </label>
      <label>
        <input type="radio" name="investment" value="Option 2" onChange={handleChange} /> Option 2
      </label>
      <label>
        <input type="radio" name="investment" value="Option 3" onChange={handleChange} /> Option 3
      </label>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
      <ConfirmationModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onConfirm={handleConfirm} />
    </form>
  );
};

export default InvestmentChoice;

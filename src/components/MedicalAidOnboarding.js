import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

const MedicalAidOnboarding = ({ nextStep, prevStep }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <h2>Medical Aid Onboarding</h2>
      <p>Overview of available medical aid options.</p>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
      <ConfirmationModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onConfirm={handleConfirm} />
    </form>
  );
};

export default MedicalAidOnboarding;

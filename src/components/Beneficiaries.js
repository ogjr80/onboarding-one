import React, { useState } from 'react';
import HelpIcon from './HelpIcon';
import ConfirmationModal from './ConfirmationModal';

const Beneficiaries = ({ nextSubStep, subStep, nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    beneficiaryName: '',
    beneficiaryRelationship: '',
    beneficiaryPercentage: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (subStep < 3) {
      nextSubStep();
    } else {
      setIsModalOpen(true);
    }
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    nextStep();
  };

  return (
    <form onSubmit={handleNext}>
      <h2>Beneficiaries</h2>
      {subStep === 1 && (
        <>
          <label>
            Full Name <HelpIcon message="Enter the full name of your beneficiary" />
          </label>
          <input type="text" name="beneficiaryName" placeholder="Full Name" value={formData.beneficiaryName} onChange={handleChange} />
        </>
      )}
      {subStep === 2 && (
        <>
          <label>
            Relationship <HelpIcon message="Enter your relationship with the beneficiary" />
          </label>
          <input type="text" name="beneficiaryRelationship" placeholder="Relationship" value={formData.beneficiaryRelationship} onChange={handleChange} />
        </>
      )}
      {subStep === 3 && (
        <>
          <label>
            Percentage Allocation <HelpIcon message="Enter the percentage allocation for the beneficiary" />
          </label>
          <input type="number" name="beneficiaryPercentage" placeholder="Percentage Allocation" value={formData.beneficiaryPercentage} onChange={handleChange} />
        </>
      )}
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">{subStep === 3 ? 'Next Step' : 'Next'}</button>
      <ConfirmationModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onConfirm={handleConfirm} />
    </form>
  );
};

export default Beneficiaries;

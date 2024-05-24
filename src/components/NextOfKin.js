import React, { useState } from 'react';
import HelpIcon from './HelpIcon';
import ConfirmationModal from './ConfirmationModal';

const NextOfKin = ({ nextSubStep, subStep, nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    kinName: '',
    kinRelationship: '',
    kinContact: ''
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
      <h2>Next of Kin</h2>
      {subStep === 1 && (
        <>
          <label>
            Full Name <HelpIcon message="Enter the full name of your next of kin" />
          </label>
          <input type="text" name="kinName" placeholder="Full Name" value={formData.kinName} onChange={handleChange} />
        </>
      )}
      {subStep === 2 && (
        <>
          <label>
            Relationship <HelpIcon message="Enter your relationship with the next of kin" />
          </label>
          <input type="text" name="kinRelationship" placeholder="Relationship" value={formData.kinRelationship} onChange={handleChange} />
        </>
      )}
      {subStep === 3 && (
        <>
          <label>
            Contact Number <HelpIcon message="Enter the contact number of your next of kin" />
          </label>
          <input type="text" name="kinContact" placeholder="Contact Number" value={formData.kinContact} onChange={handleChange} />
        </>
      )}
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">{subStep === 3 ? 'Next Step' : 'Next'}</button>
      <ConfirmationModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onConfirm={handleConfirm} />
    </form>
  );
};

export default NextOfKin;

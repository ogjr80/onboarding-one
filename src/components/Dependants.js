import React, { useState } from 'react';
import HelpIcon from './HelpIcon';
import ConfirmationModal from './ConfirmationModal';

const Dependants = ({ nextSubStep, subStep, nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    dependantName: '',
    dependantRelationship: '',
    dependantDob: ''
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
      <h2>Dependants</h2>
      {subStep === 1 && (
        <>
          <label>
            Full Name <HelpIcon message="Enter the full name of your dependant" />
          </label>
          <input type="text" name="dependantName" placeholder="Full Name" value={formData.dependantName} onChange={handleChange} />
        </>
      )}
      {subStep === 2 && (
        <>
          <label>
            Relationship <HelpIcon message="Enter your relationship with the dependant" />
          </label>
          <input type="text" name="dependantRelationship" placeholder="Relationship" value={formData.dependantRelationship} onChange={handleChange} />
        </>
      )}
      {subStep === 3 && (
        <>
          <label>
            Date of Birth <HelpIcon message="Enter the date of birth of your dependant" />
          </label>
          <input type="date" name="dependantDob" placeholder="Date of Birth" value={formData.dependantDob} onChange={handleChange} />
        </>
      )}
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">{subStep === 3 ? 'Next Step' : 'Next'}</button>
      <ConfirmationModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onConfirm={handleConfirm} />
    </form>
  );
};

export default Dependants;

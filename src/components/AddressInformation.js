import React, { useState } from 'react';
import HelpIcon from './HelpIcon';
import ConfirmationModal from './ConfirmationModal';

const AddressInformation = ({ nextSubStep, subStep, nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    residentialAddress: '',
    postalAddress: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (subStep < 2) {
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
      <h2>Address Information</h2>
      {subStep === 1 && (
        <>
          <label>
            Residential Address <HelpIcon message="Enter your residential address" />
          </label>
          <input type="text" name="residentialAddress" placeholder="Residential Address" value={formData.residentialAddress} onChange={handleChange} />
        </>
      )}
      {subStep === 2 && (
        <>
          <label>
            Postal Address <HelpIcon message="Enter your postal address" />
          </label>
          <input type="text" name="postalAddress" placeholder="Postal Address" value={formData.postalAddress} onChange={handleChange} />
        </>
      )}
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">{subStep === 2 ? 'Next Step' : 'Next'}</button>
      <ConfirmationModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onConfirm={handleConfirm} />
    </form>
  );
};

export default AddressInformation;

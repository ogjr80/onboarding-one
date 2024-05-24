import React, { useState } from 'react';
import HelpIcon from './HelpIcon';
import ConfirmationModal from './ConfirmationModal';

const PersonalDetails = ({ nextSubStep, subStep, nextStep }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    idNumber: '',
    contactNumber: '',
    email: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (subStep < 5) {
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
      <h2>Personal Information</h2>
      {subStep === 1 && (
        <>
          <label>
            Full Name <HelpIcon message="Enter your full legal name" />
          </label>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
        </>
      )}
      {subStep === 2 && (
        <>
          <label>
            Date of Birth <HelpIcon message="Enter your date of birth" />
          </label>
          <input type="date" name="dateOfBirth" placeholder="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} />
        </>
      )}
      {subStep === 3 && (
        <>
          <label>
            ID Number <HelpIcon message="Enter your identification number" />
          </label>
          <input type="text" name="idNumber" placeholder="ID Number" value={formData.idNumber} onChange={handleChange} />
        </>
      )}
      {subStep === 4 && (
        <>
          <label>
            Contact Number <HelpIcon message="Enter your contact number" />
          </label>
          <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} />
        </>
      )}
      {subStep === 5 && (
        <>
          <label>
            Email <HelpIcon message="Enter your email address" />
          </label>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </>
      )}
      <button type="submit">{subStep === 5 ? 'Next Step' : 'Next'}</button>
      <ConfirmationModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onConfirm={handleConfirm} />
    </form>
  );
};

export default PersonalDetails;

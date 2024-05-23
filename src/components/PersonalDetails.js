import React, { useState } from 'react';

const PersonalDetails = ({ nextSubStep, subStep, nextStep }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    idNumber: '',
    contactNumber: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (subStep < 5) {
      nextSubStep();
    } else {
      nextStep();
    }
  };

  return (
    <form onSubmit={handleNext}>
      <h2>Personal Information</h2>
      {subStep === 1 && (
        <>
          <label>Full Name</label>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
        </>
      )}
      {subStep === 2 && (
        <>
          <label>Date of Birth</label>
          <input type="date" name="dateOfBirth" placeholder="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} />
        </>
      )}
      {subStep === 3 && (
        <>
          <label>ID Number</label>
          <input type="text" name="idNumber" placeholder="ID Number" value={formData.idNumber} onChange={handleChange} />
        </>
      )}
      {subStep === 4 && (
        <>
          <label>Contact Number</label>
          <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} />
        </>
      )}
      {subStep === 5 && (
        <>
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </>
      )}
      <button type="submit">{subStep === 5 ? 'Next Step' : 'Next'}</button>
    </form>
  );
};

export default PersonalDetails;

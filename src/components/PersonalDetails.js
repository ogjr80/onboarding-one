import React, { useState } from 'react';

const PersonalDetails = ({ nextStep }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data and go to next step
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Personal Information</h2>
      <label>Full Name</label>
      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
      <label>Date of Birth</label>
      <input type="date" name="dateOfBirth" placeholder="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} />
      <label>ID Number</label>
      <input type="text" name="idNumber" placeholder="ID Number" value={formData.idNumber} onChange={handleChange} />
      <label>Contact Number</label>
      <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} />
      <label>Email</label>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <button type="submit">Next</button>
    </form>
  );
};

export default PersonalDetails;

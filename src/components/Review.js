import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

const Review = ({ prevStep, submit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    submit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Review and Confirmation</h2>
      <p>Summary of all the entered information.</p>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Submit</button>
      <ConfirmationModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onConfirm={handleConfirm} />
    </form>
  );
};

export default Review;

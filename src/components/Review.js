import React from 'react';

const Review = ({ prevStep, submit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form
    submit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Review and Confirmation</h2>
      <p>Summary of all the entered information.</p>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Review;

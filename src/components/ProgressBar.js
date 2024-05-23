// import React from 'react';

// const ProgressBar = ({ step }) => {
//   const progress = (step / 11) * 100;
//   return (
//     <div className="progress-bar">
//       <div className="progress" style={{ width: `${progress}%` }}></div>
//     </div>
//   );
// };

// export default ProgressBar;

import React from 'react';

const ProgressBar = ({ step }) => {
  const progress = Math.round((step / 11) * 100);
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}>
        <span className="progress-text">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;


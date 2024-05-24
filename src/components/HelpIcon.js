import React from 'react';
import {Tooltip as ReactTooltip} from 'react-tooltip';

const HelpIcon = ({ message }) => (
  <>
    <i data-tip={message} className="fas fa-info-circle" style={{ marginLeft: '5px', cursor: 'pointer', color: '#4ca1af' }}></i>
    <ReactTooltip place="top" type="dark" effect="float" />
  </>
);

export default HelpIcon;

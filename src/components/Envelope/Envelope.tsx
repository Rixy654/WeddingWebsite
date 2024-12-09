import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ComponentProps } from '../../types';
import './Envelope.css';

const Envelope: React.FC<ComponentProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleEnvelope = () => {
    const path = `about`;
    setIsOpen(!isOpen);
    setTimeout(() => navigate(path), 500);
  };

  return (
    <div className="envelope" onClick={toggleEnvelope}>
      <div className={`envelope-flap ${isOpen ? 'open' : ''}`} />
      <div className={`seal ${isOpen ? 'open' : ''}`}></div>
      <div className="envelope-body">You're Invited</div>
    </div>
  );
};

export default Envelope;

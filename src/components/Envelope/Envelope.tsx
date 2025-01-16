import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Envelope.css';
import seal from '../../assets/seal.png';

const Envelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleEnvelope = () => {
    const path = `/home`;
    setIsOpen(!isOpen);
    setTimeout(() => navigate(path), 500);
  };

  return (
    <div
      className="envelope"
      role="button"
      tabIndex={0}
      onClick={toggleEnvelope}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          toggleEnvelope();
        }
      }}
    >
      <div className={`envelope-flap ${isOpen ? 'open' : ''}`} />
      <div className={`seal ${isOpen ? 'open' : ''}`}>
        <img src={seal} alt="seal" />
      </div>
      <div className="envelope-body">You&apos;re Invited!</div>
    </div>
  );
};

export default Envelope;

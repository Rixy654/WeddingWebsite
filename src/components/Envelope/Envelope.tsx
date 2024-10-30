import * as React from "react";
import { useState } from "react";

import './Envelope.css';

interface ComponentProps {
}

const Envelope: React.FC<ComponentProps> = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="envelope" onClick={toggleEnvelope}>
      <div className={`envelope-flap ${isOpen ? 'open' : ''}`} />
      <div className={`seal ${isOpen ? 'open' : ''}`} >
      </div>
      <div className="envelope-body">
        You're Invited
      </div>
    </div>
  );
};

export default Envelope;
import * as React from 'react';

import Envelope from '../../components/Envelope';
import { ComponentProps } from '../../types';

const LandingPage: React.FC<ComponentProps> = () => {
  return (
    <div className="test">
      <Envelope />
    </div>
  );
};

export default LandingPage;

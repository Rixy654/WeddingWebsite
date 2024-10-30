import * as React from "react";
import Envelope from "../../components/Envelope";

interface ComponentProps {
}

const Homepage: React.FC<ComponentProps> = () => {

  return (
    <div className='test'>
      <Envelope />
    </div>
  );
};

export default Homepage;
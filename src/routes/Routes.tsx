import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from '../pages/homepage';
import AboutUs from '../pages/about-us';
import RSVP from '../pages/rsvp';

const App: React.FC = () => {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
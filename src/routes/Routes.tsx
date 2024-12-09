import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from '../pages/landing-page';
import AboutUs from '../pages/about-us';
import RSVP from '../pages/rsvp';
import Homepage from '../pages/homepage';
import PageWrapper from '../components/PageWrapper';
import RSVPThanks from '../pages/rsvp-thanks';

const App: React.FC = () => {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/home' element={ <Homepage /> } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path='rsvp-success' element={<RSVPThanks />} />
        <Route path="*" element={<PageWrapper> <h1>404 - Page Not Found</h1> </PageWrapper>} />
      </Routes>
    </Router>
  );
};

export default App;
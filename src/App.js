import * as React from 'react';

import './App.css';
import Routes from './routes';
import WeddingTheme from './components/WeddingTheme';

function App() {
  return (
    <WeddingTheme>
      <Routes />
    </WeddingTheme>
  );
}

export default App;

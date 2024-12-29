import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { PageWrapperProps } from '../../types';

const WeddingTheme: React.FC<PageWrapperProps> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#006400', // Custom primary color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {children}
    </ThemeProvider>
  );
};

export default WeddingTheme;

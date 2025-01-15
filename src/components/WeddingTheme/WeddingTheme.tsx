import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const WeddingTheme: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#006400', // Custom primary color
      },
    },
    typography: {
      fontFamily: "'Bellefair', serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {children}
    </ThemeProvider>
  );
};

export default WeddingTheme;

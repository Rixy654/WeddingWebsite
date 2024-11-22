import * as React from "react";
import { Box, Container } from '@mui/material';

import Header from "../Header";

interface ComponentProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<ComponentProps> = ({children}) => {


  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        {children}
      </Container>
    </Box>
  );
};

export default PageWrapper;
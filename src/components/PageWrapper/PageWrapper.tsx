import * as React from "react";
import { Box, Container } from '@mui/material';

import Header from "../Header";
import { PageWrapperProps } from "../../types";

const PageWrapper: React.FC<PageWrapperProps> = ({children}) => {


  return (
    <Box display="flex" flexDirection="column">
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        {children}
      </Container>
    </Box>
  );
};

export default PageWrapper;
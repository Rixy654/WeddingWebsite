import * as React from 'react';
import { Box } from '@mui/material';
import { Grid } from '@material-ui/core';

import PageWrapper from '../../components/PageWrapper';
import { ComponentProps } from '../../types';

const Homepage: React.FC<ComponentProps> = () => {
  return (
    <PageWrapper>
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            Test
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://placehold.co/900.png"
              alt="Placeholder Image"
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  );
};

export default Homepage;

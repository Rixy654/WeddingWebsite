import * as React from 'react';
import { Button, Box, Typography } from '@mui/material';

import PageWrapper from '../../components/PageWrapper';

const Registry: React.FC = () => {
  return (
    <PageWrapper>
      <Box sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom textAlign="center">
          Gift Registry
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ marginBottom: '30px' }}
        >
          Thank you so much for considering gifting us anything. The link to do
          so is below
        </Typography>
        <Button
          href="https://prezola.com/buy/view/222145"
          variant="contained"
          color="primary"
          target="_blank"
          component="a"
          size="large"
          sx={{ fontSize: '20px' }}
        >
          Gift Registry
        </Button>
      </Box>
    </PageWrapper>
  );
};

export default Registry;

import * as React from 'react';
import { Box, Typography } from '@mui/material';

import PageWrapper from '../../components/PageWrapper';

const RSVPThanks: React.FC = () => {
  return (
    <PageWrapper>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          sx={{
            padding: 3,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: 'white',
            width: '100%',
          }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            Thank you
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            We look forward to seeing you at our wedding
          </Typography>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default RSVPThanks;

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
          <Typography variant="h2" align="center" gutterBottom>
            Thank you
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            Tips for the day - please see the FAQs for more
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            <b>Arrival: </b>All day guests are welcome to arrive from 1:30pm
            onwards. Ceremony begins at 2:30pm.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            sx={{ marginTop: '10px' }}
          >
            <b>Arrival: </b>All evening guests should aim to arrive at 8pm
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            <b>Attire: </b>Wedding Formal. Please keep in mind that the ceremony
            venue, The Keep, has steep stairs and that the drinks reception will
            be partily held outside on a lawn.
          </Typography>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default RSVPThanks;

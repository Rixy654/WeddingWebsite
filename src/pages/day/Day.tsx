import * as React from 'react';
import { Typography, Box } from '@mui/material';

import PageWrapper from '../../components/PageWrapper';
import theDay from '../../assets/theDay.jpeg';

const Day: React.FC = () => {
  return (
    <PageWrapper>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h2" gutterBottom textAlign="center">
          Order of the Day
        </Typography>
        <img
          src={theDay}
          alt="The day"
          width="100%"
          style={{ maxWidth: '750px', display: 'block', margin: '0 auto' }}
        />
      </Box>
    </PageWrapper>
  );
};

export default Day;

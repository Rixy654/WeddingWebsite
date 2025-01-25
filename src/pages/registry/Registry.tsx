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
        <Typography variant="body1" align="center" gutterBottom>
          We are so grateful to have you celebrate this special day with us, and
          your presence alone is truly the greatest gift we could ask for.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          That said, if you would like to mark the occasion with a gift, we’ve
          created a registry to which you can find the link below.
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ marginBottom: '30px' }}
        >
          Please know that your love and support mean the most to us, and
          there’s absolutely no obligation!
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

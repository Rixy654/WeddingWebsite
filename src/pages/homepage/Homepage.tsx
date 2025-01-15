import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Grid } from '@material-ui/core';

import PageWrapper from '../../components/PageWrapper';
import homepageImage from '../../assets/homepageImage.jpeg';

const Homepage: React.FC = () => {
  return (
    <PageWrapper>
      <Box sx={{ padding: 4, textAlign: 'center' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={homepageImage}
              alt={`image of Victoria and Thomas`}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              22.05.25
            </Typography>
            <Typography variant="h3" gutterBottom>
              Welcome to Our Wedding Celebration!
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ marginBottom: '20px' }}
            >
              We are so excited to share this special day with all of our loved
              ones! Your presence means the world to us, and we can&rsquo;t wait
              to celebrate together. Thank you for being part of our journey as
              we begin this new chapter. Let&rsquo;s make unforgettable
              memories!
            </Typography>
            <Button variant="contained" color="primary" href="/rsvp">
              RSVP Here
            </Button>
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  );
};

export default Homepage;

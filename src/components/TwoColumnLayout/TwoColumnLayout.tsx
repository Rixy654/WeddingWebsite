import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Grid } from '@material-ui/core';

import { TwoColumnLayoutProps } from '../../types';

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  title,
  text,
  locationLink,
  bookingLink,
  imageSrc,
  imageOnLeft = false,
}) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {imageOnLeft && (
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={imageSrc}
              alt={`image of ${title}`}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        )}

        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" paragraph>
            {text}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
            <Button
              variant="contained"
              color="primary"
              href={locationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Location
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Booking Link
            </Button>
          </Box>
        </Grid>

        {/* Image Column if imageOnLeft is false */}
        {!imageOnLeft && (
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={imageSrc}
              alt={`image of ${title}`}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default TwoColumnLayout;
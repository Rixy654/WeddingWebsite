import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Grid } from '@material-ui/core';

const TwoColumnLayout: React.FC<{
  title: string;
  text: string;
  locationLink?: string;
  bookingLink?: string;
  imageSrc: string;
  imageOnLeft?: boolean;
}> = ({
  title,
  text,
  locationLink,
  bookingLink,
  imageSrc,
  imageOnLeft = false,
}) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {imageOnLeft && width > 768 && (
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
          <Typography variant="body1">{text}</Typography>
          <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
            {locationLink && (
              <Button
                variant="contained"
                color="primary"
                href={locationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Location
              </Button>
            )}
            {bookingLink && (
              <Button
                variant="outlined"
                color="primary"
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Booking Link
              </Button>
            )}
          </Box>
        </Grid>

        {(!imageOnLeft || width <= 768) && (
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

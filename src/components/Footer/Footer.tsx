import * as React from "react";
import { Typography, Box } from '@mui/material';

interface ComponentProps {};

const Footer: React.FC<ComponentProps> = () => {
  return (
    <Box
    component="footer"
    sx={{
      py: 2,
      mt: 'auto',
      backgroundColor: '#f8f8f8',
      textAlign: 'center',
    }}
  >
    <Typography variant="body2" color="textSecondary">
      Made my TR.
    </Typography>
  </Box>
  )
};

export default Footer;

import * as React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { ComponentProps } from '../../types';
import './style.css';

const Header: React.FC<ComponentProps> = () => {
  return (
    <AppBar position="static" className="header">
      <Box
        component="img"
        src="https://placehold.co/2000x100.png"
        alt="Header Image"
        sx={{ width: '100%' }}
      />
      <Typography variant="h1" component="div" className="header-title">
        Thomas and Victoria's wedding
      </Typography>
      <Typography variant="h2" component="div" className="header-subtitle">
        Thursday, May 22nd 2025
      </Typography>
      <Toolbar>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
          <Button
            color="inherit"
            component={Link}
            to="/home"
            sx={{ textTransform: 'none' }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{ textTransform: 'none' }}
          >
            About us
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/rsvp"
            sx={{ textTransform: 'none' }}
          >
            RSVP
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

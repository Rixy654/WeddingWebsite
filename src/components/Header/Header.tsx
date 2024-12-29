import * as React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { ComponentProps } from '../../types';
import './style.css';
import headerImage from '../../assets/headerImage.jpeg';
import MenuLink from '../MenuLink';

const Header: React.FC<ComponentProps> = () => {
  return (
    <AppBar position="static" className="header">
      <Box
        component="img"
        src={headerImage}
        alt="Header Image"
        sx={{ width: '100%' }}
      />
      <Typography variant="h1" component="div" className="header-title">
        Victoria & Thomas
      </Typography>
      <Toolbar
        sx={{ boxShadow: '0 3px 3px -2px gray', minHeight: 50 }}
        className="header-toolbar"
      >
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
          <MenuLink link="/home" text="Home" />
          <MenuLink link="/rsvp" text="RSVP" />
          <MenuLink link="/castle" text="The Castle" />
          <MenuLink link="/accommodation" text="Accommodation" />
          <MenuLink link="/travel" text="Travel" />
          <MenuLink link="/day" text="The Day" />
          <MenuLink link="/about" text="About us" />
          <MenuLink link="/registry" text="Registry" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

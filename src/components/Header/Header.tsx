import * as React from 'react';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import './style.css';
import headerImage from '../../assets/headerImage.jpeg';
import MenuLink from '../MenuLink';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
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
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              justifyContent: 'center',
            }}
          >
            <MenuLink link="/rsvp" text="RSVP" />
            <MenuLink link="/castle" text="The Castle" />
            <MenuLink link="/accommodation" text="Accommodation" />
            <MenuLink link="/travel" text="Travel" />
            <MenuLink link="/day" text="The Day" />
            <MenuLink link="/about" text="About us" />
            <MenuLink link="/registry" text="Registry" />
            <MenuLink link="/faq" text="FAQs" />
          </Box>
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleMobileMenu}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleMobileMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 250 },
        }}
      >
        <MenuLink link="/rsvp" text="RSVP" />
        <MenuLink link="/castle" text="The Castle" />
        <MenuLink link="/accommodation" text="Accommodation" />
        <MenuLink link="/travel" text="Travel" />
        <MenuLink link="/day" text="The Day" />
        <MenuLink link="/about" text="About us" />
        <MenuLink link="/registry" text="Registry" />
      </Drawer>
    </>
  );
};

export default Header;

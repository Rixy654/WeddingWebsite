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
import headerImage from '../../assets/headerImage.png';
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
        <Typography
          variant="h1"
          component="div"
          className="header-title"
          sx={{ marginTop: { xs: 0, md: '-40px' } }}
        >
          Victoria <span style={{ fontSize: '50px' }}>&</span> Thomas
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
            <MenuLink link="/home" text="Home" />
            <MenuLink link="/about" text="About Us" />
            <MenuLink link="/rsvp" text="RSVP" />
            <MenuLink link="/castle" text="The Castle" />
            <MenuLink link="/accommodation" text="Accommodation" />
            <MenuLink link="/travel" text="Travel" />
            <MenuLink link="/day" text="The Day" />
            <MenuLink link="/registry" text="Registry" />
            <MenuLink link="/faq" text="FAQs" />
          </Box>
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleMobileMenu}
            sx={{ display: { xs: 'flex', md: 'none' }, margin: '0 auto' }}
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
          margin: '0 auto',
        }}
      >
        <MenuLink link="/home" text="Home" />
        <MenuLink link="/about" text="About Us" />
        <MenuLink link="/rsvp" text="RSVP" />
        <MenuLink link="/castle" text="The Castle" />
        <MenuLink link="/accommodation" text="Accommodation" />
        <MenuLink link="/travel" text="Travel" />
        <MenuLink link="/day" text="The Day" />
        <MenuLink link="/registry" text="Registry" />
        <MenuLink link="/faq" text="FAQs" />
      </Drawer>
    </>
  );
};

export default Header;

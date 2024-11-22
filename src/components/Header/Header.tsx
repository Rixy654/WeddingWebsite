import * as React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface ComponentProps {
}

const Header: React.FC<ComponentProps> = () => {

  return (
    <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div">
            Thomas and Victoria's wedding
          </Typography>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <Button color="inherit" component={Link} to="/rsvp" sx={{ textTransform: 'none' }}>
              RSVP
              </Button>
              <Button color="inherit" component={Link} to="/about" sx={{ textTransform: 'none' }}>
                About us
              </Button>
            </Box>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
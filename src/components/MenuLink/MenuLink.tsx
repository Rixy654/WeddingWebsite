import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const MenuLink: React.FC<{
  link: string;
  text: string;
}> = ({ link, text }) => {
  return (
    <Button
      color="inherit"
      component={Link}
      to={link}
      sx={{
        textTransform: 'none',
        padding: '6px 15px',
        fontSize: '16px',
      }}
    >
      {text}
    </Button>
  );
};

export default MenuLink;

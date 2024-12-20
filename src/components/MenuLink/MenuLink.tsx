import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import { MenuLinkProps } from '../../types';

const MenuLink: React.FC<MenuLinkProps> = ({ link, text }) => {
  return (
    <Button
      color="inherit"
      component={Link}
      to={link}
      sx={{ textTransform: 'none' }}
    >
      {text}
    </Button>
  );
};

export default MenuLink;

import * as React from 'react';
import { Box, Typography } from '@mui/material';

const ImageWithCaption: React.FC<{
  src: string;
  alt: string;
  isRight?: boolean;
  caption: string;
  width: string;
}> = ({ src, alt, isRight, caption, width }) => {
  return (
    <Box
      sx={{
        margin: isRight ? '10px 0 10px 10px' : '10px 10px 10px 0',
        float: isRight ? 'right' : 'left',
        textAlign: 'center',
        maxWidth: { sm: '100%', md: width },
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      <Typography
        variant="body1"
        sx={{ fontStyle: 'italic', display: 'block' }}
      >
        {caption}
      </Typography>
    </Box>
  );
};

export default ImageWithCaption;

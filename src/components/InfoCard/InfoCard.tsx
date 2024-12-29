import * as React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';

const InfoCard: React.FC<{
  title: string;
  text: string;
  phoneLink: string;
  webLink: string;
}> = ({ title, text, phoneLink, webLink }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: 'auto',
        boxShadow: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: 'auto' }}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          href={`tel:${phoneLink}`}
        >
          Call
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          href={webLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default InfoCard;

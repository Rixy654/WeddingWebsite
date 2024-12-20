import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Grid } from '@material-ui/core';

import { ComponentProps } from '../../types';
import PageWrapper from '../../components/PageWrapper';

const Castle: React.FC<ComponentProps> = () => {
  return (
    <PageWrapper>
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" align="center" gutterBottom>
              The Castle
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Hedingham Castle, located in Castle Hedingham, Essex, is a
              remarkable example of Norman architecture and is often cited as
              one of the best-preserved Norman keeps in England.
            </Typography>
            <Typography variant="h3" align="center" gutterBottom>
              Historical Significance
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              <b>Origins:</b>The castle was constructed in the late 11th to
              early 12th century by Aubrey de Vere, a Norman baron who was
              granted the manor by William the Conqueror. The de Vere family,
              who became the Earls of Oxford, maintained ownership for over 500
              years.
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              <b>Architecture:</b>The keep is nearly square, measuring
              approximately 53 by 58 feet, with walls up to 12 feet thick at the
              base. It stands about 70 feet tall and comprises four floors,
              including the impressive Banqueting Hall, which features a grand
              fireplace and a central arch extending two stories.
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              <b>Royal Connections:</b>Throughout its history, Hedingham Castle
              has hosted several notable figures, including King Henry VII, King
              Henry VIII, and Queen Elizabeth I, reflecting its prominence in
              English history.
            </Typography>
            <Typography variant="h3" align="center" gutterBottom>
              The Grounds
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              <b>Landscaping:</b>The castle is set within 160 acres of
              landscaped gardens and woodland. In the 18th century, the grounds
              were redesigned, and a red-brick Georgian mansion was constructed
              adjacent to the medieval keep. The gardens feature formal
              plantings, a lake that beautifully reflects the castle, and wooded
              areas that offer picturesque walks.{' '}
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              <b>Notable Structures:</b>A distinctive red-brick bridge,
              constructed in 1496, connects the inner and outer baileys and
              remains a significant architectural feature of the estate.
            </Typography>
            <Typography variant="h3" align="center" gutterBottom>
              Present Day
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Today, Hedingham Castle remains under the stewardship of the
              Lindsay family, descendants of the de Veres. While it serves as a
              family residence, the Norman keep and its grounds are open to the
              public from Easter to October. The estate hosts various events,
              including historical reenactments, fairs, and educational visits,
              allowing visitors to immerse themselves in its rich heritage.
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              For more detailed information, you can explore the official
              website:{' '}
              <a href="https://www.hedinghamcastle.co.uk/" target="_blank">
                Hedingham Castle.
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://placehold.co/900.png"
              alt="Placeholder Image"
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  );
};

export default Castle;

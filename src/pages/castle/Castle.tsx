import * as React from 'react';
import { Box, Typography } from '@mui/material';

import PageWrapper from '../../components/PageWrapper';
import TwoColumnLayout from '../../components/TwoColumnLayout';

const Castle: React.FC = () => {
  return (
    <PageWrapper>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h2" gutterBottom textAlign="center">
          The Castle
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Hedingham Castle, located in Castle Hedingham, Essex, is a remarkable
          example of Norman architecture and is often cited as one of the
          best-preserved Norman keeps in England.
        </Typography>
        <TwoColumnLayout
          title="Historical Significance"
          text="The castle was constructed in the late 11th to early
          12th century by Aubrey de Vere, a Norman baron who was granted the
          manor by William the Conqueror. The de Vere family, who became the
          Earls of Oxford, maintained ownership for over 500 years."
          imageSrc="https://www.visitessex.com/dmsimgs/9-0060_839434724.jpg"
        />
        <TwoColumnLayout
          title="Architecture"
          text="The keep is nearly square, measuring approximately
          53 by 58 feet, with walls up to 12 feet thick at the base. It stands
          about 70 feet tall and comprises four floors, including the impressive
          Banqueting Hall, which features a grand fireplace and a central arch
          extending two stories."
          imageSrc="https://www.venuescanner.com/_next/image?url=https%3A%2F%2Fcdn.venuescanner.com%2Fphotos%2FgJSYz%2F0a9df8922f63035ad1a02e53a171ee54.jpg&w=1920&q=75"
          imageOnLeft
        />
        <TwoColumnLayout
          title="Royal Connections"
          text="Throughout its history, Hedingham Castle has
          hosted several notable figures, including King Henry VII, King Henry
          VIII, and Queen Elizabeth I, reflecting its prominence in English
          history."
          imageSrc="https://www.rmg.co.uk/sites/default/files/styles/full_width_2600/public/Henry%20VIII.jpg?itok=oj40112E"
        />
        <TwoColumnLayout
          title="Landscaping"
          text="The castle is set within 160 acres of landscaped
          gardens and woodland. In the 18th century, the grounds were
          redesigned, and a red-brick Georgian mansion was constructed adjacent
          to the medieval keep. The gardens feature formal plantings, a lake
          that beautifully reflects the castle, and wooded areas that offer
          picturesque walks."
          imageSrc="https://eu-assets.simpleview-europe.com/essex/imageresizer/?image=%2Fdmsimgs%2F1-0024_124552619.jpg&action=ProductDetailImage"
          imageOnLeft
        />
        <TwoColumnLayout
          title="Notable Structures"
          text="A distinctive red-brick bridge, constructed
          in 1496, connects the inner and outer baileys and remains a
          significant architectural feature of the estate."
          imageSrc="https://media-cdn.tripadvisor.com/media/photo-s/14/70/ab/02/the-tudor-bridge-and.jpg"
        />
        <TwoColumnLayout
          title="Present Day"
          text="Today, Hedingham Castle remains under the stewardship of the Lindsay
          family, descendants of the de Veres. While it serves as a family
          residence, the Norman keep and its grounds are open to the public from
          Easter to October. The estate hosts various events, including
          historical reenactments, fairs, and educational visits, allowing
          visitors to immerse themselves in its rich heritage."
          imageSrc="https://images.squarespace-cdn.com/content/v1/5e5e5b280b09a761c4a81365/71f2a734-4570-4093-bf51-3a797f144e99/hedingham-castle-family-event.jpg"
          imageOnLeft
        />
        <Typography variant="body1" align="center" gutterBottom>
          For more detailed information, you can explore the official website:{' '}
          <a
            href="https://www.hedinghamcastle.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            Hedingham Castle.
          </a>
        </Typography>
      </Box>
    </PageWrapper>
  );
};

export default Castle;

import * as React from 'react';
import { Box, Typography } from '@mui/material';

import PageWrapper from '../../components/PageWrapper';
import AccordionItem from '../../components/AccordionItem';

const FAQ: React.FC = () => {
  return (
    <PageWrapper>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h2" gutterBottom textAlign="center">
          FAQs
        </Typography>
        <AccordionItem
          question="What should I wear?"
          answer="The dress code for our wedding is wedding formal. Please keep in mind that the ceremony venue, The Keep, has steep stairs and that the drinks
                reception will be partily held outside on a lawn. For your safety and comfort, we recommend avoiding long dresses or high heels that may be difficult to navigate on the stairs."
        ></AccordionItem>
        <AccordionItem
          question="What time does the ceremony/reception start?"
          answer="The ceremony will begin at 2:30 PM, but we encourage guests to arrive from 1:30 PM onwards. Tea and coffee will be available for you to enjoy in The Keep before the ceremony starts."
        ></AccordionItem>
        <AccordionItem
          question="Where is the wedding taking place?"
          answer="The entire wedding will be held on the grounds of Hedingham Castle. The ceremony will take place at The Keep, followed by a drinks reception in the Mansion and Castle Gardens. The Wedding Breakfast and Evening Party will be hosted in a marquee. On-site parking available."
        ></AccordionItem>
        <AccordionItem
          question="Can I bring a plus one?"
          answer="If your invitation includes a plus one, it will be clearly indicated with an unnamed 'guest.' If you have any questions about bringing a plus one, please feel free to contact Victoria or Thomas for clarification."
        ></AccordionItem>
        <AccordionItem
          question="What happens after the ceremony?"
          answer="After the ceremony, we'll have a confetti moment on the bridge, followed by photos and a drinks reception in the Mansion and Castle Gardens. Then, we’ll move to the Marquee for the Wedding Breakfast, and once that’s done, it’s time to hit the dance floor—don’t forget your dancing shoes!"
        ></AccordionItem>
        <AccordionItem
          question="Are children welcome at the wedding?"
          answer="Unfortunately, we are unable to accommodate children at the wedding, though babes in arms are welcome. If you have any concerns/questions or are planning on bringing a baby, please feel free to reach out to Victoria or Thomas."
        ></AccordionItem>
        <AccordionItem
          question="What type of food and drink will be served?"
          answer="A three-course wedding breakfast will be served to all day guests, followed by food in the evening for both day and evening guests. We can accommodate dietary requirements upon request, so please let us know in advance. There will be alcoholic and soft drink options available throughout the day and a bar in the evening."
        ></AccordionItem>
        <AccordionItem
          question="Will there be dancing or entertainment?"
          answer="Yes! We’ll have lawn games available during the reception, and after the Wedding Breakfast, the DJ and dancefloor will be ready for a night of dancing. Be sure to let us know your song requests to get you on the dance floor!"
        ></AccordionItem>
        <AccordionItem
          question="Can I take photos during the ceremony or reception?"
          answer="We kindly request that the ceremony be phone-free and ask that no photos be taken during this time. However, feel free to take as many photos as you'd like during the rest of the day. Our photographer will also be capturing moments throughout the event."
        ></AccordionItem>
        <AccordionItem
          question="What time should I leave?"
          answer="The mansion closes at midnight, so all guests are encouraged to stay until then to enjoy the full celebration."
        ></AccordionItem>
        <AccordionItem
          question="Do you have any mobility issues or special requirements?"
          answer="If you have any mobility concerns or special requirements, please don’t hesitate to contact Victoria or Thomas. We want to ensure everyone is comfortable and able to fully enjoy the day."
        ></AccordionItem>
        <AccordionItem
          question="How do I RSVP?"
          answer="Please RSVP by filling out the form on our website. We kindly ask that all guests respond in advance by the 1st March."
        ></AccordionItem>
        <AccordionItem
          question="Is Kevin coming?"
          answer="No, the little terror will be looked after for the day. A big thank you to Nicola and Jason for taking care of him!"
        ></AccordionItem>
        <AccordionItem
          question="Will there be Alpacas at the wedding?"
          answer="Unfortunately, no alpacas will be joining us — Thomas was not allowed to have them :("
        ></AccordionItem>
      </Box>
    </PageWrapper>
  );
};

export default FAQ;

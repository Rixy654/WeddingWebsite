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
          answer="The dress code for our wedding is wedding formal. Please keep in mind that the venue, The Keep, has steep stairs. For your safety and comfort, we recommend avoiding long dresses or high heels that may be difficult to navigate on the stairs."
        ></AccordionItem>
        <AccordionItem
          question="What time does the ceremony/reception start?"
          answer="The ceremony will begin at 2:30 PM, but we encourage guests to arrive from 1:30 PM onwards. Tea and coffee will be available for you to enjoy in The Keep before the ceremony starts."
        ></AccordionItem>
        <AccordionItem
          question="Where is the wedding taking place?"
          answer="The ceremony will take place at The Keep, located on the grounds of Hedingham Castle. The reception will follow in a marquee adjacent to the mansion. On-site parking is available."
        ></AccordionItem>
        <AccordionItem
          question="Can I bring a plus one?"
          answer="If your invitation includes a plus one, it will be clearly indicated with an unnamed 'guest.' If you have any questions about bringing a plus one, please feel free to contact Victoria or Thomas for clarification."
        ></AccordionItem>
        <AccordionItem
          question="What happens after the ceremony?"
          answer="Following the ceremony, we will have a reception and dinner in the mansion. Day guests do not need to RSVP separately for the reception. For more details about the schedule and events, please visit The Day page."
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
          answer="Yes! After the wedding breakfast, we have a DJ and dancefloor ready for dancing. We’ll also have lawn games available during the reception, where we encourage friendly competition between the bride's side and groom's side."
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
          question="How do I RSVP?"
          answer="Please RSVP by filling out the form on our website. We kindly ask that all guests respond in advance by the 1st March."
        ></AccordionItem>
        <AccordionItem
          question="Is Kevin Coming?"
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

import * as React from 'react';
import { Box, Typography } from '@mui/material';

import PageWrapper from '../../components/PageWrapper';
import TwoColumnLayout from '../../components/TwoColumnLayout/TwoColumnLayout';

const Accommodation: React.FC = () => {
  return (
    <PageWrapper>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h2" gutterBottom textAlign="center">
          Accomodation Nearby
        </Typography>
        <TwoColumnLayout
          title="The Suites at Pannells Ash"
          text="An adults-only accommodation offering luxurious suites with garden views, free Wi-Fi, and private parking. Guests praise its cleanliness and hospitality."
          locationLink="https://www.google.com/maps/search/The+Suites+at+Pannells+Ash%2C+Castle+Hedingham%2C+UK"
          bookingLink="https://www.booking.com/city/gb/castle-hedingham.html"
          imageSrc="https://via.placeholder.com/600x400"
        />
        <TwoColumnLayout
          title="Holiday Inn Express Braintree, an IHG Hotel"
          text="A modern hotel situated on the edge of Braintree town centre, offering comfortable rooms with free Wi-Fi and breakfast included. Conveniently located near Stansted Airport."
          locationLink="https://www.google.com/maps/search/Holiday+Inn+Express+Braintree%2C+an+IHG+Hotel%2C+Braintree%2C+UK"
          bookingLink="https://www.booking.com/landmark/gb/hedingham-castle.en-gb.html"
          imageSrc="https://via.placeholder.com/600x400"
          imageOnLeft
        />
        <TwoColumnLayout
          title="The Mill Hotel"
          text="Set in the centre of Sudbury on the banks of the River Stour, this hotel features a bar, restaurant, and sun terrace with picturesque views over the meadows."
          locationLink="https://www.google.com/maps/search/The+Mill+Hotel%2C+Sudbury%2C+UK"
          bookingLink="https://www.booking.com/landmark/gb/hedingham-castle.en-gb.html"
          imageSrc="https://via.placeholder.com/600x400"
        />
        <TwoColumnLayout
          title="The Essex Golf & Country Club Hotel"
          text="A modern golf and country club hotel offering comfortable rooms, a fitness centre, and an on-site restaurant. Ideal for golf enthusiasts and leisure travelers."
          locationLink="https://www.google.com/maps/search/The+Essex+Golf+%26+Country+Club+Hotel%2C+Coggeshall%2C+UK"
          bookingLink="https://www.booking.com/landmark/gb/hedingham-castle.en-gb.html"
          imageSrc="https://via.placeholder.com/600x400"
          imageOnLeft
        />
        <TwoColumnLayout
          title="The White Hart Hotel by Greene King Inns"
          text="Set in a beautiful 15th-century building, this hotel boasts a courtyard terrace and a traditional restaurant, offering a blend of historic charm and modern amenities."
          locationLink="https://www.google.com/maps/search/The+White+Hart+Hotel+by+Greene+King+Inns%2C+Coggeshall%2C+UK"
          bookingLink="https://www.booking.com/landmark/gb/hedingham-castle.en-gb.html"
          imageSrc="https://via.placeholder.com/600x400"
        />
      </Box>
    </PageWrapper>
  );
};

export default Accommodation;

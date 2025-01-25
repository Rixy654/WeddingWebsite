import * as React from 'react';
import { Box, Typography } from '@mui/material';

import PageWrapper from '../../components/PageWrapper';
import TwoColumnLayout from '../../components/TwoColumnLayout/TwoColumnLayout';

const Accommodation: React.FC = () => {
  return (
    <PageWrapper>
      <Box sx={{ padding: 4 }}>
        <Typography
          variant="h2"
          gutterBottom
          textAlign="center"
          sx={{ fontSize: { xs: '3.25rem', sm: '3.75rem' } }}
        >
          Accomodation Nearby
        </Typography>
        <TwoColumnLayout
          title="The Suites at Pannells Ash"
          text="An adults-only accommodation offering luxurious suites with garden views, free Wi-Fi, and private parking. Guests praise its cleanliness and hospitality."
          locationLink="https://www.google.com/maps/search/The+Suites+at+Pannells+Ash%2C+Castle+Hedingham%2C+UK"
          bookingLink="https://www.booking.com/Share-VIJN5UR"
          imageSrc="https://cf.bstatic.com/xdata/images/hotel/max1024x768/26537533.jpg?k=d83c7ddec3d9648d574ab51dff695a2df23e455b921f75f01b732e9c8093c5aa&o=&hp=1"
        />
        <TwoColumnLayout
          title="The Dorrington"
          text="The Dorrington Hotel and Bar is a 3-minute walk from Halstead town centre. Free Wifi is available throughout, and limited free parking is available onsite."
          locationLink="https://maps.app.goo.gl/KRjBttiAekEz4LNZ7"
          bookingLink="https://www.booking.com/Share-kSITxk"
          imageSrc="https://cdn0.hitched.co.uk/vendor/3210/3_2/960/png/facade_v3.jpeg"
          imageOnLeft
        />
        <TwoColumnLayout
          title="The White Hart Hotel by Greene King Inns"
          text="Set in a beautiful 15th-century building, this hotel boasts a courtyard terrace and a traditional restaurant, offering a blend of historic charm and modern amenities."
          locationLink="https://www.google.com/maps/search/The+White+Hart+Hotel+by+Greene+King+Inns%2C+Coggeshall%2C+UK"
          bookingLink="https://www.booking.com/landmark/gb/hedingham-castle.en-gb.html"
          imageSrc="https://cf.bstatic.com/xdata/images/hotel/max1024x768/554759048.jpg?k=671ee10867d6fbf2344ec2c11f943c59d470f768573e30d666dd7870534236c2&o=&hp=1"
        />
        <TwoColumnLayout
          title="The Mill Hotel"
          text="Set in the centre of Sudbury on the banks of the River Stour, this hotel features a bar, restaurant, and sun terrace with picturesque views over the meadows."
          locationLink="https://www.google.com/maps/search/The+Mill+Hotel%2C+Sudbury%2C+UK"
          bookingLink="https://www.booking.com/landmark/gb/hedingham-castle.en-gb.html"
          imageSrc="https://cf.bstatic.com/xdata/images/hotel/max1024x768/400436784.jpg?k=4023a566bdba3788a00c4c5b5a2672726b9430c4781e4acb1e8ede9270bfd083&o=&hp=1"
          imageOnLeft
        />
        <TwoColumnLayout
          title="The Dog Inn"
          text="Set in Halstead and with Hedingham Castle reachable within 6.9 km, The Dog Inn offers a bar, non-smoking rooms, free WiFi and barbecue facilities."
          locationLink="https://maps.app.goo.gl/Dd6SPx8ZQuipSF8M7"
          bookingLink="https://www.booking.com/Share-ykRZoCj"
          imageSrc="https://cf.bstatic.com/xdata/images/hotel/max500/264877287.jpg?k=7e39cd85d6b617bd3a6c59f653aedfa136cccc077113942c510b37125b1c578a&o=&hp=1"
        />
        <TwoColumnLayout
          title="Annexe at Gosfield Lake"
          text="The Annexe is the guest wing of Lake House, the owner’s residence, offering beautifully appointed rooms with spectacular views over the lake."
          locationLink="https://maps.app.goo.gl/Gb7p97rF486C9hd88"
          bookingLink="https://www.booking.com/Share-dldPpJ1"
          imageSrc="https://a0.muscache.com/im/pictures/eedbb2e3-a5b5-4b8c-a102-85e8af358337.jpg?im_w=720&im_format=avif"
          imageOnLeft
        />
        <TwoColumnLayout
          title="Bull Inn"
          text="Close to both Colchester and Chelmsford, the Bull Hotel, Halstead, is the perfect place to relax and recharge."
          locationLink="https://maps.app.goo.gl/6RRJrdpNC7wdT6Ub9"
          bookingLink="https://www.booking.com/Share-LO0fZm"
          imageSrc="https://cf.bstatic.com/xdata/images/hotel/max1024x768/476252465.jpg?k=82206e17bf17e949ca0d8d3c697d708da3b5038059bf5f39603d20bfa1f78e1c&o=&hp=1"
        />
        <TwoColumnLayout
          title="The Essex Golf & Country Club Hotel"
          text="A modern golf and country club hotel offering comfortable rooms, a fitness centre, and an on-site restaurant."
          locationLink="https://www.google.com/maps/search/The+Essex+Golf+%26+Country+Club+Hotel%2C+Coggeshall%2C+UK"
          bookingLink="https://www.booking.com/landmark/gb/hedingham-castle.en-gb.html"
          imageSrc="https://www.mygolfholidays.com/site/assets/files/2958/the-essex-golf-country-club-prim.jpg"
          imageOnLeft
        />
        <TwoColumnLayout
          title="Holiday Inn Express Braintree, an IHG Hotel"
          text="A modern hotel situated on the edge of Braintree town centre, offering comfortable rooms with free Wi-Fi and breakfast included. Conveniently located near Stansted Airport."
          locationLink="https://www.google.com/maps/search/Holiday+Inn+Express+Braintree%2C+an+IHG+Hotel%2C+Braintree%2C+UK"
          bookingLink="https://www.booking.com/landmark/gb/hedingham-castle.en-gb.html"
          imageSrc="https://digital.ihg.com/is/image/ihg/holiday-inn-express-braintree-3855166391-4x3"
        />
      </Box>
    </PageWrapper>
  );
};

export default Accommodation;

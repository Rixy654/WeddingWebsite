import * as React from 'react';
import { Box } from '@mui/material';
import { Grid } from '@material-ui/core';

import { ComponentProps } from '../../types';
import PageWrapper from '../../components/PageWrapper';
import InfoCard from '../../components/InfoCard';

const Travel: React.FC<ComponentProps> = () => {
  return (
    <PageWrapper>
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <InfoCard
              title="De Vere Cars"
              text="Offers a range of vehicles, including minibuses for corporate events, airport transfers, and special occasions. Known for punctuality and professional drivers."
              phoneLink="01787 460999"
              webLink="https://www.deveretravel.com/"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoCard
              title="Halstead Taxis"
              text="Offers local and long-distance taxi services, including airport transfers. Known for courteous drivers and efficient service."
              phoneLink="01787 474666"
              webLink="https://www.halsteadcars.co.uk/"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoCard
              title="Halstead Town Cars"
              text=""
              phoneLink="01787 477975"
              webLink=""
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoCard
              title="Zoom Cars"
              text="Provides taxi services with clean vehicles and professional drivers. Offers reasonable prices and is noted for punctuality, especially for airport runs."
              phoneLink="01787 473717"
              webLink="https://www.zoomcars.co.uk/"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoCard
              title="B. A. Rash"
              text=""
              phoneLink="07790 867952"
              webLink="https://rash-taxis.business.site/"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoCard
              title="Liberty Cars"
              text=""
              phoneLink="01787 474492"
              webLink=""
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoCard
              title="Castle Cars"
              text="A local private hire service with a large estate car, ideal for pre-booked journeys, airport transfers, and day trips. Praised for reliability and friendly service."
              phoneLink="07956 456033"
              webLink="https://castlecars-taxiservice.business.site/?utm_medium=referral&utm_source=gmb"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoCard
              title="C&L Cars"
              text=""
              phoneLink="07565 563558"
              webLink=""
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoCard
              title="Hello Taxis Braintree"
              text="Small but friendly taxi service covering Braintree & the surrounding areas. Provide you with a punctual & affordable service that's available 24/7."
              phoneLink="01376 230230"
              webLink="http://www.hellotaxi.co/"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoCard
              title="Yelo"
              text="Started in 1978 they have built a reputation for reliability, quality service, friendly drivers and competitive prices."
              phoneLink="01376 334455"
              webLink="https://yelotaxi.co.uk/"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoCard
              title="Freedom Taxi"
              text=""
              phoneLink="01376 230024"
              webLink="http://www.freedomtaxi.co.uk/"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoCard
              title="Taxi Taxi Braintree"
              text="Professional, reliable and affordable Taxi Service located in the heart of Braintree, Essex. Covering most of East Anglia"
              phoneLink="07407 057583"
              webLink="https://taxitaxi.cab/"
            />
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  );
};

export default Travel;

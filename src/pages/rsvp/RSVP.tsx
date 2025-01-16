import * as React from 'react';
import { useState } from 'react';
import { Box, Tabs, Tab, Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import PageWrapper from '../../components/PageWrapper';
import RSVPForm from '../../components/RSVPDayForm';

const RSVP: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const WEB_APP_URL =
    'https://script.google.com/macros/s/AKfycbzIwgwfkfqrlUcTpUyFBTLQ_RdHui0lxznV7Ruvn2ZW0mUg_kzLhr81mrtFKMAHKaACKw/exec';

  const handleSubmit = async (data: {
    primaryGuest: {
      name: string;
      email: string;
      attending: string;
      song: string;
      dietaryRequirements: string;
      otherDietaryDetails?: string;
    };
    additionalGuests: {
      name: string;
      email: string;
      attending: string;
      song: string;
      dietaryRequirements: string;
      otherDietaryDetails?: string;
    }[];
  }) => {
    try {
      const payload = {
        primaryGuest: {
          inviteType: tabIndex === 0 ? 'All Day' : 'Evening',
          name: data.primaryGuest.name,
          email: data.primaryGuest.email,
          attending: data.primaryGuest.attending,
          song: data.primaryGuest.song,
          dietaryRequirements: data.primaryGuest.dietaryRequirements,
          otherDietaryDetails:
            data.primaryGuest.dietaryRequirements === 'other'
              ? data.primaryGuest.otherDietaryDetails
              : undefined,
        },
        additionalGuests: data.additionalGuests.map((guest) => ({
          inviteType: tabIndex === 0 ? 'All Day' : 'Evening',
          name: guest.name,
          email: guest.email,
          attending: guest.attending,
          song: guest.song,
          dietaryRequirements: guest.dietaryRequirements,
          otherDietaryDetails:
            guest.dietaryRequirements === 'other'
              ? guest.otherDietaryDetails
              : undefined,
        })),
      };

      setLoading(true);

      const response = await fetch(WEB_APP_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.status === 'success') {
        console.log('Submission successful:', result.message);
        setLoading(false);
        navigate('/rsvp-success');
      } else {
        setLoading(false);
        console.error('Submission failed:', result.message);
      }
    } catch (error) {
      setLoading(false);
      console.error('Error submitting data:', error);
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <PageWrapper>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box
          sx={{
            padding: 3,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: 'white',
            width: '100%',
          }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            RSVP Now
          </Typography>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="All Day Guest" />
            <Tab label="Evening Guest" />
          </Tabs>
          {tabIndex === 0 && (
            <>
              <Typography
                variant="body1"
                align="center"
                gutterBottom
                sx={{ marginTop: '10px' }}
              >
                <b>Arrival: </b>All day guests are welcome to arrive from 1:30pm
                onwards. Ceremony begins at 2:30pm.
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                <b>Attire: </b>Wedding Formal. Please keep in mind that the
                ceremony venue, The Keep, has steep stairs and that the drinks
                reception will be partily held outside on a lawn.
              </Typography>
              <RSVPForm handleSubmit={handleSubmit} guestType="day" />
            </>
          )}
          {tabIndex === 1 && (
            <>
              <Typography
                variant="body1"
                align="center"
                gutterBottom
                sx={{ marginTop: '10px' }}
              >
                <b>Arrival: </b>All evening guests should aim to arrive at 8pm
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                <b>Attire: </b>Wedding Formal.
              </Typography>
              <RSVPForm handleSubmit={handleSubmit} guestType="evening" />
            </>
          )}
          {loading && (
            <CircularProgress
              sx={{ position: 'absolute', top: '50%', left: '50%' }}
            />
          )}
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default RSVP;

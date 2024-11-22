import * as React from "react";
import { Box } from '@mui/material';

import PageWrapper from "../../components/PageWrapper";
import RSVPForm from "../../components/RSVPForm";


interface ComponentProps {
}

interface RSVPFormDataObject {
  name: string;
  email: string;
}

const RSVP: React.FC<ComponentProps> = () => {

  const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxpEcoC6qPSHR1noRZ-ATmn2BBpb8FnXQ5v6OpkfdB0sYJPcGfpwv66P0K7p4kGxrit7A/exec';

  const handleSubmit = async (data: RSVPFormDataObject) => {
    try {
      const response = await fetch(WEB_APP_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
        }),
      });

      const result = await response.json();
      if (result.status === 'success') {
        console.log(result.message);
      } else {
        console.log(result.message);
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <PageWrapper>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <RSVPForm handleSubmit={handleSubmit} />
      </Box>
    </PageWrapper>
  );
};

export default RSVP;
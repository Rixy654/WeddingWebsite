import * as React from 'react';
import { Box, Typography } from '@mui/material';

import PageWrapper from '../../components/PageWrapper';

const AboutUs: React.FC = () => {
  return (
    <PageWrapper>
      <Box sx={{ padding: 4 }}>
        <Typography
          variant="h2"
          gutterBottom
          textAlign="center"
          sx={{ fontFamily: "'Bellefair', serif" }}
        >
          About us
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ fontFamily: "'Bellefair', serif" }}
        >
          It all started in 2021, just as the world was reopening after
          lockdowns, and apparently, so were we. We met online and spent three
          months having deeply intellectual discussions about{' '}
          <i>how to steal a yacht</i> and how seagulls might help us pull off
          the perfect maritime heist. Naturally, we decided it was time to meet
          in person to refine our heist plan.
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ fontFamily: "'Bellefair', serif" }}
        >
          In September, we had our first date in a wine bar in Covent Garden,
          which, tragically (and perhaps suspiciously?), has since shut down.
          Our evening included a waiter with an eyepatch (a promising sign for
          yacht piracy), and a surprise guest appearance from Francesca, a tipsy
          woman who invited herself to our table. Francesca had many questions
          about our date, pulled up a chair, almost fell over (multiple times),
          and left us with a story we’ll never forget.
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ fontFamily: "'Bellefair', serif" }}
        >
          We were so engrossed in conversation that we didn’t touch our food and
          only left when the staff gently kicked us out. From there, we wandered
          around central London for hours. Thomas was limping from an overly
          enthusiastic spin class the day before, which Victoria mistakenly
          thought was a permanent affliction. Nevertheless, he gallantly walked
          her home, thus cementing his hero status.
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ fontFamily: "'Bellefair', serif" }}
        >
          Two days later, Thomas made good on a promise from our first date and
          took Victoria to The Shard (she had never been). For the third date,
          we kept the maritime theme alive with drinks on a pub boat on the
          Thames, followed by a stroll to Battersea Park... where we got locked
          in. Not ones to be deterred, we scaled a fence and made it out,
          laughing all the way.
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ fontFamily: "'Bellefair', serif" }}
        >
          Our fourth date was even more dramatic. This time, Hyde Park was the
          culprit. We lost track of time while walking and found ourselves
          locked in once again, this time at 3 a.m. on a Sunday night. Once
          again, we scaled the fence—partners in (accidental) crime, if not
          quite in yacht theft.
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ fontFamily: "'Bellefair', serif" }}
        >
          And the rest, as they say, is history.
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ fontFamily: "'Bellefair', serif" }}
        >
          We can’t wait to share our next chapter with you—this time with a
          venue that (hopefully) doesn’t lock its doors.
        </Typography>
      </Box>
    </PageWrapper>
  );
};

export default AboutUs;

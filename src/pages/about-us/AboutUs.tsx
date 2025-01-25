import * as React from 'react';
import { Box, Typography } from '@mui/material';

import PageWrapper from '../../components/PageWrapper';
import ImageWithCaption from '../../components/ImageWithCaption';

import seagulls from '../../assets/about/seagulls.jpeg';
import berlin from '../../assets/about/berlin.jpeg';
import kenya from '../../assets/about/kenya.jpeg';
import flat from '../../assets/about/flat.jpeg';
import newYork from '../../assets/about/newYork.png';
import yacht from '../../assets/about/yacht.jpeg';
import engagement from '../../assets/about/engagement.jpeg';
import brix from '../../assets/about/brix.jpeg';
import kevin from '../../assets/about/kevin.jpeg';

const AboutUs: React.FC = () => {
  return (
    <PageWrapper>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h2" gutterBottom textAlign="center">
          About Us
        </Typography>
        <ImageWithCaption
          src={seagulls}
          alt="Seagulls"
          caption="Where it all started"
          isRight
          width="20%"
        />
        <Typography variant="body1" align="center" gutterBottom>
          It all started in 2021, just as the world was reopening after
          lockdowns, and apparently, so were we. We met online and spent three
          months having deeply intellectual discussions about{' '}
          <i>how to steal a yacht</i> and{' '}
          <i>how seagulls might help us pull off the perfect maritime heist</i>.
          Naturally, we decided it was time to meet in person to refine our
          heist plan.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          In September, we had our first date in a wine bar in Covent Garden,
          which, tragically (and perhaps suspiciously?), has since shut down.
          Our evening included a waiter with an eyepatch (a promising sign for
          yacht piracy), and a surprise guest appearance from Francesca, a tipsy
          woman who invited herself to our table. Francesca had many questions
          about our date, pulled up a chair, almost fell over (multiple times),
          and left us with a story we&rsquo;ll never forget.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          We were so engrossed in conversation that we didn&rsquo;t touch our
          food and only left when the staff gently kicked us out. From there, we
          wandered around central London for hours. Thomas was limping from an
          overly enthusiastic spin class the day before, which Victoria
          mistakenly thought was a permanent affliction. Nevertheless, he
          gallantly walked her home, thus cementing his hero status.
        </Typography>
        <ImageWithCaption
          src={berlin}
          alt="Berlin"
          caption="In Berlin"
          width="20%"
        />
        <Typography variant="body1" align="center" gutterBottom>
          Two days later, Thomas made good on a promise from our first date and
          took Victoria to The Shard (she had never been). For the third date,
          we kept the maritime theme alive with drinks on a pub boat on the
          Thames, followed by a stroll to Battersea Park... where we got locked
          in. Not ones to be deterred, we scaled a fence and made it out,
          laughing all the way.
        </Typography>
        <ImageWithCaption
          src={kenya}
          alt="Kenya"
          caption="In Kenya"
          isRight
          width="20%"
        />
        <Typography variant="body1" align="center" gutterBottom>
          Our fourth date was even more dramatic. This time, Hyde Park was the
          culprit. We lost track of time while walking and found ourselves
          locked in once again, this time at 3am on a Sunday night. Once again,
          we scaled the fence—partners in (accidental) crime, if not quite in
          yacht theft.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          The romance blossomed from there, taking us on adventures big and
          small. Our first major trip together was to Brighton, where we said
          &#34;I love you&#34; for the first time, fittingly on the beach and,
          of course, surrounded by seagulls—because why wouldn&rsquo;t they show
          up? Brighton also marked the start of our tradition of collecting
          cuddly toys from every trip, each one with a name and a story (no
          surprises to anyone who knows us). Sasquatch, the very first from that
          trip, became a lasting part of our story—he was the one holding the
          ring box when Thomas proposed a couple of years later.
        </Typography>
        <ImageWithCaption
          src={flat}
          alt="In the flat"
          caption="Our first home"
          width="20%"
        />
        <Typography variant="body1" align="center" gutterBottom>
          Next came Berlin, which was Thomas&rsquo; first trip abroad and where
          we explored the city with a mix of excitement and way too much
          bratwurst. From there, the adventures kept coming. There was a
          romantic forest getaway Thomas planned for Victoria&rsquo;s birthday,
          where his enthusiasm slightly overshadowed practical details like how
          far away it was. (Spoiler: We spent as much on renting a car as the
          trip itself.)
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          One of the most memorable journeys was a last-minute work trip to
          Kenya, which Thomas cleverly tagged along on. It included a safari,
          feeding giraffes, visiting an elephant orphanage, and taking a walk
          with monkeys in the treetops. Lanzarote was another highlight,
          offering beach days, sunshine, and plenty of laughs—until we
          discovered, just three hours before our flight home, that it had been
          canceled. Stranded (not that we complained too much), we ended up
          spending an extra two days there, turning the chaos into an unexpected
          mini-holiday extension.
        </Typography>
        <ImageWithCaption
          src={newYork}
          alt="New York"
          caption="New York!"
          width="20%"
          isRight
        />
        <Typography variant="body1" align="center" gutterBottom>
          By summer 2022, we decided it was time to take the next big step and
          moved in together in Canary Wharf. Our new home had arguably one of
          the best views in London, which we celebrated with countless mornings
          of Buck&rsquo;s Fizz on the balcony—a tradition we embraced with great
          enthusiasm.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          That magical year ended with a Christmas trip to New York, where we
          ticked off all the touristy things and braved -20°C weather—only to
          return to London in January both thoroughly unwell.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Once we&rsquo;d recovered in 2023, Thomas surprised Victoria with
          another birthday trip, this time bringing our yacht heist dreams full
          circle—a week away on a yacht, complete with a hot tub. Not quite
          stolen (or driven by seagulls), but the yacht experience finally
          happened! Feeling emboldened by this success, we returned to Lanzarote
          (this time the flight actually left on the right day—small wins) and
          made another trip to Brighton, where seagulls once again made their
          obligatory appearance.
        </Typography>
        <ImageWithCaption
          src={yacht}
          alt="Yacht"
          caption="A promise kept"
          width="20%"
        />
        <Typography variant="body1" align="center" gutterBottom>
          Then came the 3rd of September 2023. Exactly two years after our very
          first date, Thomas proposed in our living room. The celebration began
          with Buck&rsquo;s Fizz on the balcony (naturally) and was followed by
          dinner at The Shard, just like our second date—though this time,
          sensibly booked at a reasonable hour rather than the last-minute, 10
          p.m. slot booked with 48 hours notice for their second date.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          By early October, we&rsquo;d already booked our wedding venue. We only
          viewed one, but when you know, you know, right? Later that month, for
          Thomas&rsquo; birthday, we jetted off to Florence and Rome for a
          whirlwind Italian adventure—pasta, wine, and plenty of pizza.
          Naturally, we returned home the day before making another huge
          decision: reserving the plot for our new-build house. In true “us”
          fashion, we barely viewed any houses, because, once again, when you
          know, you know!
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          And so, Autumn 2023 became the season where we seemingly made all the
          life decisions: engaged, venue booked, house reserved, and a birthday
          celebration thrown in for good measure. Nothing like cramming every
          major milestone into eight weeks!
        </Typography>
        <ImageWithCaption
          src={engagement}
          alt="Engagement"
          caption="Getting engaged"
          width="20%"
          isRight
        />
        <Typography variant="body1" align="center" gutterBottom>
          2024 saw us getting a head start on the “in sickness” part of the
          wedding vows. Victoria had a run-in with a mandolin (the slicer, not
          the instrument—though honestly, the instrument would&rsquo;ve been
          less painful), resulting in part of her top finger bidding her
          farewell. Not to be outdone, Thomas managed to dislocate his knee
          while reaching for a cheese grater. Yes, a cheese grater. If
          you&rsquo;re wondering how that&rsquo;s even possible, trust us,
          we&rsquo;re still scratching our heads too.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          We then moved out of our flat in June 2024 and into our new house in
          July 2024—a momentous step that came with its own challenges. Chief
          among them? Building flat-pack furniture. If you thought helping
          someone on crutches dress and shower tested a relationship, try
          figuring out which piece of wood is the “front panel” while the
          instructions are upside down, and your partner insists they “know what
          they&rsquo;re doing.”
        </Typography>
        <ImageWithCaption
          src={brix}
          alt="Our Home"
          caption="Our first house"
          width="20%"
        />
        <Typography variant="body1" align="center" gutterBottom>
          Let&rsquo;s just say there were a few moments of tension (and maybe
          some slightly raised voices), but we made it through with only a
          couple of mystery screws left over. Turns out, piecing together a home
          is about more than just furniture—it&rsquo;s about patience,
          compromise, and the occasional deep breath to stop yourself from
          throwing a screwdriver across the room.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          While in the midst of furnishing our new home (read: dodging
          half-unpacked boxes and wondering why we own so many random cables),
          we jetted off to Cyprus for a wedding. Somewhere between the sunshine
          and the speeches, Victoria decided it was the perfect time to convince
          Thomas that we needed a dog—because what better moment than six weeks
          into a new house filled with chaos?
        </Typography>
        <ImageWithCaption
          src={kevin}
          alt="Kevin"
          caption="Little Kevin"
          width="20%"
          isRight
        />
        <Typography variant="body1" align="center" gutterBottom>
          Thomas, who had previously held firm on “after the wedding in May
          2025,” gave the slightest indication that he might be open to the
          idea. Naturally, Victoria ran with it. By the time our plane touched
          down, we&rsquo;d set up an account, found a puppy, and started
          messaging about him. The next day, we arranged to meet him. The day
          after that, we visited. And by the day after that, little Kevin was
          coming home with us. Three days from first message to full-time puppy
          parents—because when you know, you know!
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Of course, Kevin wasn&rsquo;t going to make things too easy. The
          following weeks tested our relationship in new ways—broken sleep, 3
          a.m. bathroom runs (for Kevin, not us), and plenty of chewed toys.
          Let&rsquo;s just say getting up every few hours for a puppy
          isn&rsquo;t nearly as cute as Instagram makes it look. But despite the
          sleepless nights and the occasional tantrum (ours, not Kevin&rsquo;s),
          we wouldn&rsquo;t have it any other way.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Kevin is now the centre of our universe—spoiled rotten, absolutely
          adored, and somehow managing to be both the most chaotic and the best
          decision we&rsquo;ve ever made.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          And here we are today! We&rsquo;ve just hosted our first Christmas in
          our new home, we&rsquo;re full-time puppy parents to the wonderfully
          chaotic Kevin, and we&rsquo;re in the midst of planning our wedding.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          The past three and a half years have been nothing short of an
          adventure. We&rsquo;ve seen it all—three football promotions
          (including an absolutely insane two-week period where both Oxford and
          Ipswich got promoted, which, if you know football, is nothing short of
          a miracle), multiple job changes, relocations, holidays, far too many
          encounters with seagulls, and everything in between.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          If we can survive a year of kitchen disasters, missing digits, dodgy
          knees, buying a house, moving into said house, and raising a puppy,
          we&rsquo;re feeling pretty confident about this whole “for better or
          worse” thing.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Now, with all the craziness behind us (well, most of it), we
          can&rsquo;t wait to celebrate our wedding day with all of you and
          start the next chapter of this wonderfully unpredictable journey. ❤️
        </Typography>
      </Box>
    </PageWrapper>
  );
};

export default AboutUs;

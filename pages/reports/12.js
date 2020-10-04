import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
import Citations from '../../components/citations';
import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';

const reportNumber = 12;
const startDate = '2020-09-20';
const endDate = '2020-09-26';
const submissionDate = '2020-09-27';
const citations = ['TIE-TC 246'];
const citationsChange = '-1';

const orders = [{
  name: 'TIE-TC 138',
  id: 324,
  title: 'Battle of the TIE Interceptor',
}, {
  name: 'XvT-TC 61',
  id: 937,
  title: 'Operation Cotton Candy',
}, {
  name: 'XWA-TC 36',
  id: 1070,
  title: 'GWSOoM Shipping Inc. \'Call to Chaos\'None',
}];

const activity = [{
  pin: 12630,
  name: '1-1 COL Silwar Naiilo',
  activity: {
    communication: 'Email, discord',
    flight: 'XvT PVP; EABF2 PVP; XvT co-op; XWA-IW 2, 3, XWA-TC 8, 23, 39; XWA-Free 125, 126, 127, 129, 136, 137, 138, 139, 141, 143, 146, 151, 152, 153, 154',
    other: 'Participation in the Emperor\'s Wrath tournament; Participation in the PvP Shootout',
    awards: '2x IS-BW; 12 x LoC; 1x LoS',
  },
}, {
  pin: 55591,
  name: '1-2 LCM Rachel Drakon',
  activity: {
    communication: 'Discord',
    flight: 'None',
    other: 'Trivia for the Challenged',
    awards: 'None',
  },
}, {
  pin: 55783,
  name: '1-3 LT Neko',
  activity: {
    communication: 'Daily check-ins',
    flight: 'None',
    other: '3 art entries for RtF',
    awards: 'None',
  },
}, {
  pin: 55785,
  name: '1-4 LT Iam Thinking',
  activity: {
    communication: 'Daily check-ins',
    flight: 'None',
    other: '2 art entries for RtF',
    awards: 'None',
  },
}, {
  pin: 55825,
  name: '2-1 LT Marek Ny`Irfa',
  activity: {
    communication: 'Email, Discord',
    flight: 'XWA-TC 7, 8, 9, 10, 11, 12',
    other: 'Wrote a review for every battle and mission flown; updated uniform',
    awards: 'None',
  },
}, {
  pin: 6490,
  name: '2-2 CPT Hermann',
  activity: {
    communication: 'Email, Discord',
    flight: 'BoP-TC 22, 23, 25; BoP-DB 1; BoP-IW 1; TIE-TC 1, 2, 3; XW-TC 3; XW-Free 3',
    other: 'Trivia for the Challenged',
    awards: 'None',
  },
}, {
  pin: 6874,
  name: '2-3 LC Phalk Sturm',
  activity: {
    communication: 'Discord',
    flight: 'XWA-IW 5, 6, 8; XWA-HF 1; XWA-DB 1, 3, 5, 8, 9',
    other: 'Trivia for the Challenged',
    awards: 'None',
  },
}, {
  pin: 1968,
  name: '2-4 CPT Kalve Ryder',
  activity: {
    communication: 'Email, Discord',
    flight: 'TIE-TC 246',
    other: 'Entry for RtF graphics competition; updated uniform; RtF Puzzle #2; Trivia for the Challenged; Cryp-TAC; multiple additional art entries',
    awards: 'None',
  },
}, {
  pin: 8385,
  name: '3-2 LC Repulsor',
  activity: {
    communication: 'Email',
    flight: 'None',
    other: 'None',
    awards: 'None',
  },
}, {
  pin: 12796,
  name: '3-3 GN Dunta Polo',
  activity: {
    communication: 'Email, Discord',
    flight: 'SC Co-op',
    other: 'None',
    awards: '5x LoS',
  },
}, {
  pin: 55817,
  name: '3-4 LT Sat Nav',
  activity: {
    communication: 'Discord',
    flight: 'XvT co-op',
    other: 'None',
    awards: 'Rank promotion SL -> LT; LoS',
  },
}];

const competitions = [{
  id: '3156',
  name: 'Raise the Flag 2020',
  ends: '2020-09-30',
  units: 'Entire TC',
  highlight: true,
}, {
  id: '3165',
  name: 'Raise the Flag Bonus Competition #5: Puzzle 2',
  ends: '2020-09-28',
  units: 'Entire TC',
  highlight: true,
}, {
  id: '3166',
  name: 'Raise the Flag Bonus Competition #6: SP',
  ends: '2020-09-30',
  units: 'Entire TC',
  highlight: true,
}, {
  id: '3167',
  name: 'Art for the Riders on the Storm',
  ends: '2020-10-21',
  units: 'Entire TC',
  highlight: true,
}, {
  id: '3168',
  name: 'Sinful Imagery',
  ends: '2020-10-31',
  units: 'Entire TC',
}, {
  id: '3155',
  name: 'Wake me up when November ends',
  ends: '2020-11-30',
  units: 'ISD-II Challenge',
}, {
  id: '3154',
  name: 'The TIE Pilot Podcast',
  ends: '2021-12-31',
  units: 'Entire TC',
}, {
  id: '3161',
  name: 'Shakespearean-esque lyrics for modern songs',
  ends: '2020-10-31',
  units: 'Entire TC',
}, {
  id: '3149',
  name: 'The Empire\'s Wrath',
  ends: '2020-10-10',
  units: 'Entire TC',
}, {
  id: '3136',
  name: 'Warden\'s IU Tuition Assistance',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3135',
  name: 'Challenge Pilot of the month (SP/MP)',
  ends: '2020-12-31',
  units: 'ISD-II Challenge',
}, {
  id: '3134',
  name: 'Dempsey\'s Weekly Screenshots',
  ends: '2020-12-31',
  units: 'ISD-II Challenge',
}, {
  id: '3128',
  name: 'Warden\'s Sitcom Monthly Run-On',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3112',
  name: 'Cryp-TAC',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3102',
  name: 'Everyone\'s a Critic',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3100',
  name: 'TIE Corps in Battle 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3093',
  name: 'Ace of the TIE Corps 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3089',
  name: 'TIE Corps on the CoOp-Front - 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3088',
  name: 'TIE Corps on the MP-Front - 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3087',
  name: 'COO/SOO Riddle 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3084',
  name: 'COO\'s Star Wars Challenge, Episode VI',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3083',
  name: 'MP COOP Ace of the TIE Corps 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}, {
  id: '3082',
  name: 'MP Ace of the TIE Corps 2020',
  ends: '2020-12-31',
  units: 'Entire TC',
}];

export default function Report() {
  return (
    <>
      <Heading reportNumber={reportNumber} />

      <ReportDates
        startDate={startDate}
        endDate={endDate}
        submissionDate={submissionDate}
      />

      <Intro>
        <p>
          <em>
            Colonel Silwar Naiilo left the simulator, bleary-eyed and dehydrated after hours of
            attempts to destroy a CRL in a TIE/In. &ldquo;Whoever made this is a madman,&rdquo;
            he mumbled to himself, before grabbing an unlucky sublieutenant and barking an order
            for coffee.
          </em>
        </p>

        <p>
          Fantastic work so far in RtF. Rho surprised everyone with a sudden burst of activity and
          high scores on art entries, but we are still in the top three, and three of our pilots
          are in the top 10. We have contributions from 10/11 of our pilots.
        </p>

        <p>
          I&apos;d like to conduct a survey to see who plans on playing Squadrons at
          release or later. Please respond directly to me. I already have two positive responses.
          The COO&apos;s current guidance is to
          <strong>{' save screenshots of Squadrons victory screens '}</strong>
          until there are official rules around LoCs.
        </p>
      </Intro>

      <Orders missions={orders}>
        <p>
          This week&apos;s missions are the same as last week, from the RtF Singleplayer
          competition.  Awards are based on percentage of the high score - so everyone
          should participate for points, but the higher score you get, the more we earn
          for the squadron. If you need advice, contact Marek who has completed all three.
          The competition ends in three days, on 30 September.
        </p>
      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      >
        Our citations went down, but only because we gained a new pilot - veteran CPT Kalve Ryder,
        who immediately helped us to regain TIE-TC 246.
      </Citations>

      <Closing>
        This week will see the close of RtF. I am proud of this squadron&apos;s performance, and
        you should be as well - there has been an incredible showing. Here&apos;s hoping that
        Squadrons is everything it promises!
      </Closing>

      <Footer />
    </>
  );
}

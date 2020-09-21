import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
import Citations from '../../components/citations';
import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';

const reportNumber = 11;
const startDate = '2020-09-13';
const endDate = '2020-09-19';
const submissionDate = '2020-09-20';
const citations = ['TIE-TC 246', 'XWA-TC 52'];
const citationsChange = '+0';

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
  title: 'GWSOoM Shipping Inc. \'Call to Chaos\'',
}];

const activity = [{
  pin: 12630,
  name: '1-1 COL Silwar Naiilo',
  activity: {
    communication: 'Email, discord',
    flight: 'XWA-Free 145, 156; XWA-DB 9; XWA-IW 1; EABF2 PvP; XvT PvE; EH Shootout participation',
    other: 'Squadron administrative duties',
    awards: 'IS-GW; IS-BW; IS-BR; 9x LoC; 2x LoS',
  },
}, {
  pin: 55591,
  name: '1-2 LCM Rachel Drakon',
  activity: {
    communication: 'Discord',
    flight: '',
    other: '',
    awards: '',
  },
}, {
  pin: 55783,
  name: '1-3 LT Neko',
  activity: {
    communication: 'Daily check-ins',
    flight: 'None',
    other: 'Work on three art entries for RtF; RtF graphic competition #5',
    awards: '',
  },
}, {
  pin: 55785,
  name: '1-4 LT Iam Thinking',
  activity: {
    communication: 'Daily check-ins',
    flight: '4 EABF2 PvP matches; EH Shootout participation',
    other: 'Puzzle for RtF Competition #4;',
    awards: '4x LoC',
  },
}, {
  pin: 55825,
  name: '2-1 LT Marek Ny`Irfa',
  activity: {
    communication: 'Email, Discord',
    flight: 'XW-CD 1; XW-CAB 1; XW-FCHG 1; XW-IW 1, 9, 10, 11, 12, 13; XW-DB 1; XW-Free 1, 2, 3, 4, 5, 6, 7, 8, 9, 10; XWA-TC 1, 2, 3, 4, 5, 6',
    other: 'Reviews for every battle and mission; updated uniform',
    awards: 'IS-GW, IS-SW',
  },
}, {
  pin: 6490,
  name: '2-2 CPT Hermann',
  activity: {
    communication: 'Discord',
    flight: 'BoP-TC 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21; XvT-TC 12, 13, 14; XWA-TC 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35; XWA-FREE 4, 8; XWA-FCHG 3, 4; XWA-IW 7, 8;',
    other: 'Updated uniform',
    awards: 'IS-GW, IS-BW',
  },
}, {
  pin: 6874,
  name: '2-3 LC Phalk Sturm',
  activity: {
    communication: 'Email, Discord',
    flight: 'TIE-TC 227, 232, 234, 235, 236, 237, 238, 239; TIE-IW 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17; XWA-IW 1, 2, 3, 4',
    other: 'Participated in RtF puzzle competition; reviews for most battles',
    awards: 'IS-SW',
  },
}, {
  pin: 8385,
  name: '3-2 LC Repulsor',
  activity: {
    communication: '',
    flight: '',
    other: '',
    awards: '',
  },
}, {
  pin: 12796,
  name: '3-3 GN Dunta Polo',
  activity: {
    communication: 'Discord',
    flight: '6 SC PvE matches',
    other: '',
    awards: '6x LoS',
  },
}, {
  pin: 55817,
  name: '3-4 SL Sat Nav',
  activity: {
    communication: '',
    flight: '',
    other: '',
    awards: '',
  },
}];

const competitions = [{
  id: '3156',
  name: 'Raise the Flag 2020',
  ends: '2020-09-30',
  units: 'Entire TC',
  highlight: true,
}, {
  id: '3163',
  name: 'Raise the Flag Bonus Competition #4: Graphics',
  ends: '2020-09-25',
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
            Silwar Naiilo sat behind his desk. He&apos;d already buried his newly issued comms
            device deep in the trashcan, but the ringing was endless. It was probably another
            mission report - or a &ldquo;Priority Communication&rdquo; from HA Dempsey. He had
            large shoes to fill - the last report, #10, was written by Zosite Konstyte Styles.
          </em>
        </p>

        <p>
          Shape up, pilots - we&apos;re one of the top squadrons in the fleet, and we have the
          capabilty of being
          <em>{' the '}</em>
          top squadron, so look lively. Raise the Flag is going well, and
          we have been jostling for the number one spot since the beginning. We&apos;re well
          within range of the number-one spot, largely thanks to the endeavors of CPT Hermann,
          LT Marek Ny`Irfa, and LC Phalk Sturm. Yous truly would have more points if not for all
          this beaurocratic paperwork...
        </p>

        <p>
          You&apos;ve likely seen my introductory email already, but just for redundancy, I am
          Colonel Silwar Naiilo. I&apos;ve had many roles throughout my career, from CMDR of
          Slayer Squadron, IWATS Professor, Internet Officer, COOA, and BTL in the Dark
          Brotherhood. I&apos;m in the EDT timezone (GMT-4 in summer, -5 in winter) and highly
          responsive in Discord and email should you need anything. My task as commander is to
          keep everyone active, informed, and safe; don&apos;t hesitate to come to me with any
          issues or feedback.
        </p>
      </Intro>

      <Orders missions={orders}>
        <p>
          This week&apos;s missions come directly from the Raise the Flag Singleplayer competition.
          Awards are based on percentage of the high score - so everyone should participate for
          points, but the higher score you get, the more we earn for the squadron.
        </p>
        <p>
          We&apos;re extremely close to winning RtF, so every point counts!
        </p>
      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
        I&apos;m proud of everything this squadron has accomplished, and especially grateful for
        all the work that GN Dunta Polo, our previous commander, has done. The ISD-II Challenge
        should be proud to have such an accomplished squadron. Keep up the great work, and you
        will all see the rewards of your dedication soon.
      </Closing>

      <Footer />
    </>
  );
}

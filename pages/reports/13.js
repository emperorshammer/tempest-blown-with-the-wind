import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
import Citations from '../../components/citations';
import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';
import { ranks } from '../../components/ranks';
import { medals } from '../../components/medals';

const reportNumber = 12;
const startDate = '2020-09-27';
const endDate = '2020-10-03';
const submissionDate = '2020-10-04';
const citationsChange = '+7';
const citations = [
  'TIE-TC 1',
  'TIE-TC 10',
  'TIE-TC 12',
  'TIE-TC 16',
  'TIE-TC 19',
  'TIE-TC 28',
  'TIE-TC 30',
  'TIE-TC 246',
];

const orders = [{
  name: 'TIE-TC 202',
  id: 893,
  title: 'A Wormhole Too Far',
}, {
  name: 'XvT-TC 41',
  id: 786,
  title: 'More Power Part I',
}, {
  name: 'XWA-TC 12',
  id: 483,
  title: 'Imperium Deception',
}];

const activity = [{
  pin: 12630,
  position: '1-1',
  name: 'Silwar Naiilo',
  rank: ranks.COL,
  medals: [{
    medal: medals.LOC,
    qty: 16,
  }, {
    medal: medals.MOC_SOC,
  }],
  activity: {
    communication: 'Email, discord',
    flight: 'Battlefront PvP; Dozens of Squadrons PvP matches',
    other: '',
  },
}, {
  pin: 55591,
  position: '1-2',
  name: 'Rachel Drakon',
  rank: ranks.LCM,
  medals: [{ medal: medals.MOC_BOC }],
  activity: {
    communication: '',
    flight: '',
    other: '',
  },
  notes: 'Lots of trivia and puzzles this month, and finally awarded an MoC from August.',
}, {
  pin: 55783,
  position: '1-3',
  name: 'Neko',
  rank: ranks.LT,
  medals: [{ medal: medals.ISM }],
  activity: {
    communication: 'Personal check-ins',
    flight: 'Squadrons PvE',
    other: '',
  },
  notes: 'She is ooking forward to Squadrons PvP. Start thinking about taking the TCCORE IWATS!',
}, {
  pin: 55785,
  position: '1-4',
  name: 'Iam Thinking',
  rank: ranks.LT,
  medals: [{ medal: medals.ISM }],
  activity: {
    communication: 'Personal check-ins',
    flight: 'Squadrons PvP',
    other: '',
  },
  notes: 'He is also looking forward to Squadrons PvP. Start thinking about taking the TCCORE IWATS!',
}, {
  pin: 55825,
  position: '2-1',
  name: 'Marek Ny`Irfa',
  rank: ranks.LCM,
  medals: [{ medal: medals.PC }, { medal: medals.MOC_BOC }],
  activity: {
    communication: 'Discord, email',
    flight: 'XWA-TC 36; XvT-TC 61; TIE-TC 138',
    other: 'Wrote the reviews for the battles flown; hints for XWA-TC 36; flight report',
  },
  notes: 'Congrats on the PC! Thanks for your weekly flight reports.',
}, {
  pin: 6490,
  position: '2-2',
  name: 'Hermann',
  rank: ranks.CPT,
  medals: [{ medal: medals.SS }, { medal: medals.MOC_BOC }],
  activity: {
    communication: 'Discord, email',
    flight: 'XvT-TC 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 61; BoP-FCHG 1, 2, 3; BoP-ID 1; BoP-IW 2, 3; XWA-CAB 1, 4, 5; XWA-TC 36, 38, 39, 40, 41; TIE-TC 136, 138',
    other: '',
  },
  notes: 'One of the most active pilots in the TC. Fantastic work, Hermann, and congrats on the SS.',
}, {
  pin: 4607,
  position: '2-3',
  name: 'Richlet',
  rank: ranks.LCM,
  medals: [],
  activity: {
    communication: 'Discord',
    flight: '',
    other: '',
  },
  notes: 'Welcome to Tempest Squadron!',
}, {
  pin: 1968,
  position: '2-4',
  name: 'Kalve Ryder',
  rank: ranks.CPT,
  medals: [{ medal: medals.IS_BR }],
  activity: {
    communication: 'Discord, email',
    flight: 'Squadrons PvP, Squadrons PvE',
    other: 'Squadrons HOTAS help; graphics submissions; Discord emoji',
  },
  notes: 'Already a very active first few weeks (back, anyways.)',
}, {
  pin: 6874,
  position: '3-1',
  name: 'Phalk Sturm',
  rank: ranks.LC,
  medals: [{
    medal: medals.BS,
  }, {
    medal: medals.IS_BW,
  }, {
    medal: medals.MOC_BOC,
  }],
  activity: {
    communication: 'Discord, email',
    flight: 'XWA-CAB 2, 3, 4; XWA-DB 2, 6; XWA-TC 21, 30, 36, 47; XWA-IW 7; TIE-TC 138, 212; XWA-ID 1, XWA-FCHG 1, 3, 4',
    other: 'Uniform update; Trivia for the Challenged',
  },
  notes: 'Transferred to 3-1 FL. Thanks, congrats on the BS, and keep up the good work and flight reports!',
}, {
  pin: 8385,
  position: '3-2',
  name: 'Repulsor',
  rank: ranks.LC,
  medals: [],
  activity: {
    communication: '',
    flight: '',
    other: '',
  },
  notes: 'RSV transfer requested for LC Repulsor, who has had a busy year. Come back soon!',
}, {
  pin: 12796,
  position: '3-3',
  name: 'Dunta Polo',
  rank: ranks.GN,
  medals: [{ qty: 5, medal: medals.LOS }],
  activity: {
    communication: 'Email',
    flight: '5 SC PvE matches',
    other: '',
  },
  notes: 'Almost daily LoSes! Keep it up, GN Polo.',
}, {
  pin: 55817,
  position: '3-4',
  name: 'Sat Nav',
  rank: ranks.LT,
  medals: [],
  activity: {
    communication: '',
    flight: '',
    other: '',
  },
  notes: 'How are things, LT? Let me know if you have had any more luck with XvT or XWA! Start thinking about taking the TCCORE IWATS.',
}];

const competitions = [{
  id: '3167',
  name: 'Art for the Riders on the Storm',
  ends: '2020-10-21',
  units: 'Entire TC',
  highlight: true,
}, {
  id: '3176',
  name: 'Cockpit Flair Competition',
  ends: '2020-11-01',
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
            Silwar
          </em>
        </p>

        <p>
          Yo
        </p>
      </Intro>

      <Orders missions={orders}>
        <p>
          This week&apos;s orders are based on citations which we are close to
          winning, as will typically be our theme - one from each platform.
          Besides these missions, anyone with Squadrons is ordered to hit those
          training simulators hard!
        </p>
      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
        <p>
          You may have noticed an update to the report format - as time goes on, this will
          evolve and hopefully contain even more useful information! This now better highlights
          awarded medals and adds a notes section for pilots. Report&apos;s done, time to get back
          to Squadrons.
        </p>
      </Closing>

      <Footer />
    </>
  );
}

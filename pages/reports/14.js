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

const reportNumber = 14;
const startDate = '2020-10-04';
const endDate = '2020-10-10';
const submissionDate = '2020-10-14';
const citationsChange = '-8';
const citations = [
];

const orders = [{
  name: 'TIE-TC 121',
  id: 262,
  title: 'Battle of Principles',
}, {
  name: 'XvT-TC 42',
  id: 818,
  title: 'More Power Part II',
}, {
  name: 'XWA-TC 26',
  id: 657,
  title: 'Experimental Tie Evaluation',
}];

const activity = [{
  pin: 12630,
  position: '1-1',
  name: 'Silwar Naiilo',
  rank: ranks.COL,
  medals: [{
    medal: medals.LOC,
    qty: 39,
  }, {
    medal: medals.IS_BW,
    qty: 2,
  }, {
    medal: medals.IS_SW,
  }, {
    medal: medals.IS_GW,
  }],
  activity: {
    communication: 'Email, discord',
    flight: 'Squadrons PvP matches; shootout PvP event',
    other: 'Passed COE exam; upgraded combat rating (Officer 1st); new competition (#3178, Tempest Sqadron Orders)',
  },
}, {
  pin: 55591,
  position: '1-2',
  name: 'Rachel Drakon',
  rank: ranks.LCM,
  medals: [],
  activity: {
    communication: 'Email',
    flight: '',
    other: '',
  },
  notes: 'Discussed possibly starting a trivia competition',
}, {
  pin: 55783,
  position: '1-3',
  name: 'Neko',
  rank: ranks.LT,
  medals: [{ medal: medals.LOC, qty: 2 }],
  activity: {
    communication: 'Personal check-ins',
    flight: 'Squadrons PvP; shootout PvP event',
    other: '',
  },
  notes: 'Started with Squadrons, and played a few matches in the shootout. Nice work!',
}, {
  pin: 55785,
  position: '1-4',
  name: 'Iam Thinking',
  rank: ranks.LT,
  medals: [{ medal: medals.LOC, qty: 2 }],
  activity: {
    communication: 'Personal check-ins',
    flight: 'Squadrons PvP; shootout PvP event',
    other: '',
  },
  notes: 'Also began playing Squadrons and earned a few wins in the shootout.',
}, {
  pin: 55825,
  position: '2-1',
  name: 'Marek Ny`Irfa',
  rank: ranks.LCM,
  medals: [{ medal: medals.IS_BW, qty: 3 }, { medal: medals.IS_SW }],
  activity: {
    communication: 'Discord, email',
    flight: 'XWA-TC 13, 14, 15; High score on two XWA-TC 13 missions',
    other: 'Wrote reviews for XWA-TC 13, 14, 15, and 16; updated uniform',
  },
  notes: 'Congrats on the high score and the iron stars! Great work.',
}, {
  pin: 6490,
  position: '2-2',
  name: 'Hermann',
  rank: ranks.MAJ,
  medals: [{ medal: medals.IS_BW }, { medal: medals.IS_SW }, { medal: medals.IS_GW, qty: 2 }],
  activity: {
    communication: 'Discord, email',
    flight: 'TIE-TC 239, 244; XvT-FCHG 6; XvT-CAB 5; XvT-CD 2; XvT-DB 18; XWA-ID 1',
    other: 'Promotion from CPT to MAJ',
  },
  notes: 'Congratulations on the promotion and iron stars! Well-deserved. Plenty of flying as well.',
}, {
  pin: 4607,
  position: '2-3',
  name: 'Richlet',
  rank: ranks.LCM,
  medals: [],
  activity: {
    communication: 'Discord',
    flight: 'Singleplayer Squadrons games',
    other: '',
  },
  notes: 'Quiet week for LCM Richlet.',
}, {
  pin: 1968,
  position: '2-4',
  name: 'Kalve Ryder',
  rank: ranks.CPT,
  medals: [{ medal: medals.LOS, qty: 3 }, { medal: medals.LOC, qty: 1 }, { medal: medals.IS_SR }],
  activity: {
    communication: 'Discord, email',
    flight: 'Squadrons PvP, Squadrons PvE',
    other: '',
  },
  notes: 'Congrats on the IS-SR for your RtF graphic work!',
}, {
  pin: 6874,
  position: '3-1',
  name: 'Phalk Sturm',
  rank: ranks.LC,
  medals: [{
    medal: medals.IS_BW,
  }, {
    medal: medals.IS_SW,
  }],
  activity: {
    communication: 'Discord, email',
    flight: 'XWA-TC 1, 2; TIE-TC 212',
    other: 'Submitted reviews for XWA-TC 1, XWA-TC 2, XWA-CAB 5, and TIE-TC 212',
  },
  notes: 'A couple of new iron stars and several completed battles! Thanks for your review submissions.',
}, {
  pin: 55873,
  position: '3-2',
  name: 'Rhygaar',
  rank: ranks.LT,
  medals: [{
    medal: medals.LOC,
  }],
  activity: {
    communication: 'Discord',
    flight: 'Squadrons PvP',
    other: 'Joined Tempest; promoted to LT',
  },
  notes: 'Welcome to the TC, and congrats on your first LoC!',
}, {
  pin: 12796,
  position: '3-3',
  name: 'Dunta Polo',
  rank: ranks.GN,
  medals: [{ qty: 7, medal: medals.LOS }],
  activity: {
    communication: 'Discord',
    flight: '7 SC PvE matches',
    other: '',
  },
  notes: 'Another fistful of LoSs for GN Polo!',
}, {
  pin: 55817,
  position: '3-4',
  name: 'Sat Nav',
  rank: ranks.LT,
  medals: [],
  activity: {
    communication: 'Discord',
    flight: '',
    other: '',
  },
  notes: 'Fairly quiet from LT Sat Nav.',
}];

const competitions = [{
  id: '3178',
  name: 'Tempest Squadron Orders',
  ends: '2020-10-21',
  units: 'Entire TC',
  highlight: true,
  notes: 'Complete biweekly missions for iron stars every 2 weeks and at the end of the year!',
}, {
  id: '3167',
  name: 'Art for the Riders on the Storm',
  ends: '2020-10-21',
  units: 'Entire TC',
  highlight: true,
  notes: 'Create a new patch, banner, or both for Tempest Squadron.',
}, {
  id: '3185',
  name: 'TIE Corps Space Superiority 2020',
  ends: '2020-31-12',
  units: 'Entire TC',
  notes: 'Iron Stars for highest-scoring PvP pilots in Squadrons dogfights. Send your screenshots to AD Prower.',
}, {
  id: '3183',
  name: 'TIE Corps Capital Strike 2020 (PvP Fleet Battles)',
  ends: '2020-31-12',
  units: 'Entire TC',
  notes: 'Iron Stars for highest-scoring cap damage in Squadrons fleet battles. Send your screenshots to AD Prower.',
}, {
  id: '3184',
  name: 'TIE Corps Capital Strike vs AI 2020 (PvE)',
  ends: '2020-31-12',
  units: 'Entire TC',
  notes: 'Iron Stars for highest-scoring cap damage in Squadrons PvE fleet battles. Send your screenshots to AD Prower.',
}, {
  id: '3176',
  name: 'Cockpit Flair Competition',
  ends: '2020-11-01',
  units: 'Entire TC',
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
            COL Silwar Naiilo tried to add up the numbers on the bar tab, but
            they swam away whenever he focused too hard. Was it 10 or
            100 bottles of Chalquilla that HA Dempsey had donated to MAJ
            Hermann&apos;s promotion party? At any rate, the bar tab would be a
            problem for the new major; Silwar folded the bill, took a now-cold
            empanada from a tray, and stumbled back to his office.
          </em>
        </p>

        <p>
          The biggest news of the week is MAJ Hermann&apos;s long-awaited
          promotion, after eighteen years and thousands of missions.
          That&apos;s mind-bogglingly over the requirements, so I am glad the
          paperwork finally found its way to HA Dempsey&apos;s desk. We also
          gained a new pilot in LT Rhygaar, who has already earned his first
          LoCs and his promotion from SL to LT. Sadly, he replaces LC Repulsor.
        </p>

        <p>
          There is also a new competition running - Tempest Squadron Orders -
          where you can win an IS-BW every two weeks and an IS-SW or IS-GW at
          the end of the year. Simply fly the missions posted in each report,
          which will remain active for two weeks, and I will calculate the
          winners.
        </p>

        <p>
          Lastly, we have new orders from the TCCOM for TIE Corps in Battle:

          <ul>
            <li>
              <a href="https://tc.emperorshammer.org/download.php?id=243&type=info">
                TIE-TC battle 113: Raid on Casserine
              </a>
            </li>
            <li>
              <a href="https://tc.emperorshammer.org/download.php?id=1095&type=info">
                XvT-TC battle 89: Bubbas Beer, Bread and Message Board Bonanza!
              </a>
            </li>
            <li>
              <a href="https://tc.emperorshammer.org/download.php?id=1370&type=info">
                XWA-TC battle 58: Expansion
              </a>
            </li>
          </ul>
        </p>
      </Intro>

      <Orders missions={orders}>
        <p>
          This is the
          <strong>{' first '}</strong>
          week these orders are active. You
          will have until October 25 to finish these missions for the high
          score competition.
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
          Apologies for the late report - I have been making additional
          improvements to the WSR tool that I am building, and I got a little
          carried away working on that... instead of writing the WSR. Back to
          the usual cadence for next week.
        </p>
      </Closing>

      <Footer />
    </>
  );
}

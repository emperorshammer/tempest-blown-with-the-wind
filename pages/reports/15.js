import T from 'prop-types';

import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
import Citations from '../../components/citations';
import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 14;
const startDate = '2020-10-11';
const endDate = '2020-10-17';
const submissionDate = '2020-10-18';

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

const competitions = [{
  id: '3178',
  name: 'Tempest Squadron Orders',
  ends: '2020-10-21',
  units: 'Entire TC',
  highlight: true,
  notes: 'Complete biweekly missions for iron stars every 2 weeks and at the end of the year!',
}, {
  id: '3190',
  name: 'All I want for Life Day is my COMPOST Membership Card',
  ends: '2020-16-11',
  units: 'Entire TC',
  highlight: true,
  notes: 'Fly TIE-TC 244, Lord of the TIEs, and reach for the highest score you can get.',
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

const ACTIVITY = {
  // Silwar
  12630: {
    communication: 'Email, discord',
    flightActivity: 'Star Wars Squadrons PvP; Star Wars Squadrons PvE; weekly Shootout competition',
    otherActivity: 'Further work on the WSR tool. MoI for recruiting LT Rhygaar.',
  },
  // Rachel
  55591: {
    communication: 'Email',
    notes: 'Quiet week for LCM Rachel Drakon.',
  },
  // Neko
  55783: {
    communication: 'Personal check-ins',
    flightActivity: 'Star Wars Squadrons PvP; Star Wars Squadrons PvE; Weekly shootout competition',
    notes: 'Has some LoCs stuck in the COO\'s miles-long queue. Enough Shootout missions for an incoming IS, so be on the lookout!',
  },
  // Iam
  55785: {
    communication: 'Personal check-ins',
    flightActivity: 'Star Wars Squadrons PvP; Star Wars Squadrons PvE; Weekly shootout competition',
    notes: 'Has some LoCs stuck in the COO\'s miles-long queue. Enough Shootout missions for an incoming IS. Congrats on the ISM!',
  },

  // Marek
  55825: {
    communication: 'Email, discord',
    flightActivity: 'XvT and XWA missions for TCiB and Squadron Orders, and a new combat rating to show for it.',
    notes: 'A Silver Star for an impressive September performance, and six more iron stars this week for his contributions to battle reviews.',
  },
  // Hermann
  6490: {
    communication: 'Email, discord',
    flightActivity: 'TIE and XvT battles, with some struggles with bugs in XvT-89.',
    otherActivity: 'Submitted bug reports for XvT-89',
    notes: 'Ran into some XvT bugs. Thanks for working with the TAC, hopefull we get a fix in soon! Your MSE medal is still being forged.',
  },
  // Richlet
  4607: {
    communication: 'Discord',
    flightActivity: 'Squadrons singleplayer PvE',
    notes: 'Very active on discord! Looking forward to getting some Squadrons games in.',
  },
  // Kalve
  1968: {
    communication: 'Email, discord',
    flightActivity: 'Squadrons PvE, Squadrons PvP',
    notes: 'Eight victories submitted, some stuck in the COO queue - nice job! Congrats on the ISM for September.',
  },

  // Phalk
  6874: {
    communication: 'Email, discord',
    flightActivity: 'TIE and XWA battles for squadron orders and TCiB',
    otherActivity: 'Participated in Triva for the challenged. Submitted a patch for the Firebird Squadron.',
    notes: 'Active in comms and a reliable flight leader - not to mention another Silver Star earned in Tempest Squadron! Congrats, LC.',
  },
  // Rhygaar
  55873: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP matches',
    notes: 'Congrats on another Squadrons victory and Loc!',
  },
  // Polo
  12796: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE matches',
    notes: 'Another six LoSs for the general, and congrats on the ISM for September.',
  },
  // Sat Nav
  55817: {
    communication: 'Discord',
    notes: 'Fairly quiet, but responsive on Discord.',
  },
};

function appendActivityData(activityData, additionalActivityData) {
  return activityData.map((ad) => {
    if (additionalActivityData[ad.pin]) {
      return { ...ad, ...additionalActivityData[ad.pin] };
    }

    return ad;
  });
}

export default function Report({ activityData }) {
  if (activityData === null) {
    return 'Loading...';
  }

  const activity = appendActivityData(activityData, ACTIVITY);

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
            A white curl of smoke rose from the end of a cigar pressed into an ashtray on
            Colonel Silwar Naiilo&apos;s desk, momentarily forgotten as he sipped a pale-yellow
            glass of &ldquo;Whisklenge&rdquo;, the latest advancement in Challenge drinking
            technology. It only barely reminded one of paint thinner. The Imperial Holonet terminal
            blinked to life as Silwar made yet another pass at attempting to decipher the IO&apos;s
            systems. This time, an hour would go by before the terminal shut itself off and
            Admiral Jerrar would send agents on a rampage through the crew quarters on the
            Challenge...
          </em>
        </p>

        <p>
          This week sees a number of MSE merit medals go out, and a few still being processed.
          We have seen Silver Stars, ISMs, and a few surprises that are still being worked on.
          Activity in Squadrons has picked up as well, with over 33 LoCs and LoSs distributed, and
          TIE, XvT, and XWA battles ongoing. Good luck with the TCCOM&apos;s mad attempt at a
          competition, with Lord of the TIEs!
        </p>

        <p>Just a reminder of the TIE Corps in Battle orders:</p>

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
      </Intro>

      <Orders missions={orders}>
        <p>
          This is the
          <strong>{' second '}</strong>
          week these orders are active. You
          will have until October 25 to finish these missions for the high
          score competition.
        </p>
      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Closing>
        <p>
          This one is on time, and now with even more pilot activity data. I will now highilght
          significant activity rather than just lumping everything under
          <em>{' Other. '}</em>
          It has been another active and victorious week for Tempest!
        </p>
      </Closing>

      <Footer />
    </>
  );
}

Report.propTypes = {
  activityData: T.any,
};

Report.defaultProps = {
  activityData: null,
};

export async function getStaticProps() {
  const activityData = await loadActivityData(config.squadronId, startDate, endDate);

  return {
    props: { activityData }, // will be passed to the page component as props
  };
}

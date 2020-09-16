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
const squadronId = 45;
const startDate = '2020-09-13';
const endDate = '2020-09-19';
const submissionDate = '2020-09-20';
const citations = ['TIE-TC246', 'XWA-TC52'];
const citationsChange = '+0';

const orders = [{
  name: 'TIE-TC70',
  id: 68,
  title: 'Supply Run',
}];

const activity = [{
  pin: '12630',
  name: 'COL Silwar Naiilo',
  activity: {
    communication: 'Email, discord',
    flight: 'XvT PVE; XvT PVP; EABF2 PVP; participation in TC Shootout; XWA-TC #52; XWA-TC #33; XWA-Free #157; XWA-TC #21; XWA-Free #38; XWA-Free #40; XWA-Free #145',
    other: 'Fiction for RtF competition #1; Puzzle for RtF competition #2; EABF2 for RtF competition #3; SM/5 IU course; reviews for completed battles; updated uniform (pending)',
    awards: 'Bronze Star; 19 LoCs; 4 LoSs; FCHG upgrade (Lancer -> Hussar)',
  },
}, {
  pin: '12630',
  name: 'LT Neko',
  activity: {
    communication: 'Daily check-ins',
    flight: 'TIE Free #5',
    other: 'Work on two art entries for RtF',
    awards: '',
  },
}, {
  pin: '12630',
  name: 'LT Iam Thinking',
  activity: {
    communication: 'Daily check-ins',
    flight: 'EABF2 PVP; participation in TC Shootout',
    other: 'Puzzle for RtF Competition #2; EABF2 for RtF competition #3',
    awards: '3 LoCs (pending) from Sep 12',
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
}, {
  id: '3161',
  name: 'Shakespearean-esque lyrics for modern songs',
  ends: '2020-10-31',
  units: 'Entire TC',
}, {
  id: '3160',
  name: 'Raise the Flag Bonus Competition #3: Multiplayer',
  ends: '2020-09-18',
  units: 'Entire TC',
}, {
  id: '3154',
  name: 'The TIE Pilot Podcast',
  ends: '2021-12-31',
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis te
        mpor elementum. Vivamus faucibus nisl ac lorem ullamcorper, id fringilla elit el
        ementum. Sed eu ultrices elit. Duis nec scelerisque turpis, et dignissim risus.
        Aliquam vel arcu sit amet nisl feugiat pellentesque. Maecenas eu odio sed lacus
        dignissim sodales non a sapien. Donec lobortis sem velit, id luctus dolor dictum
        sit amet. Vivamus eu mauris semper, tempor lorem ac, tempus diam. Morbi aliquam
        quam eu dignissim malesuada. Morbi nec leo ac elit aliquam posuere ut nec enim.
        Donec ut ligula eget erat mattis blandit. Orci varius natoque penatibus et magn
        is dis parturient montes, nascetur ridiculus mus. Proin vel velit tincidunt, orn
        are libero sed, faucibus sapien. Maecenas facilisis tellus a faucibus porta. Nul
        lam eu eros nec massa dignissim fringilla non sit amet arcu. Sed dignissim gravi
        da ex id luctus.
      </Intro>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
        squadronId={squadronId}
      />

      <Orders missions={orders}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis te
        mpor elementum. Vivamus faucibus nisl ac lorem ullamcorper, id fringilla elit el
        ementum.
      </Orders>

      <Closing>
        Morbi nec leo ac elit aliquam posuere ut nec enim.
        Donec ut ligula eget erat mattis blandit. Orci varius natoque penatibus et magn
        is dis parturient montes, nascetur ridiculus mus. Proin vel velit tincidunt, orn
        are libero sed, faucibus sapien. Maecenas facilisis tellus a faucibus porta. Nul
        lam eu eros nec massa dignissim fringilla non sit amet arcu. Sed dignissim gravi
        da ex id luctus.
      </Closing>

      <Footer />
    </>
  );
}

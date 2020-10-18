import T from 'prop-types';
import { omit } from 'lodash/object';
import { rankImages, ranks } from './ranks';
import MedalCase from './medalCase';
import activityItem from './activityItem';
import styles from './styles';

export default function PilotActivity({
  pin,
  name,
  rank,
  flight,
  flightPosition,
  activity,
  communication,
  flightActivity,
  otherActivity,
  notes,
}) {
  const RankImage = rankImages[rank];
  const { MEDALS_AWARDED: awardedMedals } = activity;

  return (
    <div>
      <RankImage />

      <a
        href={`https://tc.emperorshammer.org/record.php?pin=${pin}&type=profile`}
        target="_blank"
        rel="noreferrer"
        style={styles.a}
      >
        <strong style={styles.h4}>
          {`${flight}-${flightPosition} ${ranks[rank].toUpperCase()} ${name}`}
        </strong>
      </a>

      <dl style={{ marginTop: '0', marginBottom: '1em' }}>
        <dt style={styles.dt}>Communication:</dt>
        <dd style={styles.dd}>{communication || 'None'}</dd>

        {flightActivity ? (
          <>
            <dt style={styles.dt}>Flight Activity:</dt>
            <dd style={styles.dd}>{flightActivity}</dd>
          </>
        ) : null}

        { Object.keys(omit(activity, 'MEDALS_AWARDED')).map((activityName) => (
          activityItem[activityName]
            ? activityItem[activityName](activity[activityName])
            : null
        ))}

        {otherActivity ? (
          <>
            <dt style={styles.dt}>Other:</dt>
            <dd style={styles.dd}>{otherActivity}</dd>
          </>
        ) : null}

        {notes ? (
          <>
            <dt style={styles.dt}>Notes:</dt>
            <dd style={styles.dd}>{notes}</dd>
          </>
        ) : null}

        {awardedMedals ? (
          <MedalCase medals={awardedMedals} />
        ) : null }
      </dl>
    </div>
  );
}

PilotActivity.propTypes = {
  pin: T.string.isRequired,
  name: T.string.isRequired,
  flight: T.number.isRequired,
  flightPosition: T.number.isRequired,
  rank: T.oneOf(Object.keys(ranks)).isRequired,
  activity: T.any.isRequired,
  flightActivity: T.string,
  communication: T.string,
  notes: T.string,
  otherActivity: T.string,
};

PilotActivity.defaultProps = {
  flightActivity: null,
  notes: null,
  otherActivity: null,
  communication: null,
};

import T from 'prop-types';
import { rankImages, ranks } from './ranks';
import { medals } from './medals';
import MedalCase from './medalCase';
import styles from './styles';

export default function ActivityItem({
  pin,
  name,
  activity,
  position,
  rank,
  notes,
  medals: awardedMedals,
}) {
  const RankImage = rankImages[rank];

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
          {`${position} ${rank.toUpperCase()} ${name}`}
        </strong>
      </a>

      <dl style={{ marginTop: '0', marginBottom: '1em' }}>
        <dt style={styles.dt}>Communication:</dt>
        <dd style={styles.dd}>{activity.communication || 'None'}</dd>

        <dt style={styles.dt}>Flight:</dt>
        <dd style={styles.dd}>{activity.flight || 'None'}</dd>

        <dt style={styles.dt}>Other:</dt>
        <dd style={styles.dd}>{activity.other || 'None'}</dd>

        {notes ? (
          <>
            <dt style={styles.dt}>Notes:</dt>
            <dd style={styles.dd}>{notes || 'None'}</dd>
          </>
        ) : null}

        {awardedMedals && awardedMedals.length ? (
          <MedalCase medals={awardedMedals} />
        ) : null }
      </dl>
    </div>
  );
}

ActivityItem.propTypes = {
  pin: T.number.isRequired,
  name: T.string.isRequired,
  position: T.string.isRequired,
  rank: T.oneOf(Object.values(ranks)).isRequired,
  medals: T.arrayOf(T.shape({
    medal: T.oneOf(Object.values(medals)).isRequired,
    qty: T.number.isRequired,
  })).isRequired,
  activity: T.shape({
    communication: T.string.isRequired,
    flight: T.string.isRequired,
    other: T.string.isRequired,
  }).isRequired,
  notes: T.string,
};

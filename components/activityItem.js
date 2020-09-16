import T from 'prop-types';
import styles from './styles';

export default function ActivityItem({
  pin,
  name,
  activity,
}) {
  return (
    <div>
      <a
        href={`https://tc.emperorshammer.org/record.php?pin=${pin}&type=profile`}
        target="_blank"
        rel="noreferrer"
        style={styles.a}
      >
        <strong>{name}</strong>
      </a>

      <dl style={{ marginTop: '0', marginBottom: '1em' }}>
        <dt style={styles.dt}>Communication:</dt>
        <dd style={styles.dd}>{activity.communication || 'none'}</dd>

        <dt style={styles.dt}>Flight:</dt>
        <dd style={styles.dd}>{activity.flight || 'none'}</dd>

        <dt style={styles.dt}>Other:</dt>
        <dd style={styles.dd}>{activity.other || 'none'}</dd>

        <dt style={styles.dt}>Awards:</dt>
        <dd style={styles.dd}>{activity.awards || 'none'}</dd>
      </dl>
    </div>
  );
}

ActivityItem.propTypes = {
  pin: T.string.isRequired,
  name: T.string.isRequired,
  activity: T.shape({
    communication: T.string.isRequired,
    flight: T.string.isRequired,
    other: T.string.isRequired,
    awards: T.string.isRequired,
  }).isRequired,
};

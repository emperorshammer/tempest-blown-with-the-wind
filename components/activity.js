import T from 'prop-types';
import Card from './card';
import ActivityItem from './activityItem';
import styles from './styles';

/* eslint react/jsx-props-no-spreading: 0 */

export default function Activity({ activity }) {
  return (
    <Card>
      <h5 style={styles.h5}>
        Squadron Activity
      </h5>

      <img
        alt="Tempest squadron patch"
        src="https://tc.emperorshammer.org/images/patches/46375Tempest_patch_roster.png"
        height="150"
        width="150"
        style={{ float: 'right' }}
      />

      { activity.map((a) => <ActivityItem {...a} key={a.pin} />)}
    </Card>
  );
}

Activity.propTypes = {
  activity: T.arrayOf(T.shape(ActivityItem.propTypes)).isRequired,
};

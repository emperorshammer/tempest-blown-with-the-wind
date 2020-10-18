import T from 'prop-types';
import Card from './card';
import PilotActivity from './pilotActivity';
import styles from './styles';
import config from '../config';

/* eslint react/jsx-props-no-spreading: 0 */

export default function Activity({ activity }) {
  return (
    <Card>
      <h5 style={styles.h5}>
        Squadron Activity
      </h5>

      <img
        alt={`${config.squadron} squadron patch`}
        src={config.squadronPatch.url}
        height={config.squadronPatch.height}
        width={config.squadronPatch.width}
        style={{ float: 'right' }}
      />

      { activity.map((a) => <PilotActivity {...a} key={a.pin} />)}
    </Card>
  );
}

Activity.propTypes = {
  activity: T.arrayOf(T.shape(PilotActivity.propTypes)).isRequired,
};

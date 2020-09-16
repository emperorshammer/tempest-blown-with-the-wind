import T from 'prop-types';
import Card from './card';
import styles from './styles';
import config from '../config';

export default function Citations({ citations, citationsChange }) {
  return (
    <Card>
      <h5 style={styles.h5}>
        {`Squadron Citations: ${citations.length} (${citationsChange})`}
      </h5>

      <ul>
        {citations.map((c) => <li key={c}>{c}</li>) }
      </ul>

      <p style={styles.p}>
        <a
          href={`https://tc.emperorshammer.org/battleboard.php?sqn=${config.squadronId}`}
          target="_blank"
          rel="noreferrer"
          style={styles.a}
        >
          View Squadron Battleboard
        </a>
      </p>
    </Card>
  );
}

Citations.propTypes = {
  citations: T.arrayOf(T.string).isRequired,
  citationsChange: T.string,
};

Citations.defaultProps = {
  citationsChange: '+0',
};

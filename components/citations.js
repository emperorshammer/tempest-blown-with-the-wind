import T from 'prop-types';
import Card from './card';
import styles from './styles';

export default function Citations({ citations, citationsChange }) {
  return (
    <Card>
      <h5 style={styles.h5}>
        {`Squadron Citations: ${citations.length} (${citationsChange})`}
      </h5>

      <ul>
        {citations.map((c) => <li>{c}</li>) }
      </ul>
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

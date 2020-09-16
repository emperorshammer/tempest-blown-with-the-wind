import T from 'prop-types';
import Card from './card';
import styles from './styles';

// TODO: locally host banner image

export default function Heading({ reportNumber }) {
  return (
    <Card>
      <center>
        <h3 style={styles.h3}>ISD Challenge</h3>
        <h1 style={styles.h1}>Tempest Squadron</h1>

        <h2
          style={{
            ...styles.h2,
            marginTop: '1em',
            marginBottom: '1em',
            fontStyle: 'italic',
          }}
        >
          Blown With the Wind
          {` #${reportNumber}`}
        </h2>

        <img
          alt="Tempest Banner"
          style={{ width: '100%' }}
          src="https://tc.emperorshammer.org/images/banners/35414Tempest%20Banner.png"
        />
      </center>
    </Card>
  );
}

Heading.propTypes = {
  reportNumber: T.number.isRequired,
};

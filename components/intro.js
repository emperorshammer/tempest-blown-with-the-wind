import T from 'prop-types';
import Card from './card';
import styles from './styles';

export default function Intro({ children }) {
  return (
    <Card>
      <h5 style={{ ...styles.h5, marginBottom: '1em' }}>
        From the Desk of Silwar Naiilo
      </h5>

      <a
        href="https://tc.emperorshammer.org/record.php?pin=12630&type=profile"
        target="_blank"
        rel="noreferrer"
      >
        <img
          style={{ width: '100%', maxWidth: '200px', float: 'right' }}
          src="/uniform.png"
          alt="The uniform of Silwar Naiilo, #12630"
        />
      </a>

      {children}
    </Card>
  );
}

Intro.propTypes = {
  children: T.node.isRequired,
};

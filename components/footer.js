import T from 'prop-types';
import Card from './card';
import styles from './styles';

export default function Footer({ children }) {
  return (
    <Card style={{ borderBottom: 0 }}>
      <h5 style={{ ...styles.h5, marginBottom: '1em' }}>
        Resources
      </h5>

      <p>
        <a
          href="https://discord.gg/MSxYV8a"
          target="_blank"
          rel="noreferrer"
        >
          TC Discord
        </a>

        {' - '}

        <a
          href="https://tc.emperorshammer.org/roster.php?type=sqn&id=45"
          target="_blank"
          rel="noreferrer"
        >
          Squadron Page
        </a>

        {' - '}

        <a
          href="mailto:ehsilwar@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email the CMDR
        </a>

        {' - '}

        <a
          href="https://tc.emperorshammer.org/admin.php"
          target="_blank"
          rel="noreferrer"
        >
          TC Personnel Administration
        </a>

        {' - '}

        <a
          href="https://tc.emperorshammer.org/battlecenter.php"
          target="_blank"
          rel="noreferrer"
        >
          Battle Center
        </a>

        {' - '}

        <a
          href="https://tc.emperorshammer.org/showreport.php?id=1&nid=45"
          target="_blank"
          rel="noreferrer"
        >
          Report Archive
        </a>
      </p>

      {children}
    </Card>
  );
}

Footer.propTypes = {
  children: T.node,
};

Footer.defaultProps = {
  children: null,
};

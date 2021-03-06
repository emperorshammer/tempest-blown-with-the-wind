import T from 'prop-types';
import styles from './styles';

export default function CompetitionItem({
  id,
  name,
  ends,
  units,
  highlight,
  notes,
}) {
  return (
    <div
      style={{
        ...(highlight ? styles.highlighted : {}),
        marginBottom: '0.5em',
        paddingBottom: '0.5em',
      }}
    >
      <a
        href={`https://tc.emperorshammer.org/competitions.php?id=${id}`}
        target="_blank"
        rel="noreferrer"
        style={{
          ...styles.a,
          ...(highlight ? styles.highlightedLink : {}),
        }}
      >
        <strong>{name}</strong>
      </a>

      { ` runs until ${ends} for the ${units}.`}

      {notes ? <p>{notes}</p> : null}
    </div>
  );
}

CompetitionItem.propTypes = {
  id: T.string.isRequired,
  name: T.string.isRequired,
  ends: T.string.isRequired,
  units: T.string.isRequired,
  highlight: T.bool,
};

CompetitionItem.defaultProps = {
  highlight: false,
};

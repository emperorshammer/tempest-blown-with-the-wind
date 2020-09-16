import T from 'prop-types';
import Card from './card';
import styles from './styles';
import config from '../config';

export default function Dates({
  startDate,
  endDate,
  submissionDate,
  to,
  from,
}) {
  return (
    <Card>
      <p styles={styles.p}>
        <strong>To:</strong>
        {` ${to}`}

        <br />

        <strong>From:</strong>
        {` ${from}`}

        <br />

        <strong>Submitted on:</strong>
        {` ${submissionDate}`}

        <br />

        <strong>For Dates:</strong>
        {` ${startDate} - ${endDate}`}
      </p>
    </Card>
  );
}

Dates.propTypes = {
  to: T.string,
  from: T.string,
  startDate: T.string.isRequired,
  endDate: T.string.isRequired,
  submissionDate: T.string.isRequired,
};

Dates.defaultProps = {
  to: config.com.title,
  from: config.cmdr.title,
};

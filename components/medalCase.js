import T from 'prop-types';
import { medals, medalImages } from './medals';

export default function MedalCase({ medals: awardedMedals }) {
  const string = awardedMedals.map(({ medal, qty = 1 }) => (
    `${qty || 1}x ${medal.toUpperCase()}`
  ));

  const medalImageList = awardedMedals.map(({ medal }) => {
    const MedalImage = medalImages[medal];
    return (
      <MedalImage key={medal} />
    );
  });

  return (
    <div>
      <strong>{'Medals Awarded: '}</strong>
      {string.join('; ')}
      <br />
      {medalImageList}
    </div>
  );
}

MedalCase.propTypes = {
  medals: T.arrayOf(T.shape({
    medal: T.oneOf(Object.values(medals)).isRequired,
    qty: T.number,
  })).isRequired,
};

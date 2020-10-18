import T from 'prop-types';
import { medals, medalImages } from './medals';

export default function MedalCase({ medals: awardedMedals }) {
  const string = Object.keys(awardedMedals).map((medal) => (
    `${awardedMedals[medal]}x ${medal}`
  ));

  const medalImageList = Object.keys(awardedMedals).map((medal) => {
    const MedalImage = medalImages[medal.toLowerCase()];

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
  medals: T.any.isRequired,
};

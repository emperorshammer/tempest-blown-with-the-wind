import styles from './styles';

export const ranks = {
  GN: 'gn',
  COL: 'col',
  LC: 'lc',
  MAJ: 'maj',
  CPT: 'cpt',
  CM: 'cm',
  LCM: 'lcm',
  LT: 'lt',
  SL: 'sl',
};

export const rankImages = Object.values(ranks).reduce((acc, rank) => ({
  ...acc,
  [rank]: () => (
    <img
      src={`https://tempest-blown-with-the-wind.vercel.app/rankBadges/${rank}.png`}
      alt={`Badge icon for ${rank}`}
      style={styles.rankBadge}
    />
  ),
}), {});

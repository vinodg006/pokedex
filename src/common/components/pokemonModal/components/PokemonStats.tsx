import { HStack, Image, VStack, Text, StackProps } from '@chakra-ui/react';

import { IPokemonStatsItem } from '../../../../gateway/pokemonsApi';
import AttackIcon from '../../../images/attack.svg';
import DefenseIcon from '../../../images/defense.svg';
import HPIcon from '../../../images/hp.svg';
import SpecialAttackIcon from '../../../images/specialAttack.svg';
import SpecialDefenseIcon from '../../../images/specialDefense.svg';
import SpeedIcon from '../../../images/speed.svg';

interface IPokemonStats {
  stats: IPokemonStatsItem[];
}

export type statNameType =
  | 'attack'
  | 'defense'
  | 'hp'
  | 'speed'
  | 'special-defense'
  | 'special-attack';

export const statImages = {
  attack: AttackIcon,
  defense: DefenseIcon,
  hp: HPIcon,
  speed: SpeedIcon,
  'special-defense': SpecialDefenseIcon,
  'special-attack': SpecialAttackIcon,
};

export const statNames = {
  attack: 'Attack',
  defense: 'Defense',
  hp: 'HP',
  speed: 'Speed',
  'special-defense': 'Special-defense',
  'special-attack': 'Special-attack',
};

export const PokemonStats = ({ stats }: IPokemonStats) => {
  return (
    <VStack {...VStackStyles}>
      {stats.map(({ base_stat, stat }) => (
        <HStack {...HStackStyles} key={stat.name}>
          <Image src={statImages[stat.name as statNameType]} />
          <HStack {...HStackStyles}>
            <Text as="h6" textStyle="h6">
              {statNames[stat.name as statNameType]}
            </Text>
            <Text as="h4" textStyle="h4">
              {base_stat}
            </Text>
          </HStack>
        </HStack>
      ))}
    </VStack>
  );
};

const HStackStyles: StackProps = {
  width: '100%',
  align: 'center',
  justify: 'space-between',
  gap: '21px',
};

const VStackStyles: StackProps = {
  m: '28px 0',
  gap: '10px',
};

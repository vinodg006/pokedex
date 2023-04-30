import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  StackProps,
  Text,
  HStack,
  VStack,
  ButtonProps,
  TextProps,
  Center,
} from '@chakra-ui/react';

import { IPokemon } from '../../../gateway/pokemonsApi';
import { PokemonImage } from '../pokemonCard/components/PokemonImage';
import Stars from '../../images/stars.svg';
import { PokemonStats } from './components/PokemonStats';

interface IPokemonModal {
  pokemon: IPokemon;
  onClose: () => void;
}

export const PokemonModal = ({ pokemon, onClose }: IPokemonModal) => {
  const { name, sprites, height, weight, abilities, stats } = pokemon;
  const imageUrl = sprites?.front_default || '';

  return (
    <Modal isOpen isCentered onClose={onClose} variant="narrow">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody p="28px">
          <Center>
            <PokemonImage url={imageUrl} />
          </Center>
          <Text textStyle="h1" as="h1" mt="18px">
            {name}
          </Text>
          <PokemonStats stats={stats} />
          <VStack {...highlightedBoxStyles}>
            <HStack {...HStackStyles}>
              <Text as="h5" textStyle="h5">
                height
              </Text>
              <Text as="h4" textStyle="h4">
                {height}
              </Text>
            </HStack>
            <HStack {...HStackStyles}>
              <Text as="h5" textStyle="h5">
                weight
              </Text>
              <Text as="h4" textStyle="h4">
                {weight}
              </Text>
            </HStack>
          </VStack>
          <VStack {...boxWithIconStyles}>
            <Text {...TextStyles}>ABILITIES</Text>
            {abilities.map((abilityItem) => (
              <Text
                as="h4"
                textStyle="h4"
                textTransform="capitalize"
                key={abilityItem.ability.name}
              >
                {abilityItem.ability.name}
              </Text>
            ))}
          </VStack>
        </ModalBody>

        <ModalFooter pt="0">
          <Button {...ButtonStyles} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const highlightedBoxStyles: StackProps = {
  bg: 'brand.100',
  p: '22px',
  mb: '14px',
  rounded: '3xl',
  gap: '24px',
};

const boxWithIconStyles: StackProps = {
  bg: 'brand.100',
  p: '22px',
  gap: '16px',
  rounded: '3xl',
  backgroundImage: `url(${Stars})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 10px',
};

const TextStyles: TextProps = {
  fontSize: '18px',
  color: 'brand.900',
  fontStyle: 'italic',
  fontWeight: 'semibold',
};

const HStackStyles: StackProps = {
  width: '100%',
  justify: 'space-between',
};

const ButtonStyles: ButtonProps = {
  rounded: '3xl',
  bg: '#0043C0',
  color: 'white',
  w: '100%',
  h: '60px',
};

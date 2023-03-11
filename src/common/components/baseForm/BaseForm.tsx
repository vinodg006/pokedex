import {
  Box,
  BoxProps,
  Button,
  Flex,
  FlexProps,
  Heading,
  StackProps,
  VStack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IBaseForm {
  onSubmit: () => void;
  children: ReactNode;
}

export const BaseForm = ({ children, onSubmit }: IBaseForm) => (
  <Flex {...FlexStyles}>
    <Box {...BoxStyles}>
      <VStack {...VStackStyles}>
        {children}
        <Button type="submit" variant="rounded" onClick={onSubmit}>
          Submit
        </Button>
      </VStack>
    </Box>
  </Flex>
);

const FlexStyles: FlexProps = {
  h: '100vh',
  w: '100vw',
  align: 'center',
  justify: 'center',
  bg: 'brand.900',
};

const BoxStyles: BoxProps = {
  w: '80vw',
  maxWidth: '600px',
  rounded: 'xl',
  p: 12,
  bg: 'brand.100',
};

const VStackStyles: StackProps = {
  spacing: 12,
};

import { Button, ButtonProps } from '@chakra-ui/button';
import { Flex, Text } from '@chakra-ui/layout';
import { FlexProps, Input } from '@chakra-ui/react';

import { useState } from 'react';

const ContainerMenuProps: FlexProps = {
  direction: 'column',
  position: 'absolute',
  marginTop: { base: '40px' },
  zIndex: '1',
  background: 'white',
  border: 'solid 2px lightgray',
  width: { base: '78vw', md: '68vw', lg: '35vw' },
  maxWidth: { lg: '350px' },
  roundedBottom: '3xl',
  overflow: 'hidden',
};

const SelectProps: ButtonProps = {
  background: 'white',
  border: 'solid 2px lightgray',
  width: { base: '80vw', lg: '35vw' },
  maxWidth: { lg: '350px' },
  roundedTop: '3xl',
};

const OptionProps: ButtonProps = {
  rounded: 'none',
  _focus: { background: 'lightgray' },
};
const InputProps: ButtonProps = {
  background: 'white',
  borderColor: 'lightgray',
  border: 'solid 2px',
  width: { base: '100%', lg: '35vw' },
  maxWidth: { lg: '350px' },
  rounded: 'full',
  color: 'blue',
  fontWeight: 'bold',
};
export default function InputTextLabeled() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Flex direction="column" marginX={{ base: '0px', lg: 'auto' }}>
      <Text color="gray" marginRight="auto">
        label
      </Text>
      <Input {...InputProps} />
      <Text color="red">erro</Text>
    </Flex>
  );
}

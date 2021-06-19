/* eslint-disable react/no-array-index-key */
import { Button, ButtonProps } from '@chakra-ui/button';
import { Flex, Text } from '@chakra-ui/layout';
import { FlexProps } from '@chakra-ui/react';

import {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';

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
  width: { base: '100%', lg: '35vw' },
  maxWidth: { lg: '350px' },
  roundedTop: '3xl',
};

const OptionProps: ButtonProps = {
  rounded: 'none',
  _focus: { background: 'lightgray' },
};
type SelectTextLabeledProps = {
  label: string;
  options: Array<string>;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};
export default function SelectTextLabeled({
  label,
  options,
  value,
  setValue,
}: SelectTextLabeledProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const key = localStorage?.getItem(
      label
        .replaceAll(' ', '_')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''),
    );
    if (key) setValue(key);
  }, []);

  return (
    <Flex direction="column" marginX={{ base: '0px', lg: 'auto' }}>
      <Text color="gray" marginRight="auto">
        {label}
      </Text>
      <Flex color="blue" direction="column">
        <Flex
          onClick={() => setIsDropdownOpen(true)}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
        >
          <Button
            {...SelectProps}
            roundedBottom={isDropdownOpen ? '0px' : '3xl'}
          >
            {value === '' ? 'Selecionar' : value}
          </Button>
        </Flex>
        <Flex
          display={isDropdownOpen ? 'flex' : 'none'}
          {...ContainerMenuProps}
        >
          {options?.map((option, index) => (
            <Button
              key={index}
              {...OptionProps}
              onClick={() => {
                setValue(option);
                localStorage.setItem(
                  label
                    .replaceAll(' ', '_')
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, ''),
                  option,
                );
              }}
            >
              {option}
            </Button>
          ))}
        </Flex>
      </Flex>
      <Text color="transparent">erro</Text>
    </Flex>
  );
}

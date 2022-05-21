import { Img } from '@chakra-ui/react';
import { Text, Flex } from '@chakra-ui/react';

export default function otavioButton({ label, icon }) {
  return (
    <Flex
      background="#FFF"
      width={{ base: '90vw', lg: '350px' }}
      height="50px"
      border="solid 2px #000"
      marginTop="1.6rem"
      alignItems="center"
      borderRadius="6px"
      marginX={{ lg: '2.5rem' }}
    >
      <Img src={`/${icon}.svg`} width="35px" height="35px" marginX="1rem" />
      {' '}
      <Text fontSize="20px">{label}</Text>
    </Flex>
  );
}

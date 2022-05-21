import { Flex, Text } from '@chakra-ui/react';

export default function Title({ text }) {
  return (
    <Flex
      height="auto"
      marginTop={{ base: '0.5rem', lg: '0rem' }}
      marginX="auto"
      alignItems={{ base: 'center', lg: 'flex-end' }}
      maxWidth="820px"
    >
      <Text
        fontSize={{ base: '1.6rem', md: '2.4rem', lg: '3rem' }}
        fontFamily="Sen"
        fontWeight="bold"
        color="white"
        marginX="auto"
        paddingX={{ base: '1.4rem', md: '5rem' }}
      >
        {text}
      </Text>
    </Flex>
  );
}

import { Text, Flex } from '@chakra-ui/react';

const otavioProps = {
  border: 'solid 2px #000',
  borderRadius: '6px',
  direction: 'column',
  width: { base: '90%', lg: '550px' },
  height: '60vh',
  marginTop: 'auto',
};

const otavioProps2 = {
  background: 'url(/micro.jpeg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '30vh',
};

const otavioProps3 = {
  background: '#000',
  color: '#FFF',
  fontSize: '32px',
  direction: 'column',
  height: '30vh',
  paddingY: '1rem',
  paddingX: { base: '1rem', lg: '2.6rem' },
  fontWeight: '700',
};

export default function OtavioResultFunctionCard() {
  return (
    <Flex {...otavioProps}>
      <Flex {...otavioProps2} />
      <Flex {...otavioProps3}>
        <Text fontSize={{ base: '42px', lg: '62px' }}>102</Text>
        <Text>Microorganismos encontrados.</Text>
      </Flex>
    </Flex>
  );
}

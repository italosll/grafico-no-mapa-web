import { Flex, Text } from '@chakra-ui/layout';
import Div100vh from 'react-div-100vh';

import OtavioButton from '../components/atomic/atoms/OtavioButton';

export default function HomeOtavio() {
  return (
    <Div100vh>
      <Flex direction="column" height="100%">
        <Flex
          background="#FFF"
          height="30vh"
          width="100%"
          fontSize="30px"
          fontWeight="700"
          padding="1.4rem"
          justifyContent="center"
          alignItems="center"
        >
          <Text width={{ base: '100%', lg: 'auto' }}>Crop</Text>
        </Flex>
        <Flex
          direction="column"
          background="#006528"
          height="100%"
          alignItems="center"
        >
          <Flex
            background="#f00"
            width="90%"
            maxWidth="450px"
            height="300px"
            marginTop="-2rem"
          />

          <Flex
            direction={{ base: 'column', lg: 'row' }}
            marginTop="auto"
            marginBottom="2rem"
          >
            <OtavioButton label="Trocar foto" icon="galery" />
            <OtavioButton label="Enviar e ver resultado" icon="next" />
          </Flex>
        </Flex>
      </Flex>
    </Div100vh>
  );
}

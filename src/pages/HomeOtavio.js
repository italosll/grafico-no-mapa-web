import { Flex, Text } from '@chakra-ui/layout';
import Div100vh from 'react-div-100vh';

import OtavioButton from '../components/atomic/atoms/OtavioButton';

export default function HomeOtavio() {
  return (
    <Div100vh>
      <Flex direction="column" height="100%">
        <Flex
          background="#FFF"
          height="35%"
          width="100%"
          fontSize="30px"
          fontWeight="700"
          padding="1.4rem"
          justifyContent="center"
          alignItems="center"
        >
          <Text>Realize a contagem de microorganismos estáticos</Text>
        </Flex>
        <Flex
          direction="column"
          background="#006528"
          height="100%"
          alignItems="center"
        >
          <Text
            width={{ base: '80%', lg: '600px' }}
            // marginTop={{ base: '20%', lg: '15%' }}
            marginY="auto"
            textAlign="center"
            color="#FFF"
            fontSize={{ base: '22px', lg: '30px' }}
          >
            Envie ou escolha uma de suas fotos, formate-a, e em seguida receba a
            contagem.
          </Text>

          <Flex
            direction={{ base: 'column', lg: 'row' }}
            marginTop="auto"
            marginBottom="2rem"
          >
            <OtavioButton label="Tirar Foto" icon="camera" />
            <OtavioButton label="Escolher da galeria" icon="galery" />
          </Flex>
        </Flex>
      </Flex>
    </Div100vh>
  );
}

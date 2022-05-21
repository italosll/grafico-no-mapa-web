/* eslint-disable max-len */
import { Flex } from '@chakra-ui/react';
import Div100vh from 'react-div-100vh';
import OtavioButton from '../components/atomic/atoms/OtavioButton';
import OtavioResultFunctionCard from '../components/atomic/atoms/OtavioResultCard';

export default function HomeOtavio() {
  return (
    <Div100vh>
      <Flex direction="column" height="100%">
        <Flex
          direction="column"
          background="#006528"
          height="100%"
          alignItems="center"
        >
          <OtavioResultFunctionCard />

          <Flex
            direction={{ base: 'column', lg: 'row' }}
            marginTop="auto"
            marginBottom="2rem"
          >
            <OtavioButton label="Fazer outra análise" icon="galery" />
          </Flex>
        </Flex>
      </Flex>
    </Div100vh>
  );
}

import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import ColorContainer from './ColorContainer';
import MapGroup from './MapGroup';
import { FlowContext } from '../../../contexts/FlowContext';
import { colors } from '../../../colors/colors';

export default function ColorChoose() {
  const { backgroundColor } = useContext(FlowContext);
  return (
    <>
      <Flex
        direction={{ base: 'column', lg: 'row-reverse' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <MapGroup backgroundColorProp={backgroundColor} />
        <ColorContainer
          colors0={colors[0]}
          colors1={colors[1]}
          colors2={colors[2]}

        />
      </Flex>
    </>
  );
}

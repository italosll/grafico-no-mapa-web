import { Flex, FlexProps } from '@chakra-ui/layout';
import ColorGroup from './ColorGroup';
const ColorContainerProps: FlexProps = {
  rounded: { base: '2xl', lg: '30px' },
  direction: 'column',
  height: { base: 'auto', lg: '300px' },
  width: { base: 'auto', lg: '40vw' },
  maxW: '400px',
  maxHeight: '450px',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: { base: '1rem', lg: '0rem' },
  marginX: { base: '1rem', lg: '0rem' },
};

export default function ColorContainer({
  colors0,
  colors1,
  colors2,

}) {
  return (
    <Flex {...ColorContainerProps}>
      <Flex direction="column">
        <ColorGroup {...colors0} />
        <ColorGroup {...colors1} />
        <ColorGroup {...colors2} />
      </Flex>

    </Flex>
  );
}

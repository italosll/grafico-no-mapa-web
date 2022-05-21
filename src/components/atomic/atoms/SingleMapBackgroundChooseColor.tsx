import { ImageProps } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import { FlowContext } from '../../../contexts/FlowContext';
import { SquareMap } from './SquareMap';
import { Limits } from '../../limits/Limits';
import { BarMap } from './BarMap';

const MapProps: ImageProps = {
  width: '100%',
  height: '100%',
  minHeight: '200px',
  padding: { base: '0rem', lg: '0.5rem' },
};

type SingleMapBackgroundChooseColorProps = {
  background: string;
};

export default function SingleMapBackgroundChooseColor({
  background,
}: SingleMapBackgroundChooseColorProps) {
  const {
    colorScheme,
    backgroundColor,
    setBackgroundColor,
    setRedyToNextPage,
  } = useContext(FlowContext);

  const arrayColors = [
    colorScheme.color1,
    colorScheme.color2,
    colorScheme.color3,
  ];
  function choosebackground(backgroundChoose) {
    localStorage.setItem('background_color', background);
    setBackgroundColor(backgroundChoose);
    setRedyToNextPage(true);
  }
  return (
    <Flex
      background={background}
      borderRadius="2xl"
      width={{ base: '190px', lg: '300px' }}
      height={{ base: '190px', lg: '300px' }}
      boxShadow={backgroundColor === background && '0 0 0 6px #48BB78'}
      onClick={() => {
        choosebackground(background);
      }}
    >
      <BarMap
        limits={Limits[0]}
        colors={arrayColors}
        rotateParam={[49.5, 16.5, 0]}
        {...MapProps}
      />
    </Flex>
  );
}

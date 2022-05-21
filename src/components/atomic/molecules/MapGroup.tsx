import { Flex, FlexProps } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { FlowContext } from '../../../contexts/FlowContext';
import Maps from '../atoms/Maps';

const MapContainerProps: FlexProps = {
  marginTop: { base: '4%', lg: '0%' },
  rounded: { base: '2xl', lg: '30px' },
  direction: 'column',
  height: { base: '200px', lg: '300px' },
  width: { base: '200px', lg: '40vw' },
  maxW: '400px',
  maxHeight: '450px',
  justifyContent: 'center',
  // padding: { base: '1rem', lg: '2rem' },
  marginX: { base: '1rem' },
};

type MapGroupProps = {
  backgroundColorProp: string;
};

export default function MapGroup({ backgroundColorProp }: MapGroupProps) {
  const { backgroundColor, setBackgroundColor, setRedyToNextPage } = useContext(
    FlowContext,
  );

  const [actualPage, setActualPage] = useState('/');

  function choosebackground(background) {
    // localStorage.setItem('background_color', background);
    // setBackgroundColor(background);
    // setRedyToNextPage(true);
  }

  useEffect(() => {
    const key = localStorage.getItem('background_color');
    if (key) {
      setRedyToNextPage(true);
      setBackgroundColor(key);
    }
    if (window.location.pathname !== actualPage) {
      setActualPage(window.location.pathname);
    }
  }, []);
  return (
    <Flex
      background={backgroundColorProp}
      {...MapContainerProps}
      boxShadow={
        backgroundColor === backgroundColorProp
        && actualPage === '/BackgroundChoosePage'
        && '0 0 0 6px #48BB78'
      }
      onClick={() => {
        choosebackground(backgroundColorProp);
      }}
    >
      <Flex justifyContent="center">
        <Maps mapNames={['BarMap', 'LineMap']} />
      </Flex>
      <Flex justifyContent="center">
        <Maps mapNames={['SquareMap', 'CircMap']} />
      </Flex>
    </Flex>
  );
}

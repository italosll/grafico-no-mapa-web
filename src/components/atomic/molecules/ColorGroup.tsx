import { Flex, FlexProps } from '@chakra-ui/layout';
import { useContext, useEffect } from 'react';
import { FlowContext } from '../../../contexts/FlowContext';
import { colors, nameColors } from '../../../colors/colors';

const ColorsProps: FlexProps = {
  width: { base: '40vw', md: '80px', lg: '300px' },
  height: { base: '7vh', md: '80px', lg: '50px' },
  rounded: 'xl',
  margin: { base: '1vh', lg: '1.4rem', '2xl': '2rem' },
  overflow: 'hidden',
};

const ColorProps: FlexProps = {
  width: 'calc(100%/3)',
  height: '100%',
};

type ColorGroupProps = {
  groupColorsName: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
};

export default function ColorGroup({ ...colorGroup }: ColorGroupProps) {
  const { setRedyToNextPage, colorScheme, setColorScheme } = useContext(
    FlowContext,
  );

  useEffect(() => {
    const groupName: string = localStorage.getItem('esquema_de_cores');
    if (localStorage.getItem('esquema_de_cores')) {
      setColorScheme(colors[nameColors.indexOf(groupName)]);
      setRedyToNextPage(true);
    }
  }, []);

  function chooseColorsGroup(groupColorsName) {
    localStorage.setItem('esquema_de_cores', groupColorsName);
    setColorScheme(colors[nameColors.indexOf(groupColorsName)]);
    setRedyToNextPage(true);
  }

  return (
    <Flex width="100%" height="100%">
      <Flex
        {...ColorsProps}
        onClick={() => chooseColorsGroup(colorGroup.groupColorsName)}
        border={
          colorScheme.groupColorsName === colorGroup.groupColorsName
            ? 'solid 5px #48BB78' : 'solid 1px black'
        }
      >
        <Flex {...ColorProps} background={colorGroup.color1} />
        <Flex {...ColorProps} background={colorGroup.color2} />
        <Flex {...ColorProps} background={colorGroup.color3} />
        <Flex {...ColorProps} background={colorGroup.color4} />
        <Flex {...ColorProps} background={colorGroup.color5} />
        <Flex {...ColorProps} background={colorGroup.color6} />
      </Flex>
    </Flex>
  );
}

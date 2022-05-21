import { Flex, FlexProps } from '@chakra-ui/react';
import CustomButton from '../atoms/CustomButton';
import ColorChoose from './ColorChoose';
import ContextQuestions from './ContextQuestions';

export default function UniqueContent({ content }) {
  const ContainerProps: FlexProps = {
    direction: 'column',
    justifyContent: 'center',
    background:
      content === 'ColorChoose'
        ? { base: 'transparent', lg: 'transparent' }
        : { base: 'white' },
    rounded: { base: '2xl', lg: '30px' },
    paddingY:
      content === 'ColorChoose'
        ? { base: '0vh', lg: '0vh', '2xl': '8%' }
        : { base: '3vh', lg: '6vh', '2xl': '8%' },
    paddingX: { base: '6vw', lg: '1.5vw' },
    marginY: 'auto',
    marginX: 'auto',
    width: { base: '90vw', md: '80vw' },
    maxWidth: { base: '900px', '2xl': '1000px' },
    height: { base: 'auto', '2xl': '12vw' },
    minHeight:
      content === 'ContextQuestions'
        ? { base: '0px', lg: '300px', '2xl': '350px' }
        : '400px',
    maxHeight: content === 'ContextQuestions' ? 'auto' : '400px',
  };
  return (
    <>
      <Flex {...ContainerProps}>
        {content === 'ContextQuestions' && <ContextQuestions />}
        {content === 'ColorChoose' && <ColorChoose />}
      </Flex>
      <CustomButton />
    </>
  );
}

import { Flex, FlexProps } from '@chakra-ui/react';
import CustomButton from '../atoms/CustomButton';
import Maps from '../atoms/Maps';
import SingleMap from '../atoms/SingleMap';
import SingleMapBackgroundChooseColor from '../atoms/SingleMapBackgroundChooseColor';
import MapGroup from './MapGroup';
import Questions from './Questions';

export default function DoubleContent({ content }) {
  const ContainerProps: FlexProps = {
    direction: { base: 'column', lg: 'row' },
    paddingY: { base: '3%', lg: '0' },
    paddingX: { base: '6vw', lg: '1.5vw' },
    marginY: 'auto',
    marginX: 'auto',
    width: { base: '90%', md: '80vw' },
    maxWidth: '900px',
    height: 'auto',
    justifyContent: { base: 'center', lg: 'space-around' },
    alignItems: 'center',
  };
  return (
    <>
      <Flex {...ContainerProps}>
        {content === 'BackgroundChoose' && (
          <>
            {/* <MapGroup backgroundColorProp="dark" />
            <MapGroup backgroundColorProp="white" /> */}
            <SingleMapBackgroundChooseColor background="dark" />
            <Flex height="10px" display={{ base: 'flex', lg: 'hidden' }} />
            <SingleMapBackgroundChooseColor background="white" />
          </>
        )}

        {content === 'AccuracyQuestions' && (
          <>
            <SingleMap />
            <Questions type="AccuracyQuestions" />
          </>
        )}

        {content === 'QualitativeQuestions' && (
          <>
            <SingleMap />
            <Questions type="QualitativeQuestions" />
          </>
        )}
      </Flex>
      <Flex
        width="100vw"
        maxW={{ lg: '900px' }}
        justifyContent="space-around"
        marginX="auto"
      >
        {/* {content === 'BackgroundChoose' ? (
          <>
            <CustomButton />
            <CustomButton />
          </>
        ) : ( */}
        <CustomButton />
        {/* )} */}
      </Flex>
    </>
  );
}

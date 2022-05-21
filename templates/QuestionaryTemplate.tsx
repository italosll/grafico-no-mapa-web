/* eslint-disable react/require-default-props */
import { Flex, FlexProps, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Div100vh from 'react-div-100vh';
import Title from '../src/components/atomic/atoms/Title';
import DoubleContent from '../src/components/atomic/molecules/DoubleContent';
import UniqueContent from '../src/components/atomic/molecules/UniqueContent';

const QuestionaryTemplateContainer: FlexProps = {
  width: '100vw',
  height: '100%',
  background: 'blue',
  maxWidth: '100%',
  textAlign: 'center',
  direction: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingY: { lg: '10vh' },
  color: 'white',
};

type QuestionaryTemplateProps = {
  content: string;
  pageTitle?: string;
  pageSubtitle?: string;
};

export default function QuestionaryTemplate({
  content,
  pageTitle,
  pageSubtitle,
}: QuestionaryTemplateProps) {
  return (
    <>
      <main>
        <Div100vh>
          <Flex {...QuestionaryTemplateContainer}>
            <Flex
              height="100%"
              maxH={{ base: '100%', lg: '800px', '2xl': '1000px' }}
              direction="column"
              width="100%"
            >
              {pageTitle && <Title text={pageTitle} />}
              {pageSubtitle && (
                <Flex>
                  <Text
                    marginTop="1rem"
                    marginX="auto"
                    fontSize={{ base: '1rem', lg: '1.4rem', xl: '1.6rem' }}
                    paddingX="10px"
                  >
                    {pageSubtitle}
                  </Text>
                </Flex>
              )}

              {content === 'ContextQuestions' && (
                <UniqueContent content="ContextQuestions" />
              )}
              {content === 'BackgroundChoose' && (
                <DoubleContent content="BackgroundChoose" />
              )}
              {content === 'ColorChoose' && (
                <UniqueContent content="ColorChoose" />
              )}
              {content === 'AccuracyQuestions' && (
                <DoubleContent content="AccuracyQuestions" />
              )}
              {content === 'QualitativeQuestions' && (
                <DoubleContent content="QualitativeQuestions" />
              )}
            </Flex>
          </Flex>
        </Div100vh>
      </main>
    </>
  );
}

/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import router from 'next/router';
import { FlowContext } from '../../../contexts/FlowContext';
// eslint-disable-next-line max-len
import { AccuracyQuestionsContext } from '../../../contexts/AccuracyQuestionsContext';
import Questions from '../../../questions/Accuracy';
import { QualitativeQuestionsContext } from '../../../contexts/QualitativeQuestionsContext';

const ButtonProps = {
  width: { base: '100%', md: '100%', lg: '20rem' },
  height: { base: '3rem', lg: '100%' },
  maxHeight: '4rem',
  rounded: { base: 'none', lg: 'full' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  _focus: { textDecoration: 'none' },
  _hover: { textDecoration: 'none' },
};

export default function CustomButton() {
  const {
    redyToNextPage,
    nextPage,
    actualPage,
    setRedyToNextPage,
  } = useContext(FlowContext);

  const {
    actualAccuracyQuestion,
    setIsAccuracyFinished,
    setActualAccuracyQuestion,
    setActualAccuracyAnswer,
  } = useContext(AccuracyQuestionsContext);

  const {
    actualQualitativeQuestion,
    setActualQualitativeQuestion,
    setActualQualitativeAnswer,
  } = useContext(QualitativeQuestionsContext);

  function mountHref(): string {
    if (redyToNextPage) {
      if (actualPage === '/AccuracyQuestionsPage') {
        if (actualAccuracyQuestion >= Questions.length) {
          return '/QualitativeQuestions';
        }
        return '/AccuracyQuestionsPage';
      }

      if (actualPage === '/QualitativeQuestions') {
        if (actualQualitativeQuestion >= 4) {
          return '/FinishPage';
        }
        return '/QualitativeQuestions';
      }

      return nextPage;
    }
    return '#';
  }

  async function continuePressed() {
    if (mountHref() === '/QualitativeQuestions') {
      setIsAccuracyFinished(true);
      localStorage.setItem('accuracyFinished', 'true');
    }

    setRedyToNextPage(false);
    if (
      actualPage === '/AccuracyQuestionsPage'
      && actualAccuracyQuestion < Questions.length
    ) {
      setActualAccuracyQuestion(actualAccuracyQuestion + 1);
      setActualAccuracyAnswer('');
    }
    if (actualPage === '/QualitativeQuestions') {
      setActualQualitativeQuestion(actualQualitativeQuestion + 1);
      setActualQualitativeAnswer(['']);
    }

    router.push(mountHref());
  }

  return (
    <Flex
      width={{ base: '100%', lg: '10rem' }}
      minHeight="4rem"
      justifyContent="center"
      alignItems={{ base: 'flex-end', lg: 'flex-start' }}
      marginX="auto"
    >
      {/* <Link href={mountHref()}> */}
      <Button
        {...ButtonProps}
        background={redyToNextPage ? '#48BB78' : '#777'}
        disabled={!redyToNextPage}
        cursor={redyToNextPage ? 'pointer' : 'not-allowed'}
        onClick={() => continuePressed()}
      >
        <a>Continuar</a>
      </Button>
      {/* </Link> */}
    </Flex>
  );
}

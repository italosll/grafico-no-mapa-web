import { Flex } from '@chakra-ui/layout';
import { useContext, useEffect } from 'react';
// eslint-disable-next-line max-len
import { AccuracyQuestionsContext } from '../../../contexts/AccuracyQuestionsContext';
import { FlowContext } from '../../../contexts/FlowContext';

export default function AccuracyQuestion({
  questionText,
  questionNumber,
  questionAlternative,
}) {
  const { setRedyToNextPage } = useContext(FlowContext);
  const { actualAccuracyAnswer, setActualAccuracyAnswer } = useContext(
    AccuracyQuestionsContext,
  );

  useEffect(() => {
    const key = localStorage.getItem(questionNumber.toString());
    if (key) {
      setActualAccuracyAnswer(key);
      setRedyToNextPage(true);
    }
  }, []);

  function markAlternative() {
    localStorage.setItem(questionNumber.toString(), questionAlternative);
    setActualAccuracyAnswer(questionAlternative);
    setRedyToNextPage(true);
  }

  // useEffect(() => {
  //   console.log(actualAccuracyAnswer);
  //   if (actualAccuracyAnswer === questionAlternative) {
  //     console.log(actualAccuracyAnswer, '  -  ', questionAlternative);
  //   }
  // }, [actualAccuracyAnswer]);
  return (
    <Flex
      maxWidth="100vw"
      marginTop="10px"
      border={
        actualAccuracyAnswer === questionAlternative
          ? 'dotted 3px #00FF32'
          : 'solid 3px transparent'
      }
      background={
        actualAccuracyAnswer === questionAlternative ? '#00FF3220' : 'none'
      }
      onClick={() => markAlternative()}
      rounded="full"
      paddingX="1rem"
      cursor="pointer"
    >
      {questionAlternative}
      {') '}
      {questionText}
    </Flex>
  );
}

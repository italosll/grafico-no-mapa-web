/* eslint-disable no-plusplus */
import { Flex } from '@chakra-ui/layout';
import { useContext, useEffect } from 'react';
import QuestionaryTemplate from '../../templates/QuestionaryTemplate';
import Loading from '../components/atomic/atoms/Loading';
import { AccuracyQuestionsContext } from '../contexts/AccuracyQuestionsContext';
import { FlowContext } from '../contexts/FlowContext';
import Questions from '../questions/Accuracy';

function verifyActualQuestion(setActualAccuracyQuestion) {
  let lastQuestionAnswered = 0;
  for (let i = 1; i <= Questions.length; i++) {
    if (localStorage.getItem(i.toString())) {
      lastQuestionAnswered = i;
    } else {
      break;
    }
  }
  if (lastQuestionAnswered > 0 && lastQuestionAnswered <= Questions.length) {
    setActualAccuracyQuestion(lastQuestionAnswered + 1);
  }
}

export default function AccuracyQuestionsPage() {
  const { setNextPage, setActualPage } = useContext(FlowContext);

  const { actualAccuracyQuestion, setActualAccuracyQuestion } = useContext(
    AccuracyQuestionsContext,
  );

  useEffect(() => {
    setActualPage('/AccuracyQuestionsPage');
    setNextPage('/#');
    // verifyActualQuestion(setActualAccuracyQuestion);
  }, [actualAccuracyQuestion]);

  return (
    <>
      {/* <Loading /> */}
      {/* filter="blur(5px)"pointerEvents="none" */}
      <Flex>
        <QuestionaryTemplate
          content="AccuracyQuestions"
          pageSubtitle={Questions[actualAccuracyQuestion - 1]?.question}
        />
      </Flex>
    </>
  );
}

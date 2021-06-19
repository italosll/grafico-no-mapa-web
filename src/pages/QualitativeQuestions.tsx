/* eslint-disable no-plusplus */
import { useContext, useEffect } from 'react';
import QuestionaryTemplate from '../../templates/QuestionaryTemplate';
import { FlowContext } from '../contexts/FlowContext';
import { QualitativeQuestionsContext } from '../contexts/QualitativeQuestionsContext';

const qualitativeQuestionLength = 4;
const Alternatives = ['a', 'b', 'c'];
const emojis = ['hated', 'didnt_enjoyed', 'ok', 'enjoyed', 'really_enjoyed'];

export default function QualitativeQuestionsPage() {
  const { setNextPage, setActualPage, setRedyToNextPage } = useContext(
    FlowContext,
  );
  const {
    setActualQualitativeQuestion,
    actualQualitativeQuestion,
  } = useContext(QualitativeQuestionsContext);

  function verifyActualQuestion() {
    let lastQuestionAnswered = 0;

    for (let i = 1; i <= qualitativeQuestionLength; i++) {
      if (localStorage.getItem(`q_${i}_a`)) {
        lastQuestionAnswered = i;
      }
    }

    if (lastQuestionAnswered === qualitativeQuestionLength) {
      window.location.href = '/Finish';
    } else {
      // setActualQualitativeQuestion(lastQuestionAnswered + 1);
    }
  }
  useEffect(() => {
    setActualPage('/QualitativeQuestions');
    setNextPage('/FinishPage');
    // verifyActualQuestion();
  }, []);

  return (
    <QuestionaryTemplate
      content="QualitativeQuestions"
      pageTitle="O seguinte mapa é"
    />
  );
}

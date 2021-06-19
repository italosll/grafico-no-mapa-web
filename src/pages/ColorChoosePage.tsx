import { useContext, useEffect } from 'react';
import QuestionaryTemplate from '../../templates/QuestionaryTemplate';
import { FlowContext } from '../contexts/FlowContext';

export default function ColorChoosePage() {
  const { setNextPage, setActualPage, setRedyToNextPage } = useContext(FlowContext);

  useEffect(() => {
    setActualPage('/ColorChoosePage');
    setNextPage('/AccuracyQuestionsPage');
    setRedyToNextPage(false);
  }, []);

  return (
    <QuestionaryTemplate
      content="ColorChoose"
      pageTitle="Escolha um esquema de cores..."
    />
  );
}

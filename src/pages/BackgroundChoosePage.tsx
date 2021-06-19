import { useContext, useEffect } from 'react';
import QuestionaryTemplate from '../../templates/QuestionaryTemplate';
import { FlowContext } from '../contexts/FlowContext';

import SectionsGenerator from '../components/atomic/atoms/SectionsGenerator';

export default function BackgroundChoose() {
  const { setNextPage, setActualPage } = useContext(FlowContext);

  useEffect(() => {
    setNextPage('/ColorChoosePage');
    setActualPage('/BackgroundChoosePage');
  }, []);

  return (
    <>
      <QuestionaryTemplate
        content="BackgroundChoose"
        pageTitle="Você prefere o FUNDO do mapa..."
      />
    </>
  );
}

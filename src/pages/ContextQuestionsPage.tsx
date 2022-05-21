import { Button } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import QuestionaryTemplate from '../../templates/QuestionaryTemplate';
import { FlowContext } from '../contexts/FlowContext';

import teste from '../axios/index';

import val from '../../validation/validation';

const answerWrong = {

  age_interval: 'a',
  visual_impairment: 'a',
  education_level: 'a',
  sex: 'a',
  background_color: 'a',
  color_scheme: 'a',
  aq1: 'a',
  aq2: 'a',
  aq3: 'a',
  aq4: 'a',
  aq5: 'a',
  aq6: 'a',
  aq7: 'a',
  aq8: 'a',
  aq9: 'a',
  aq10: 'a',
  aq11: 'a',
  aq12: 'a',
  aq13: 'a',
  aq14: 'a',
  aq15: 'a',
  aq16: 'a',
  qq1a: 'a',
  qq1b: 'a',
  qq1c: 'a',
  qq2a: 'a',
  qq2b: 'a',
  qq2c: 'a',
  qq3a: 'a',
  qq3b: 'a',
  qq3c: 'a',
  qq4a: 'a',
  qq4b: 'a',
  qq4c: 'a',

};

const ageOptions = ['0-10', '11-20', '21-30', '30-40', '40-50', '50+'];
const sexOptions = ['Masculino', 'Feminino'];
const visualImpairmentOptions = [
  'nenhuma',
  'Astgmatismo',
  'Miopia',

];
const educationLevelOptions = [
  'alfabetizado',
  'Ens. Fundamental Completo',
  'Ens. Médio Completo',
  'Ens. Superior Completo',
  'Pós-Graduação Completo',
];

const answerRight = {

  age_interval: ageOptions[0],
  visual_impairment: visualImpairmentOptions[0],
  education_level: educationLevelOptions[0],
  sex: sexOptions[1],
  background_color: 'white',
  color_scheme: 'Quente',
  aq1: 'a',
  aq2: 'a',
  aq3: 'a',
  aq4: 'a',
  aq5: 'a',
  aq6: 'a',
  aq7: 'a',
  aq8: 'a',
  aq9: 'a',
  aq10: 'a',
  aq11: 'a',
  aq12: 'a',
  aq13: 'a',
  aq14: 'a',
  aq15: 'a',
  aq16: 'a',
  qq1a: 'hated',
  qq1b: 'hated',
  qq1c: 'hated',
  qq2a: 'hated',
  qq2b: 'hated',
  qq2c: 'hated',
  qq3a: 'hated',
  qq3b: 'hated',
  qq3c: 'hated',
  qq4a: 'hated',
  qq4b: 'hated',
  qq4c: 'hated',

};

export default function ContextQuestionsPage() {
  const { setNextPage, setActualPage } = useContext(FlowContext);

  useEffect(() => {
    setNextPage('/BackgroundChoosePage');
    setActualPage('/ContextQuestionsPage');
  }, []);
  return (
    <QuestionaryTemplate
      content="ContextQuestions"
      pageTitle="Bom te conhecer..."
    />
    // <Button
    //   colorScheme="pink"
    //   onClick={
    //   // () => teste()
    //   () => {
    //     val(answerRight);
    //   // () => { console.log('a');
    //   }

  // }
  // >
  //   ALOU TESTE TESTANDO

  // </Button>
  );
}

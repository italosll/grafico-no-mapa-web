import { Flex, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import QuestionaryTemplate from '../../../../templates/QuestionaryTemplate';
import SelectTextLabeled from './SelectTextLabeled';
import InputTextTypedLabeled from './InputTextLabeled copy';
import InputTextLabeled from './InputTextLabeled copy';
import { FlowContext } from '../../../contexts/FlowContext';

const ageOptions = ['0-10', '11-20', '21-30', '31-40', '41-50', '51+'];
const sexOptions = ['Masculino', 'Feminino'];
const visualImpairmentOptions = [
  'Nenhuma',
  'Astgmatismo',
  'Miopia',
  'Ambos'

];
const educationLevelOptions = [
  'Alfabetizado',
  'Ens. Fundamental Completo',
  'Ens. Médio Completo',
  'Ens. Superior Completo',
  'Pós-Graduação Completo',
];

function isInto(array, stringSearch) {
  if (array.find((index) => index === stringSearch) !== undefined) {
    return true;
  }
  return false;
}

function isFiledsFilled(age, visualImpairment, educationLevel, sex): boolean {
  const foundAge = isInto(ageOptions, age);
  const foundSex = isInto(sexOptions, sex);
  const foundVisualImpairment = isInto(
    visualImpairmentOptions,
    visualImpairment,
  );
  const foundEducationLevel = isInto(educationLevelOptions, educationLevel);

  return foundAge && foundSex && foundVisualImpairment && foundEducationLevel;
}

export default function ContextQuestions() {
  const [age, setAge] = useState('');
  const [visualImpairment, setVisualImpairment] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [sex, setSex] = useState('');

  const { redyToNextPage, setRedyToNextPage } = useContext(FlowContext);

  useEffect(() => {
    if (
      isFiledsFilled(age, visualImpairment, educationLevel, sex)
      && redyToNextPage === false
    ) {
      setRedyToNextPage(true);
    }
  }, [age, visualImpairment, educationLevel, sex]);

  return (
    <Flex
      flexDirection={{ base: 'column', lg: 'row' }}
      overflowY={{ base: 'scroll', lg: 'hidden' }}
      minHeight={{ base: 'auto', lg: '300px' }}
      width="100%"
      justifyContent="space-around"
      alignItems="center"
    >
      <Flex flexDirection="column" width="100%">
        {/* <InputTextLabeled /> */}
        <SelectTextLabeled
          label="Idade"
          options={ageOptions}
          value={age}
          setValue={setAge}
        />
        <SelectTextLabeled
          label="Grau de Escolariadade"
          options={educationLevelOptions}
          value={educationLevel}
          setValue={setEducationLevel}
        />
      </Flex>
      <Flex flexDirection="column" width="100%">
        <SelectTextLabeled
          label="Deficiência Visual"
          options={visualImpairmentOptions}
          value={visualImpairment}
          setValue={setVisualImpairment}
        />
        <SelectTextLabeled
          label="Sexo"
          options={sexOptions}
          value={sex}
          setValue={setSex}
        />
      </Flex>
    </Flex>
  );
}

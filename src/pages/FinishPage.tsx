/* eslint-disable no-alert */
/* eslint-disable no-console */
import { Flex, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import Div100vh from 'react-div-100vh';
import validation from '../../validation/validation';
import saveAnswer from '../pages/api/answer';

function mountAnswerObject() {
  const obj = {
    age_interval: localStorage.getItem('idade'),
    visual_impairment: localStorage.getItem('deficiencia_visual'),
    education_level: localStorage.getItem('grau_de_escolariadade'),
    sex: localStorage.getItem('sexo'),
    background_color: localStorage.getItem('background_color'),
    color_scheme: localStorage.getItem('esquema_de_cores'),
    aq1: localStorage.getItem('1'),
    aq2: localStorage.getItem('2'),
    aq3: localStorage.getItem('3'),
    aq4: localStorage.getItem('4'),
    aq5: localStorage.getItem('5'),
    aq6: localStorage.getItem('6'),
    aq7: localStorage.getItem('7'),
    aq8: localStorage.getItem('8'),
    aq9: localStorage.getItem('9'),
    aq10: localStorage.getItem('10'),
    aq11: localStorage.getItem('11'),
    aq12: localStorage.getItem('12'),
    aq13: localStorage.getItem('13'),
    aq14: localStorage.getItem('14'),
    aq15: localStorage.getItem('15'),
    aq16: localStorage.getItem('16'),
    qq1a: localStorage.getItem('q_1_a'),
    qq1b: localStorage.getItem('q_1_b'),
    qq1c: localStorage.getItem('q_1_c'),
    qq2a: localStorage.getItem('q_2_a'),
    qq2b: localStorage.getItem('q_2_b'),
    qq2c: localStorage.getItem('q_2_c'),
    qq3a: localStorage.getItem('q_3_a'),
    qq3b: localStorage.getItem('q_3_b'),
    qq3c: localStorage.getItem('q_3_c'),
    qq4a: localStorage.getItem('q_4_a'),
    qq4b: localStorage.getItem('q_4_b'),
    qq4c: localStorage.getItem('q_4_c'),
  };
  return obj;
}

export default function FinishPage() {
  useEffect(() => {
    const answer = mountAnswerObject();

    async function save() {
      if(localStorage.getItem('finished') !== "true"){

        if (validation(answer)) {
          const resp = await saveAnswer(answer);
          console.log(resp);
          localStorage.clear();
          localStorage.setItem('finished', 'true');
        }
      }
    }
    save();
    localStorage.setItem('finished', 'true');

  }, []);

  return (
    <Div100vh>
      <Flex
        background="blue"
        width="100%"
        height="100%"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          width="250px"
          height="250px"
          background="url(/check.png)"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="center"
        />
        <Text color="white" fontSize="2rem" maxWidth="80vw" fontWeight="700">
          Muito obrigado, você contribuiu de forma significativa para a minha
          pesquisa!
        </Text>
      </Flex>
    </Div100vh>
  );
}

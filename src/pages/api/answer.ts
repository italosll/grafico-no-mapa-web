/* eslint-disable no-alert */
/* eslint-disable camelcase */
import axios from 'axios';

type AnswerProps ={
  age_interval: string,
  visual_impairment: string,
  education_level: string,
  sex: string,
  background_color: string,
  color_scheme: string,
  aq1: string,
  aq2: string,
  aq3: string,
  aq4: string,
  aq5: string,
  aq6: string,
  aq7: string,
  aq8: string,
  aq9: string,
  aq10: string,
  aq11: string,
  aq12: string,
  aq13: string,
  aq14: string,
  aq15: string,
  aq16: string,
  qq1a: string,
  qq1b: string,
  qq1c: string,
  qq2a: string,
  qq2b: string,
  qq2c: string,
  qq3a: string,
  qq3b: string,
  qq3c: string,
  qq4a: string,
  qq4b: string,
  qq4c: string,
}
export default async function saveAnswer(answer:AnswerProps) {
  await axios.post('http://192.168.0.102:3333/answer', {
    age_interval: answer.age_interval,
    visual_impairment: answer.visual_impairment,
    education_level: answer.education_level,
    sex: answer.sex,
    background_color: answer.background_color,
    color_scheme: answer.color_scheme,
    aq1: answer.aq1,
    aq2: answer.aq2,
    aq3: answer.aq3,
    aq4: answer.aq4,
    aq5: answer.aq5,
    aq6: answer.aq6,
    aq7: answer.aq7,
    aq8: answer.aq8,
    aq9: answer.aq9,
    aq10: answer.aq10,
    aq11: answer.aq11,
    aq12: answer.aq12,
    aq13: answer.aq13,
    aq14: answer.aq14,
    aq15: answer.aq15,
    aq16: answer.aq16,
    qq1a: answer.qq1a,
    qq1b: answer.qq1b,
    qq1c: answer.qq1c,
    qq2a: answer.qq2a,
    qq2b: answer.qq2b,
    qq2c: answer.qq2c,
    qq3a: answer.qq3a,
    qq3b: answer.qq3b,
    qq3c: answer.qq3c,
    qq4a: answer.qq4a,
    qq4b: answer.qq4b,
    qq4c: answer.qq4c,
  })
    .then(() => {
      alert('Resposta enviada com sucesso!');
      localStorage.clear();
    }).catch(() => {
      alert('Resposta não enviada...');
    });
}

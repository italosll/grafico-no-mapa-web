import axios from 'axios';

export default function teste() {
  axios.post('http://graficonomapa.com.br:3333/answer', {
    age_interval: 'a',
    visual_impairment: 'a',
    // education_level: 'a',
    // sex: 'a',
    // background_color: 'a',
    // color_scheme: 'a',
    // aq1: 'a',
    // aq2: 'a',
    // aq3: 'a',
    // aq4: 'a',
    // aq5: 'a',
    // aq6: 'a',
    // aq7: 'a',
    // aq8: 'a',
    // aq9: 'a',
    // aq10: 'a',
    // aq11: 'a',
    // aq12: 'a',
    // aq13: 'a',
    // aq14: 'a',
    // aq15: 'a',
    // aq16: 'a',
    // qq1a: 'a',
    // qq1b: 'a',
    // qq1c: 'a',
    // qq2a: 'a',
    // qq2b: 'a',
    // qq2c: 'a',
    // qq3a: 'a',
    // qq3b: 'a',
    // qq3c: 'a',
    // qq4a: 'a',
    // qq4b: 'a',
    // qq4c: 'a',
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

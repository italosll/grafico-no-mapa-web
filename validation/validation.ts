/* eslint-disable max-len */
import * as yup from 'yup';

const schema = yup.object().shape({
  age_interval: yup.string().required().matches(/(^0-10$|^11-20$|^21-30$|^30-40$|^40-50$|^50+$)/, { excludeEmptyString: true }),
  visual_impairment: yup.string().required().matches(/(nenhuma$|^Miopia$|^Astigmatismo)/, { excludeEmptyString: true }),
  education_level: yup.string().required().matches(/(^alfabetizado$|^Ens. Fundamental Completo$|^Ens. Médio Completo$|^Ens. Superior Completo$|^Pós-Graduação Completo$)/, { excludeEmptyString: true }),
  sex: yup.string().required().matches(/(Masculino$|^Feminino$)/, { excludeEmptyString: true }),
  background_color: yup.string().required().matches(/(white$|^dark$)/, { excludeEmptyString: true }),
  color_scheme: yup.string().required().matches(/(Quente$|^Frio$|^Neutro$)/, { excludeEmptyString: true }),
  aq1: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  aq2: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  aq3: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  aq4: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  aq5: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  aq6: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  aq7: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  aq8: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  aq9: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  aq10: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  aq11: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  aq12: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  aq13: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  aq14: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  aq15: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  aq16: yup.string().required().matches(/(^a$|^b$|^c$|^d$)/, { excludeEmptyString: true }),
  qq1a: yup.string().required().matches(/(^hated$|^didnt_enjoyed$|^ok$|^enjoyed$|^really_enjoyed$)/, { excludeEmptyString: true }),
  qq1b: yup.string().required().matches(/(^hated$|^didnt_enjoyed$|^ok$|^enjoyed$|^really_enjoyed$)/, { excludeEmptyString: true }),
  qq1c: yup.string().required().matches(/(^hated$|^didnt_enjoyed$|^ok$|^enjoyed$|^really_enjoyed$)/, { excludeEmptyString: true }),
  qq2a: yup.string().required().matches(/(^hated$|^didnt_enjoyed$|^ok$|^enjoyed$|^really_enjoyed$)/, { excludeEmptyString: true }),
  qq2b: yup.string().required().matches(/(^hated$|^didnt_enjoyed$|^ok$|^enjoyed$|^really_enjoyed$)/, { excludeEmptyString: true }),
  qq2c: yup.string().required().matches(/(^hated$|^didnt_enjoyed$|^ok$|^enjoyed$|^really_enjoyed$)/, { excludeEmptyString: true }),
  qq3a: yup.string().required().matches(/(^hated$|^didnt_enjoyed$|^ok$|^enjoyed$|^really_enjoyed$)/, { excludeEmptyString: true }),
  qq3b: yup.string().required().matches(/(^hated$|^didnt_enjoyed$|^ok$|^enjoyed$|^really_enjoyed$)/, { excludeEmptyString: true }),
  qq3c: yup.string().required().matches(/(^hated$|^didnt_enjoyed$|^ok$|^enjoyed$|^really_enjoyed$)/, { excludeEmptyString: true }),
  qq4a: yup.string().required().matches(/(^hated$|^didnt_enjoyed$|^ok$|^enjoyed$|^really_enjoyed$)/, { excludeEmptyString: true }),
  qq4b: yup.string().required().matches(/(^hated$|^didnt_enjoyed$|^ok$|^enjoyed$|^really_enjoyed$)/, { excludeEmptyString: true }),
  qq4c: yup.string().required().matches(/(^hated$|^didnt_enjoyed$|^ok$|^enjoyed$|^really_enjoyed$)/, { excludeEmptyString: true }),
});

export default async function validate(answer):Promise<boolean> {
  return schema.isValid(answer).then((valid) => valid);
}

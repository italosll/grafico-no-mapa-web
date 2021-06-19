/* eslint-disable import/prefer-default-export */

import {
  createContext, Dispatch, SetStateAction, useEffect, useState,
} from 'react';

import { Limits } from '../components/limits/Limits';

interface AccuracyQuestionsContextProps {
  actualAccuracyQuestion: number;
  actualAccuracyAnswer: string;
  isAccuracyFinished: boolean;
  setActualAccuracyQuestion: Dispatch<SetStateAction<number>>;
  setActualAccuracyAnswer: Dispatch<SetStateAction<string>>;
  setIsAccuracyFinished: Dispatch<SetStateAction<boolean>>;
}

export const AccuracyQuestionsContext = createContext(
  {} as AccuracyQuestionsContextProps,
);

export function AccuracyQuestionsContextProvider({ children }) {
  const [actualAccuracyQuestion, setActualAccuracyQuestion] = useState(1);
  const [actualAccuracyAnswer, setActualAccuracyAnswer] = useState('');
  const [isAccuracyFinished, setIsAccuracyFinished] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('accuracyFinished')) setIsAccuracyFinished(true);
  }, []);

  return (
    <AccuracyQuestionsContext.Provider
      value={{
        actualAccuracyQuestion,
        actualAccuracyAnswer,
        isAccuracyFinished,
        setActualAccuracyQuestion,
        setActualAccuracyAnswer,
        setIsAccuracyFinished,
      }}
    >
      {children}
    </AccuracyQuestionsContext.Provider>
  );
}

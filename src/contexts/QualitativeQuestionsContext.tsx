/* eslint-disable array-callback-return */
/* eslint-disable import/prefer-default-export */

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { FlowContext } from './FlowContext';

interface QualitativeQuestionsContextProps {
  actualQualitativeQuestion: number;
  actualQualitativeAnswer: Array<string>;
  setActualQualitativeQuestion: Dispatch<SetStateAction<number>>;
  setActualQualitativeAnswer: Dispatch<SetStateAction<Array<string>>>;
}

export const QualitativeQuestionsContext = createContext(
  {} as QualitativeQuestionsContextProps,
);

const emojis = ['hated', 'didnt_enjoyed', 'ok', 'enjoyed', 'really_enjoyed'];

export function QualitativeQuestionsContextProvider({ children }) {
  const { redyToNextPage, setRedyToNextPage } = useContext(FlowContext);
  const [actualQualitativeQuestion, setActualQualitativeQuestion] = useState(1);
  const [actualQualitativeAnswer, setActualQualitativeAnswer] = useState([]);

  useEffect(() => {
    // console.log('actualQualitativeQuestion ---', actualQualitativeQuestion);
  }, [actualQualitativeQuestion]);

  useEffect(() => {
    const checkEmojiResponse = [];
    if (!redyToNextPage) {
      actualQualitativeAnswer.map((value, index) => {
        checkEmojiResponse[index] = emojis.find((x) => x === value);
      });
    }

    if (
      checkEmojiResponse[0] !== undefined
      && checkEmojiResponse[1] !== undefined
      && checkEmojiResponse[2] !== undefined
    ) {
      setRedyToNextPage(true);
    }
  }, [actualQualitativeAnswer]);

  return (
    <QualitativeQuestionsContext.Provider
      value={{
        actualQualitativeQuestion,
        actualQualitativeAnswer,
        setActualQualitativeQuestion,
        setActualQualitativeAnswer,
      }}
    >
      {children}
    </QualitativeQuestionsContext.Provider>
  );
}

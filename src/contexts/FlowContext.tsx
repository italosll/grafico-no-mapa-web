/* eslint-disable import/prefer-default-export */

import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import { colors, nameColors } from '../colors/colors';

type color = {
  groupColorsName: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;

};

interface FlowProps {
  contextAnswers: Array<string>;
  redyToNextPage: boolean;
  nextPage: string;
  colorScheme: color;
  backgroundColor: string;
  actualPage: string;
  displayWarning: boolean;
  setcontextAnswers: Dispatch<SetStateAction<Array<string>>>;
  setRedyToNextPage: Dispatch<SetStateAction<boolean>>;
  setNextPage: Dispatch<SetStateAction<string>>;
  setColorScheme: Dispatch<SetStateAction<color>>;
  setBackgroundColor: Dispatch<SetStateAction<string>>;
  setActualPage: Dispatch<SetStateAction<string>>;
  showWarning: ()=>void;
  hideWarning: ()=>void;

}

export const FlowContext = createContext({} as FlowProps);

export function FlowProvider({ children }) {
  const [actualPage, setActualPage] = useState('/');
  const [contextAnswers, setcontextAnswers] = useState(['']);
  const [redyToNextPage, setRedyToNextPage] = useState(false);
  const [nextPage, setNextPage] = useState('/#');
  const [colorScheme, setColorScheme] = useState(colors[3]);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [displayWarning, setDisplayWarning] = useState(true)

  function showWarning(){
    setDisplayWarning(true)
  } 

  function hideWarning(){
    setDisplayWarning(false)
  } 

  useEffect(() => {
    const colorSchemeStorage = localStorage.getItem('esquema_de_cores');
    if (colorSchemeStorage) {
      if (colorSchemeStorage === nameColors[0]) setColorScheme(colors[0]);
      if (colorSchemeStorage === nameColors[1]) setColorScheme(colors[1]);
      if (colorSchemeStorage === nameColors[2]) setColorScheme(colors[2]);
    }
  }, []);

  return (
    <FlowContext.Provider
      value={{
        displayWarning,
        contextAnswers,
        redyToNextPage,
        nextPage,
        colorScheme,
        backgroundColor,
        actualPage,
        showWarning,
        hideWarning,
        setcontextAnswers,
        setRedyToNextPage,
        setNextPage,
        setColorScheme,
        setBackgroundColor,
        setActualPage,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
}

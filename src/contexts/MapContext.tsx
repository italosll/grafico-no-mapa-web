/* eslint-disable import/prefer-default-export */

import { Feature, Point } from '@turf/helpers';
import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { AccuracyQuestionsContext } from './AccuracyQuestionsContext';
import { QualitativeQuestionsContext } from './QualitativeQuestionsContext';
import grid from '../components/grid/grid.json';
import { getCenters } from '../core/Core';
import { Limits as GlobalArray } from '../components/limits/Limits';

interface MapContextProps {
  actualLimits: Array<number> | any;
  centers: Array<Feature<Point>>;
  actualAccuracyQuestion: number;
  actualQualitativeQuestion: number;
}

export const MapContext = createContext({} as MapContextProps);

export function MapContextProvider({ children }) {
  const [actualLimits, setActualLimits] = useState(GlobalArray[0]);
  const [centers] = useState(getCenters(grid.features));
  const { actualAccuracyQuestion } = useContext(AccuracyQuestionsContext);
  const { actualQualitativeQuestion } = useContext(QualitativeQuestionsContext);

  useEffect(() => {
    if (actualAccuracyQuestion > 1 && actualAccuracyQuestion <= 16) {
      setActualLimits(GlobalArray[actualAccuracyQuestion]);
    }
    if (actualQualitativeQuestion > 1 && actualAccuracyQuestion <= 4) {
      setActualLimits(GlobalArray[actualQualitativeQuestion]);
    }
  }, []);

  return (
    <MapContext.Provider
      value={{
        actualLimits,
        centers,
        actualAccuracyQuestion,
        actualQualitativeQuestion,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

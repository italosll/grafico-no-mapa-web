/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
import { ImageProps } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import { useContext, useEffect } from 'react';
// eslint-disable-next-line max-len
import { AccuracyQuestionsContext } from '../../../contexts/AccuracyQuestionsContext';
import { FlowContext } from '../../../contexts/FlowContext';
// eslint-disable-next-line max-len
import { QualitativeQuestionsContext } from '../../../contexts/QualitativeQuestionsContext';
import { BarMap } from './BarMap';
import { CircMap } from './CircMap';
import { LineMap } from './LineMap';
import { SquareMap } from './SquareMap';

import { Limits } from '../../limits/Limits';

const MapProps: ImageProps = {
  width: '100%',
  height: '100%',
  minHeight: '200px',
  padding: { base: '0rem', lg: '0.5rem' },
};

export default function SingleMap() {
  const { backgroundColor, setBackgroundColor, colorScheme } = useContext(
    FlowContext,
  );
  const { actualAccuracyQuestion, isAccuracyFinished } = useContext(AccuracyQuestionsContext);
  const { actualQualitativeQuestion } = useContext(QualitativeQuestionsContext);

  function between(x, first, last) {
    if (x >= first && x <= last) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    if (backgroundColor === '' || backgroundColor === undefined) {
      setBackgroundColor(localStorage.getItem('background_color'));
    }
  }, []);

  const arrayColors = [
    colorScheme.color1,
    colorScheme.color2,
    colorScheme.color3,
    colorScheme.color4,
    colorScheme.color5,
    colorScheme.color6,
  ];

  // actualAccuracyQuestion // correct Answer Color Position

  // Barmap
  // 1 -> 1
  // 2 -> 2
  // 3 -> 1
  // 4 -> 0

  // LineMap
  // 5 -> 2
  // 6 -> 1
  // 7 -> 4
  // 8 -> 0

  // SquareMap
  // 9 -> 1
  // 10 -> 4
  // 11 -> 0
  // 12 -> 2

  // CircMap
  // 13 -> 1
  // 14 -> 4
  // 15 -> 3
  // 16 -> 0

  // eslint-disable-next-line max-len
  const correctAnswerPosition = [1, 2, 1, 0, 2, 1, 4, 0, 1, 4, 0, 2, 1, 4, 3, 0];
  const correctColorLength = [3, 5, 7, 3, 3, 5, 7, 3, 3, 5, 7, 3, 3, 5, 7, 3];
  let greySection = 0;
  const correctColors:Array<string> = [];
  for (let i = 0; i < correctColorLength[actualAccuracyQuestion - 1]; i++) {
    if (i === correctAnswerPosition[actualAccuracyQuestion - 1]) {
      greySection = i;
      correctColors.push('#919191');
    } else if (arrayColors[i] == null) {
      correctColors.push(arrayColors[greySection]);
    } else {
      correctColors.push(arrayColors[i]);
    }
  }
  // console.log('-<>-', correctColorLength[actualAccuracyQuestion - 1]);

  // eslint-disable-next-line prefer-const
  // { let sections = Limits[actualAccuracyQuestion - 1]; }
  // console.log(correctColors);

  function getQualitativeMap() {
    return (
      // <LineMap
      //   limits={Limits[5]}
      //   colors={correctColors}
      //   {...MapProps}
      // />
      (between(actualQualitativeQuestion, 1, 1) && ( // resto da divisão - 1
      <BarMap
        limits={Limits[0]}
        colors={correctColors}
        {...MapProps}
      />

      ))
    || (between(actualQualitativeQuestion, 2, 2) && (
      <LineMap
        limits={Limits[4]}
        colors={correctColors}
        {...MapProps}
      />
    ))
    || (between(actualQualitativeQuestion, 3, 3) && (
      <SquareMap
        limits={Limits[4]}
        colors={correctColors}
        {...MapProps}
      />
    ))
    || (between(actualQualitativeQuestion, 4, 4) && (
    <CircMap
      limits={Limits[4]}
      colors={correctColors}
      {...MapProps}
    />
    ))

    );
  }

  function getAccuracyMap() {
    return (
      (between(actualAccuracyQuestion, 1, 4) && ( // resto da divisão - 1
        <BarMap
          limits={Limits[actualAccuracyQuestion - 1]}
          colors={correctColors}
          {...MapProps}
        />

      ))
      || (between(actualAccuracyQuestion, 5, 8) && (
        <LineMap
          limits={Limits[actualAccuracyQuestion - 1]}
          colors={correctColors}
          {...MapProps}
        />
      ))
      || (between(actualAccuracyQuestion, 9, 12) && (
        <SquareMap
          limits={Limits[actualAccuracyQuestion - 1]}
          colors={correctColors}
          {...MapProps}
        />
      ))
      || (between(actualAccuracyQuestion, 13, 16) && (
      <CircMap
        limits={Limits[actualAccuracyQuestion - 1]}
        colors={correctColors}
        {...MapProps}
      />
      ))
    );
  }

  // console.log(actualAccuracyQuestion, actualQualitativeQuestion);

  return (
    <Flex
      background={backgroundColor}
      borderRadius="2xl"
      width={{ base: '200px', lg: '300px' }}
      height={{ base: '200px', lg: '300px' }}
    >

      {isAccuracyFinished ? getQualitativeMap() : getAccuracyMap() }

    </Flex>
  );
}

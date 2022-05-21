/* eslint-disable array-callback-return */
import { Image, ImageProps } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { BarMap } from './BarMap';
import { CircMap } from './CircMap';
import { LineMap } from './LineMap';

import { colors, nameColors } from '../../../colors/colors';
import { FlowContext } from '../../../contexts/FlowContext';
import { Limits } from '../../limits/Limits';
import { SquareMap } from './SquareMap';

const MapProps: ImageProps = {
  width: {
    base: '18vw',
    md: '12vw',
    lg: '8vw',
    xl: '6vw',
  },
  height: { base: '10vh', md: '12vh', lg: '8v' },
  maxH: '10vw',
  maxW: '10vw',
  minH: '90px',
  minW: '90px',
  margin: { base: '0rem', lg: '0.5rem' },
};

type MapsProps = {
  mapNames: Array<string>;
};

export default function Maps({ mapNames }: MapsProps) {
  const { colorScheme, setColorScheme } = useContext(FlowContext);

  useEffect(() => {
    const groupName: string = localStorage.getItem('esquema_de_cores');
    if (localStorage.getItem('esquema_de_cores')) {
      setColorScheme(colors[nameColors.indexOf(groupName)]);
    }
  }, []);

  // eslint-disable-next-line prefer-const
  let arrayColors = [
    colorScheme.color1,
    colorScheme.color2,
    colorScheme.color3,
  ];

  return (
    <>
      {mapNames.map((value) => {
        if (value === 'LineMap') {
          return (
            <LineMap limits={Limits[4]} colors={arrayColors} {...MapProps} />
          );
        }
        if (value === 'BarMap') {
          return (
            <BarMap limits={Limits[0]} colors={arrayColors} {...MapProps} />
          );
        }
        if (value === 'CircMap') {
          return (
            <CircMap limits={Limits[4]} colors={arrayColors} {...MapProps} />
          );
        }
        if (value === 'SquareMap') {
          return (
            <SquareMap limits={Limits[4]} colors={arrayColors} {...MapProps} />
          );
        }

        return 0;
      })}
    </>
  );
}

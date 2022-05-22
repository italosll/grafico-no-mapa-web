/* eslint-disable react/style-prop-object */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-redeclare */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

import {
  ComposableMap,
  Marker,
  // ZoomableGroup,
} from 'react-simple-maps';

import { useContext, useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { getCenters, colorInRange } from '../../../core/Core';
import goias from '../../../maps/goias.json';

import grid from '../../grid/grid.json';

import theme from '../../../styles/theme';
import { FlowContext } from '../../../contexts/FlowContext';

import { Limits as GlobalArray } from '../../limits/Limits';
import { AccuracyQuestionsContext } from '../../../contexts/AccuracyQuestionsContext';
import { QualitativeQuestionsContext } from '../../../contexts/QualitativeQuestionsContext';
import { MapContext } from '../../../contexts/MapContext';

// export const CircMap = ({ limits, colors, ...props }) => {
//   const centers = getCenters(grid.features);

//   const test = (circ) => {
//     for (let l = 0; l < limits.length; l++) {
//       if (
//         colorInRange(circ.geometry.coordinates[1], limits[l][0], limits[l][1])
//       ) {
//         return colors[l];
//       }
//     }
//   };

export const SquareMap = ({
  limits,
  colors,
  rotateParam = [49.5, 16, 0],
  ...props
}) => {
  // const { actualLimits, centers } = useContext(MapContext);
  const centers = getCenters(grid.features);

  const test = (circ) => {
    for (let l = 0; l < limits.length; l++) {
      if (
        colorInRange(
          circ.geometry.coordinates[1],
          limits[l][0],
          limits[l][1],
        )
      ) {
        return colors[l];
      }
    }
  };

  return (
    <>
      <Flex {...props}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 5500, rotate: (rotateParam as any) }}
        >
          {centers?.map((circ, index) => (
            <Marker key={index} coordinates={circ.geometry.coordinates}>
              <rect width="13" height="13" fill={test(circ)} />
            </Marker>
          ))}
        </ComposableMap>
      </Flex>
    </>
  );
};

export default Map;

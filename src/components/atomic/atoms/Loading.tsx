/* eslint-disable max-len */
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useEffect } from 'react';

export default function Loading() {
  useEffect(() => {
    // const img = new Image(); // Create new img element
    // img.src = '/check.png';
    // const canvas: HTMLCanvasElement = document.querySelector('#canvas');
    // const context = canvas.getContext('2d');
    // context.drawImage(img, 0, 0);
    // console.log(test.convertToPNG(canvas));
    // window.location.href = image;
  }, []);
  return (
    <>
      {/* <canvas height="100%" width="100%" id="canvas" /> */}

      {/* <Spinner
        size="xs"
        width="20%"
        height="20vw"
        borderWidth="20px"
        speed="0.4s"
        color="#9bb4ff"
        position="fixed"
        zIndex="3"
        left="0px"
        right="0px"
        top="0px"
        bottom="0px"
        marginY="auto"
        marginX="auto"
      />
      <Text
        position="fixed"
        zIndex="3"
        left="0px"
        right="0px"
        top="0px"
        bottom="0px"
        marginY="auto"
        marginX="auto"
        background="red"
        width="100px"
        height="50px"
      >
        Só um momento...
      </Text> */}
    </>
  );
}

/* eslint-disable no-alert */
/* eslint-disable no-console */
import { Flex, Text, Button } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import Div100vh from 'react-div-100vh';
import validation from '../../validation/validation';
import CustomButton from '../components/atomic/atoms/CustomButton';
import { FlowContext } from '../contexts/FlowContext';
import saveAnswer from './api/answer';

const ButtonProps = {
  mt:{base:"auto", lg:"5rem"},
  width: { base: '100%', md: '100%', lg: '20rem' },
  height: { base: '3rem', lg: '100%' },
  maxHeight: '4rem',
  rounded: { base: 'none', lg: 'full' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  _focus: { textDecoration: 'none' },
  _hover: { textDecoration: 'none' },
  color:"white"
};

export default function WarningPage() {
 
  const {hideWarning} = useContext(FlowContext)


  return (
    <Div100vh>
      <Flex
        background="blue"
        width="100%"
        height="100%"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          width="250px"
          height="250px"
          background="url(/chrome.png)"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="center"
        />
        <Text color="white" textAlign="center" fontSize="2rem" maxWidth={{base:"80vw", lg:"50vw"}} fontWeight="700">

          Navegadores alternativos podem ter problemas para renderizar os componentes deste questionário.
          <br/>Por favor utilize o navegador google chrome!
          
        </Text>
        <Button
        {...ButtonProps}
        background={'#48BB78'}
        onClick={()=>{localStorage.setItem("warning_ok","ok"); hideWarning()}}
        cursor={'pointer' }
        
      >
        <a>Ok, estou utilizando o Chrome!</a>
      </Button>
      </Flex>
    </Div100vh>
  );
}

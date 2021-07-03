/* eslint-disable max-len */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import '../styles/globals.css';
import { FlowProvider } from '../contexts/FlowContext';
import { AccuracyQuestionsContextProvider } from '../contexts/AccuracyQuestionsContext';
import { QualitativeQuestionsContextProvider } from '../contexts/QualitativeQuestionsContext';
import { MapContextProvider } from '../contexts/MapContext';
import FinishPage from './FinishPage';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // const finished = localStorage?.getItem('finished') !== null;
  // if (finished) return <FinishPage />;
  useEffect(() => {
    if (localStorage.getItem('finished') !== null) {
      router.push('/FinishPage');
    }
  }, []);

  return (<>
    <Head>
    <title>Gráfico no mapa</title>
    <meta name="Ítalo Moreira Silva" 
    content={`
      Questionário referente a metamodelos de geovisualização, 
      as respostas serão utilizadas para mensurar aspéctos 
      qualitativos e de eficácia do metamodelos propostos
    `} />
    <link rel="icon" href="/favicon.ico" />
  </Head>

    <ChakraProvider theme={theme}>
      <FlowProvider>
        <AccuracyQuestionsContextProvider>
          <QualitativeQuestionsContextProvider>
            <MapContextProvider>
              <Component {...pageProps} />
            </MapContextProvider>
          </QualitativeQuestionsContextProvider>
        </AccuracyQuestionsContextProvider>
      </FlowProvider>
    </ChakraProvider>
    </>
  );
}

export default MyApp;

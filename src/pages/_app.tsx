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

const GOOGLE_VENDOR_NAME = 'Google Inc.';
function isOpera(){
  //@ts-ignore
  return Boolean(window.opr);
}
function isChromium() {
  //@ts-ignore
  return Boolean(window.chrome);
}

function getBrowserName() {
  const userAgent = window.navigator.userAgent;
  const vendor = window.navigator.vendor;
  switch (true) {
    case /Edge|Edg|EdgiOS/.test(userAgent):
      return 'Edge';
    case /OPR|Opera/.test(userAgent) && isOpera():
      return 'Opera';
    case /CriOS/.test(userAgent):
    case /Chrome/.test(userAgent) && vendor === GOOGLE_VENDOR_NAME && isChromium():
      return 'Chrome';
    case /Vivaldi/.test(userAgent):
      return 'Vivaldi';
    case /YaBrowser/.test(userAgent):
      return 'Yandex';
    case /Firefox|FxiOS/.test(userAgent):
      return 'Firefox';
    case /Safari/.test(userAgent):
      return 'Safari';
    case /MSIE|Trident/.test(userAgent):
      return 'Internet Explorer';
    default:
      return 'Unknown';
  }
}

function isChrome() {
  const name = getBrowserName();
  return name === 'Chrome';
}


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // const finished = localStorage?.getItem('finished') !== null;
  // if (finished) return <FinishPage />;
  useEffect(() => {

    // const userAgent = window.navigator.userAgent;
    // const vendor = window.navigator.vendor;
    // console.log(userAgent)

    // console.log(vendor)
    alert(getBrowserName())
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


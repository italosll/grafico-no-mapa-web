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

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // const finished = localStorage?.getItem('finished') !== null;
  // if (finished) return <FinishPage />;
  useEffect(() => {
    if (localStorage.getItem('finished') !== null) {
      router.push('/FinishPage');
    }
  }, []);

  return (
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
  );
}

export default MyApp;

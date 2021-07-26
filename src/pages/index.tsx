import { useContext, useEffect } from 'react';
import QuestionaryTemplate from '../../templates/QuestionaryTemplate';
import LimitsGenerator from '../components/atomic/atoms/SectionsGenerator';
import { FlowContext } from '../contexts/FlowContext';
import ContextQuestionsPage from './ContextQuestionsPage';
import Warning from './WarningPage';

export default function Home() {
  
  const {showWarning,hideWarning,displayWarning} = useContext(FlowContext)

  useEffect(() => {
    if (localStorage.getItem('warning_ok') !== null) {
      showWarning
    }else{
      hideWarning
    }
  })
  

  return(
    <>
    {displayWarning ? (

      <Warning/>
    ) :(

      <ContextQuestionsPage />
    )}
      {/* <LimitsGenerator /> */}
    </>
  );
}
